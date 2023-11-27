"use client";

import { StyledButton } from "@/app/(components)/(Common)/common.styled";
import { QuizForm } from "@/app/(components)/(QuizForm)/QuizForm";
import { QuizIndicator } from "@/app/(components)/(QuizIndicator)/QuizIndicator";
import { StyledMain } from "../(_styled)/page.styled";
import { useQuiz } from "./(hooks)/useQuiz";

const QuizLoader = () => {
  return (
    <StyledMain>
      <p>잠시 기다려 주세요.</p>
    </StyledMain>
  );
};

const QuizErrorComponent = () => {
  return (
    <StyledMain>
      <p>잠시 후 다시 시도해 주세요.</p>
    </StyledMain>
  );
};

const instanceOfJSXElement = (object: any): object is JSX.Element => {
  return "props" in object;
}; // type guard

export default function Quiz() {
  const quizOrFallbackComponent = useQuiz({
    handleWhileQuizPrepare: QuizLoader,
    handleQuizError: QuizErrorComponent,
  });

  if (instanceOfJSXElement(quizOrFallbackComponent)) {
    return quizOrFallbackComponent;
  }

  const {
    numOfQuiz,
    singleQuizInfo,
    startTime,
    isSelectedAndQuizLeftMore,
    propsForNextQuizButton,
    isSelectedAndDone,
    propsForShowResultButton,
  } = quizOrFallbackComponent;

  const propsForQuizIndicator = {
    numOfQuiz,
  };
  const propsForQuizForm = {
    quiz: { ...singleQuizInfo, numOfQuiz, startTime },
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
