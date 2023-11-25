"use client";

import { useQuery } from "@tanstack/react-query";
import he from "he";
import { useCallback } from "react";
import { TriviaQuestionsResp, getTriviaQuestions } from "./(_networking)/api";
import { TRIVIA_QUESTIONS_QK } from "./(_react-query)/queryKeys";

// typing - ref. https://github.com/TanStack/query/discussions/1195#discussioncomment-110896
const useTriviaQuestionsRespQuery = <T extends any = TriviaQuestionsResp>(
  select?: (data: TriviaQuestionsResp) => T,
  enabled?: boolean
) =>
  useQuery({
    queryKey: TRIVIA_QUESTIONS_QK,
    queryFn: getTriviaQuestions,
    staleTime: 5000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    select,
    enabled,
  });

export const useQuestions = () =>
  useTriviaQuestionsRespQuery(
    useCallback(
      (data: TriviaQuestionsResp) =>
        data.results.map(
          ({
            question: rawQuestion,
            correct_answer: rawCorrectAnswer,
            incorrect_answers: rawIncorrectAnswers,
          }) => {
            const question = he.decode(rawQuestion);
            const correctAnswer = he.decode(rawCorrectAnswer);
            const answers = rawIncorrectAnswers.map((item) => he.decode(item));

            answers.splice(
              Math.floor(Math.random() * (answers.length + 1)),
              0,
              correctAnswer
            );

            return {
              question,
              answers,
              correctAnswer,
            };
          }
        ),
      []
    )
  );
