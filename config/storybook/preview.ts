import type { Preview } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
   
  },

  decorators: [
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
  ],
 
};

export default preview;
