import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";
// Ref. To Support msw2 with storybook: https://github.com/mswjs/msw-storybook-addon/issues/121#issuecomment-1777192208
import "../src/app/globals.css";
import GlobalDecorators from "./GlobalDecorators";

initialize();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
  decorators: [...GlobalDecorators],
};

export default preview;
