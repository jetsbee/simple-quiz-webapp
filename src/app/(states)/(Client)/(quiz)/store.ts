import { createJSONStorage, persist } from "zustand/middleware";
import { createStore } from "zustand/vanilla";
import { storeResetFns } from "../(_zustand)/zustandWithResetFns";

export interface QuizProps {
  quizIdx: number;
  isAnswerSelected: boolean;
}

export interface QuizState extends QuizProps {
  incrementQuizIdx: () => void;
  setIsAnswerSelected: (isAnswerSelected: boolean) => void;
  reset: () => void;
}

export const createQuizStore = (initProps?: Partial<QuizProps>) => {
  const DEFAULT_PROPS: QuizProps = {
    quizIdx: 0,
    isAnswerSelected: false,
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
          setIsAnswerSelected: (isAnswerSelected) => set({ isAnswerSelected }),
          reset: () => set(DEFAULT_PROPS),
        };
      },
      {
        name: "quiz-storage",
        storage: createJSONStorage(() => sessionStorage),
        partialize: (state) =>
          Object.fromEntries(
            Object.entries(state).filter(
              ([key]) => !["quizIdx", "isAnswerSelected"].includes(key)
            )
          ),
      }
    )
  );
};

export type QuizStore = ReturnType<typeof createQuizStore>;

export const quizStoreWithoutInitProps = createQuizStore();
