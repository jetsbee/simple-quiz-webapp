"use client";

import { useContext } from "react";
import { useStoreWithEqualityFn } from "zustand/traditional";
import { QuizContext } from "./context";
import { QuizState, quizStoreWithoutInitProps } from "./store";

const useQuizStoreWithOrWithoutProvider = <T>(
  selector: (state: QuizState) => T,
  equalityFn?: (left: T, right: T) => boolean
): T => {
  const store = useContext(QuizContext) ?? quizStoreWithoutInitProps;
  return useStoreWithEqualityFn(store, selector, equalityFn);
};
// Ref 1. https://github.com/pmndrs/zustand/blob/main/docs/guides/initialize-state-with-props.md#extracting-context-logic-into-a-custom-hook
// Ref 2. https://github.com/vercel/next.js/blob/canary/examples/with-zustand/src/lib/store.ts#L26

export const useQuizStore = () => useQuizStoreWithOrWithoutProvider((_) => _);
