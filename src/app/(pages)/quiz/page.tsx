"use client";

import { StyledButton } from "@/app/(components)/(Common)/common.styled";
import { QuizForm } from "@/app/(components)/(QuizForm)/QuizForm";
import { QuizIndicator } from "@/app/(components)/(QuizIndicator)/QuizIndicator";
import { useQuizStore } from "@/app/(states)/(Client)/(quiz)/hooks";
import { useQuestions } from "@/app/(states)/(server)/TriviaQuestions";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { StyledMain } from "../(_styled)/page.styled";

export default function Quiz() {
  const { data, isPending, isError, isFetching } = useQuestions();
  const { quizIdx, isAnswerSelected, setIsAnswerSelected, incrementQuizIdx } =
    useQuizStore();
  const router = useRouter();
  const startTime = useRef(Date.now()).current;

  if (isPending || isFetching) {
    return (
      <StyledMain>
        <p>잠시 기다려 주세요.</p>
      </StyledMain>
    );
  }
  if (isError || data?.length === 0) {
    return (
      <StyledMain>
        <p>잠시 후 다시 시도해 주세요.</p>
      </StyledMain>
    );
  }

  const numOfQuiz = data.length;
  const isLastQuiz = quizIdx === numOfQuiz - 1;
  const isSelectedAndQuizLeftMore = isAnswerSelected && !isLastQuiz;
  const isSelectedAndDone = isAnswerSelected && isLastQuiz;
  const safelySetNextQuiz = () => {
    !isLastQuiz && incrementQuizIdx();
  };

  const propsForQuizIndicator = {
    numOfQuiz,
  };
  const propsForQuizForm = {
    quiz: { ...data[quizIdx], numOfQuiz, startTime },
  };
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

  return (
    <StyledMain>
      <QuizIndicator {...propsForQuizIndicator} />
      <QuizForm {...propsForQuizForm} />
      {isSelectedAndQuizLeftMore && (
        <StyledButton {...propsForNextQuizButton}>다음 문항 풀기</StyledButton>
      )}
      {isSelectedAndDone && (
        <StyledButton {...propsForShowResultButton}>결과 보기</StyledButton>
      )}
    </StyledMain>
  );
}
