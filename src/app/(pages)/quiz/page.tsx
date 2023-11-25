"use client";

import { QuizForm } from "@/app/(components)/(QuizForm)/QuizForm";
import { QuizIndicator } from "@/app/(components)/(QuizIndicator)/QuizIndicator";
import { useQuizStore } from "@/app/(states)/(Client)/(quiz)/hooks";
import { useQuestions } from "@/app/(states)/(server)/TriviaQuestions";

export default function Quiz() {
  const { data, isFetching, isError } = useQuestions();
  const { quizIdx, isAnswerSelected, setIsAnswerSelected, incrementQuizIdx } =
    useQuizStore();
  const numOfQuiz = data?.length ?? 0;
  const isLastQuiz = quizIdx === numOfQuiz - 1;
  const safelySetNextQuiz = () => {
    !isLastQuiz && incrementQuizIdx();
  };
  const propsForQuizIndicator = {
    numOfQuiz,
  };
  const propsForQuizForm = {
    quiz: data && data[quizIdx],
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
          {isAnswerSelected && !isLastQuiz && (
            <button
              onClick={() => {
                setIsAnswerSelected(false);
                safelySetNextQuiz();
              }}
            >
              다음 문항 풀기
            </button>
          )}
          {isAnswerSelected && isLastQuiz && <button>결과 보기</button>}
        </>
      )}
    </main>
  );
}
