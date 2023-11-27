"use client";

import { useQuizStore } from "@/app/(states)/(Client)/(quiz)/hooks";
import { useQuestions } from "@/app/(states)/(server)/TriviaQuestions";
import { useRouter } from "next/navigation";
import { useRef } from "react";

interface QuizHookParams {
  handleWhileQuizPrepare: () => React.JSX.Element;
  handleQuizError: () => React.JSX.Element;
}

export const useQuiz = ({
  handleWhileQuizPrepare,
  handleQuizError,
}: QuizHookParams) => {
  const { data, isPending, isError, isFetching } = useQuestions();
  const { quizIdx, isAnswerSelected, setIsAnswerSelected, incrementQuizIdx } =
    useQuizStore();
  const router = useRouter();
  const startTime = useRef(Date.now()).current;

  if (isPending || isFetching) {
    return handleWhileQuizPrepare();
  }

  if (isError || data?.length === 0) {
    return handleQuizError();
  }

  const numOfQuiz = data.length;
  const isLastQuiz = quizIdx === numOfQuiz - 1;
  const isSelectedAndQuizLeftMore = isAnswerSelected && !isLastQuiz;
  const isSelectedAndDone = isAnswerSelected && isLastQuiz;
  const safelySetNextQuiz = () => {
    !isLastQuiz && incrementQuizIdx();
  };

  const singleQuizInfo = data[quizIdx];

  const propsForNextQuizButton = {
    onClick: () => {
      setIsAnswerSelected(false);
      safelySetNextQuiz();
    },
  };
  const propsForShowResultButton = {
    onClick: () => {
      router.replace(`/results?id=${startTime}`);
    },
  };

  return {
    numOfQuiz,
    singleQuizInfo,
    startTime,
    isSelectedAndQuizLeftMore,
    propsForNextQuizButton,
    isSelectedAndDone,
    propsForShowResultButton,
  }; // Do not add "props" property to distinguish itself from React component.
};
