import { persist } from "zustand/middleware";
import { createStore } from "zustand/vanilla";
import { storeResetFns } from "../(_zustand)/zustandWithResetFns";

export interface QuizProps {
  quizIdx: number;
}

export interface QuizState extends QuizProps {
  incrementQuizIdx: () => void;
}

export const createQuizStore = (initProps?: Partial<QuizProps>) => {
  const DEFAULT_PROPS: QuizProps = {
    quizIdx: 0,
  };

  return createStore<QuizState>()(
    persist(
      (set) => {
        storeResetFns.add(() => set(DEFAULT_PROPS));

        return {
          ...DEFAULT_PROPS,
          ...initProps,
          incrementQuizIdx: () =>
            set(({ quizIdx }) => ({
              quizIdx: ++quizIdx,
            })),
        };
      },
      {
        name: "quiz-storage",
        partialize: (state) =>
          Object.fromEntries(
            Object.entries(state).filter(([key]) => !["quizIdx"].includes(key))
          ),
      }
    )
  );
};

export type QuizStore = ReturnType<typeof createQuizStore>;

export const quizStoreWithoutInitProps = createQuizStore();
