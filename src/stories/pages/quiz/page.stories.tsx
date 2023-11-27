import type { PartialStoryFn } from "@storybook/csf";
import type { Meta, ReactRenderer, StoryObj } from "@storybook/react";

import Page from "@/app/(pages)/quiz/page";
import { QuizStoreProvider } from "@/app/(states)/(Client)/(quiz)/_ContextProvider";
import { ReviewStoreProvider } from "@/app/(states)/(Client)/(review)/_ContextProvider";
import { HttpResponse, delay, http } from "msw";
import {
  MockedQuestions_OK,
  MockedQuestions_TooManyRequests,
} from "./MockedData";

const meta = {
  title: "pages/quiz",
  component: Page,
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    msw: {
      handlers: [
        http.get(
          "https://opentdb.com/api.php?amount=5&type=multiple",
          ({ request }) => {
            return HttpResponse.json(MockedQuestions_OK);
          }
        ),
      ],
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

const storeProvidersDecorator = (story: PartialStoryFn<ReactRenderer, {}>) => (
  <QuizStoreProvider {...MockStateForQuiz}>
    <ReviewStoreProvider {...MockStateForReview}>{story()}</ReviewStoreProvider>
  </QuizStoreProvider>
);

export const Default: Story = {
  decorators: [storeProvidersDecorator],
};

export const NetworkingError: Story = {
  decorators: [storeProvidersDecorator],
  parameters: {
    msw: {
      handlers: [
        http.get(
          "https://opentdb.com/api.php?amount=5&type=multiple",
          ({ request }) => {
            return HttpResponse.json(MockedQuestions_TooManyRequests, {
              status: 429,
            });
          }
        ),
      ],
    },
  },
};

export const Loading: Story = {
  decorators: [storeProvidersDecorator],
  parameters: {
    msw: {
      handlers: [
        http.get(
          "https://opentdb.com/api.php?amount=5&type=multiple",
          async ({ request }) => {
            await delay("infinite");
          }
        ),
      ],
    },
  },
};
