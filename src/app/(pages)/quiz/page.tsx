"use client";

import { QuizForm } from "@/app/(components)/(QuizForm)/QuizForm";
import { QuizIndicator } from "@/app/(components)/(QuizIndicator)/QuizIndicator";
import { useQuizStore } from "@/app/(states)/(Client)/(quiz)/hooks";
import { useQuestions } from "@/app/(states)/(server)/TriviaQuestions";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Quiz() {
  const { data, isPending, isError, isFetching } = useQuestions();
  const {
    quizIdx,
    isAnswerSelected,
    setIsAnswerSelected,
    incrementQuizIdx,
    reset,
  } = useQuizStore();
  const router = useRouter();
  const startTime = useRef(Date.now()).current;

  useEffect(() => {
    return function cleanUp() {
      reset();
    };
  }, [reset]);

  if (isPending || isFetching) {
    return <p>잠시 기다려 주세요.</p>;
  }
  if (isError || data?.length === 0) {
    return <p>잠시 후 다시 시도해 주세요.</p>;
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

  return (
    <main>
      <QuizIndicator {...propsForQuizIndicator} />
      <QuizForm {...propsForQuizForm} />
      {isSelectedAndQuizLeftMore && (
        <button
          onClick={() => {
            setIsAnswerSelected(false);
            safelySetNextQuiz();
          }}
        >
          다음 문항 풀기
        </button>
      )}
      {isSelectedAndDone && (
        <button
          onClick={() => {
            router.replace(`/results?id=${startTime}`);
          }}
        >
          결과 보기
        </button>
      )}
    </main>
  );
}
