"use client";

import { QuizForm } from "@/app/(components)/(QuizForm)/QuizForm";
import { QuizIndicator } from "@/app/(components)/(QuizIndicator)/QuizIndicator";
import { useQuizStore } from "@/app/(states)/(Client)/(quiz)/hooks";
import { useQuestions } from "@/app/(states)/(server)/TriviaQuestions";

export default function Quiz() {
  const { data, isFetching, isError } = useQuestions();
  const { quizIdx } = useQuizStore();

  const propsForQuizIndicator = {
    numOfQuiz: data?.length ?? 0,
  };
  const propsForQuizForm = {
    quiz: data && data[quizIdx],
    numOfQuiz: data?.length ?? 0,
  };

  return (
    <main>
      {isError || data?.length === 0 ? (
        <p>잠시 후 다시 시도해 주세요.</p>
      ) : isFetching || !data ? (
        <p>로딩중입니다.</p>
      ) : (
        <>
          <QuizIndicator {...propsForQuizIndicator} />
          <QuizForm {...propsForQuizForm} />
        </>
      )}
    </main>
  );
}
