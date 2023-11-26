"use client";

import { useContext } from "react";
import { useStoreWithEqualityFn } from "zustand/traditional";
import { ReviewContext } from "./context";
import { ReviewState, reviewStoreWithoutInitProps } from "./store";

const useReviewStoreWithOrWithoutProvider = <T>(
  selector: (state: ReviewState) => T,
  equalityFn?: (left: T, right: T) => boolean
): T => {
  const store = useContext(ReviewContext) ?? reviewStoreWithoutInitProps;
  return useStoreWithEqualityFn(store, selector, equalityFn);
};
// Ref 1. https://github.com/pmndrs/zustand/blob/main/docs/guides/initialize-state-with-props.md#extracting-context-logic-into-a-custom-hook
// Ref 2. https://github.com/vercel/next.js/blob/canary/examples/with-zustand/src/lib/store.ts#L26

export const useAddReview = () =>
  useReviewStoreWithOrWithoutProvider(({ addReview }) => addReview);

export const useReviewIds = () =>
  useReviewStoreWithOrWithoutProvider(({ review }) => Object.keys(review));

export const useReviewNoteById = (id: number) =>
  useReviewStoreWithOrWithoutProvider(({ review }) =>
    review[id] ? review[id].reviewNotes : null
  );

export const useResultReview = (id: number) =>
  useReviewStoreWithOrWithoutProvider(({ review }) => {
    const selectedReview = review[id];
    if (!selectedReview) return null;

    return {
      durationMs: selectedReview.endTime - selectedReview.startTime,
      numOfCorrectAnswer:
        selectedReview.numOfQuiz - selectedReview.reviewNotes.length,
      numOfWrongAnswer: selectedReview.reviewNotes.length,
    };
  });
