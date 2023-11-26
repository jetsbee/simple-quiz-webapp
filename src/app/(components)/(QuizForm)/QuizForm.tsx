"use client";

import { useQuizStore } from "@/app/(states)/(Client)/(quiz)/hooks";
import { useAddReview } from "@/app/(states)/(Client)/(review)/hooks";
import { Review } from "@/app/(states)/(Client)/(review)/store";
import { useEffect, useRef, useState } from "react";
import { Props } from "./QuizForm.type";

export const QuizForm = ({
  quiz: { question, answers, correctAnswer, numOfQuiz, startTime },
}: Props) => {
  const { isAnswerSelected, setIsAnswerSelected, quizIdx, reset } =
    useQuizStore();
  const [selectedAnswer, setSelectedAnswer] = useState<string>();
  const addReview = useAddReview();
  const quizActivity = useRef<Review>({
    numOfQuiz,
    startTime,
    reviewNotes: [],
    endTime: startTime,
  }).current;

  useEffect(() => {
    return function cleanUp() {
      reset();
    };
  }, [reset]);

  const isAnswerSelectedAndCorrect =
    isAnswerSelected && selectedAnswer === correctAnswer;
  const isAnswerSelectedAndWrong =
    isAnswerSelected && selectedAnswer !== correctAnswer;

  const propsForFieldset = {
    disabled: isAnswerSelected,
    onChange: (e: React.FormEvent<HTMLFieldSetElement>) => {
      if (!(e.target instanceof HTMLInputElement)) return;

      const { value: selectedAnswer } = e.target;
      setSelectedAnswer(selectedAnswer);
      setIsAnswerSelected(true);

      if (selectedAnswer !== correctAnswer) {
        quizActivity.reviewNotes.push({
          question,
          answers,
          correctAnswer,
          selectedAnswer,
        });
      }

      if (quizIdx === numOfQuiz - 1) {
        quizActivity.endTime = Date.now();
        addReview({ ...quizActivity });
      }
    },
  };

  return (
    <form>
      <fieldset {...propsForFieldset}>
        <legend>{question}</legend>
        {answers.map((answer) => (
          <label key={answer}>
            <input type="radio" name="answers" value={answer} />
            {answer}
          </label>
        ))}
      </fieldset>
      {isAnswerSelectedAndCorrect && <p>정답입니다.</p>}
      {isAnswerSelectedAndWrong && (
        <>
          <p>오답입니다.</p>
          <p>정답: {correctAnswer}</p>
        </>
      )}
    </form>
  );
};
