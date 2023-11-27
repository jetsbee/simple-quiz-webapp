"use client";

import { useQuizStore } from "@/app/(states)/(Client)/(quiz)/hooks";
import { useAddReview } from "@/app/(states)/(Client)/(review)/hooks";
import { Review } from "@/app/(states)/(Client)/(review)/store";
import { useEffect, useRef, useState } from "react";
import { Quiz } from "../QuizForm.type";

export const useQuizFieldset = ({
  question,
  answers,
  correctAnswer,
  numOfQuiz,
  startTime,
}: Quiz) => {
  const { isAnswerSelected, setIsAnswerSelected, quizIdx, reset } =
    useQuizStore();
  const addReview = useAddReview();
  const [selectedAnswer, setSelectedAnswer] = useState<string>();
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

  const handleFieldSetChange = (e: React.FormEvent<HTMLFieldSetElement>) => {
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
  };

  const isAnswerSelectedAndCorrect =
    isAnswerSelected && selectedAnswer === correctAnswer;

  const isAnswerSelectedAndWrong =
    isAnswerSelected && selectedAnswer !== correctAnswer;

  return {
    handleFieldSetChange,
    isAnswerSelected,
    isAnswerSelectedAndCorrect,
    isAnswerSelectedAndWrong,
  };
};
