import { createJSONStorage, persist } from "zustand/middleware";
import { createStore } from "zustand/vanilla";
import { storeResetFns } from "../(_zustand)/zustandWithResetFns";

export interface ReviewNote {
  question: string;
  answers: string[];
  correctAnswer: string;
  selectedAnswer: string;
}

export interface Review {
  numOfQuiz: number;
  startTime: number;
  endTime: number;
  reviewNotes: ReviewNote[];
}

export interface ReviewProps {
  review: {
    [id: number]: Review;
  };
}

export interface ReviewState extends ReviewProps {
  addReview: (review: Review) => void;
}

export const createReviewStore = (initProps?: Partial<ReviewProps>) => {
  const DEFAULT_PROPS: ReviewProps = {
    review: {},
  };

  return createStore<ReviewState>()(
    persist(
      (set) => {
        storeResetFns.add(() => set(DEFAULT_PROPS));

        return {
          ...DEFAULT_PROPS,
          ...initProps,
          addReview: (newReview) =>
            set(({ review }) => ({
              review: {
                [newReview.startTime]: newReview,
                ...review,
              },
            })),
        };
      },
      {
        name: "review-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  );
};

export type ReviewStore = ReturnType<typeof createReviewStore>;

export const reviewStoreWithoutInitProps = createReviewStore();
