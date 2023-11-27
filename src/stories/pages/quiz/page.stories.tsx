import type { PartialStoryFn } from "@storybook/csf";
import type { Meta, ReactRenderer, StoryObj } from "@storybook/react";

import Page from "@/app/(pages)/quiz/page";
import { QuizStoreProvider } from "@/app/(states)/(Client)/(quiz)/_ContextProvider";
import { ReviewStoreProvider } from "@/app/(states)/(Client)/(review)/_ContextProvider";
import { fireEvent, waitFor, within } from "@storybook/testing-library";
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

// Utils for testing code
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function* generateSequence(start: number, end: number) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
} // Ref. https://ko.javascript.info/async-iterators-generators#ref-2968
// End of Utils for testing code

export const Default: Story = {
  decorators: [storeProvidersDecorator],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const selectedAnswers = [
      "0",
      "Fred Flintstone",
      "Raigor Stonehoof",
      "Sniper vs. Spy Update",
      "Hattie Hargrove",
    ];
    const quizResults = [
      "정답입니다.",
      "정답입니다.",
      "정답입니다.",
      "정답입니다.",
      "오답입니다.",
    ];

    const selectAnswer = async (answer: string) => {
      await waitFor(async () => {
        const radio = canvas.getByDisplayValue(answer);
        await fireEvent.click(radio);
      });
    };

    const clickNextQuizButton = async () => {
      await waitFor(async () => {
        const nextBtn = canvas.getByText("다음 문항 풀기");
        await fireEvent.click(nextBtn);
      });
    };

    // 1~4 문제 풀기 시뮬레이션
    for await (const idx of generateSequence(0, 3)) {
      const selectedAnswer = selectedAnswers[idx];
      await selectAnswer(selectedAnswer);
      canvas.getByText(quizResults[idx]);
      await clickNextQuizButton();
    }

    // 5번(마지막) 문제 풀기 시뮬레이션
    await selectAnswer(selectedAnswers[4]);
    canvas.getByText(quizResults[4]);
  },
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
