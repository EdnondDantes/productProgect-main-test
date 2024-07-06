import type { Preview } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ProviderDecorator } from "shared/config/storybook/ProviderDecorator/ProviderDecorator";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { TranslationDecorator } from "shared/config/storybook/TranslationDecorator/TranslationDecorator";

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
    TranslationDecorator,
  ],

 
};

export default preview;
