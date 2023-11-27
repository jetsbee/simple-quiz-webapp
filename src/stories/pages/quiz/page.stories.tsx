import type { Meta, StoryObj } from "@storybook/react";

import Page from "@/app/(pages)/quiz/page";
import { QuizStoreProvider } from "@/app/(states)/(Client)/(quiz)/_ContextProvider";
import { ReviewStoreProvider } from "@/app/(states)/(Client)/(review)/_ContextProvider";

const meta = {
  title: "pages/quiz",
  component: Page,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

const MockStateForQuiz = {
  quizIdx: 0,
  isAnswerSelected: false,
};

const MockStateForReview = {
  review: [],
};

export const Default: Story = {
  decorators: [
    (story) => {
      return (
        <QuizStoreProvider {...MockStateForQuiz}>
          <ReviewStoreProvider {...MockStateForReview}>
            {story()}
          </ReviewStoreProvider>
        </QuizStoreProvider>
      );
    },
  ],
};
