import type { Meta, StoryObj } from "@storybook/react";

import Page from "@/app/(pages)/bear/page";
import { BearStoreProvider } from "@/app/(providers)/(context)/BearStoreProvider";

const meta = {
  title: "pages/bear",
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

const MockStateFor99Bears = {
  bears: 99,
};

export const Default: Story = {};

export const NinetyNineBears: Story = {
  decorators: [
    (story) => {
      return (
        <BearStoreProvider {...MockStateFor99Bears}>
          {story()}
        </BearStoreProvider>
      );
    },
  ],
};
