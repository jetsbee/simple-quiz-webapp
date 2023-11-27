"use client";

import { useQuizFieldset } from "./(hooks)/useQuizFieldset";
import { StyledFieldset, StyledForm } from "./QuizForm.styled";
import { Props } from "./QuizForm.type";

export const QuizForm = ({ quiz }: Props) => {
  const {
    isAnswerSelected,
    handleFieldSetChange,
    isAnswerSelectedAndCorrect,
    isAnswerSelectedAndWrong,
  } = useQuizFieldset(quiz);

  const { question, answers, correctAnswer } = quiz;
  const propsForFieldset = {
    disabled: isAnswerSelected,
    onChange: handleFieldSetChange,
  };

  return (
    <StyledForm>
      <StyledFieldset {...propsForFieldset}>
        <legend>{question}</legend>
        {answers.map((answer) => (
          <label key={answer}>
            <input type="radio" value={answer} />
            {answer}
          </label>
        ))}
      </StyledFieldset>
      {isAnswerSelectedAndCorrect && <p>정답입니다.</p>}
      {isAnswerSelectedAndWrong && (
        <>
          <p>오답입니다.</p>
          <p>정답: {correctAnswer}</p>
        </>
      )}
    </StyledForm>
  );
};
