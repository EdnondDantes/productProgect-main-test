import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/index';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
   children: 'Text'
  }
};

export const Clear: Story = {
  args: {
    ...Primary.args,
   theme: ThemeButton.CLEAR
  }
};

export const Outline: Story = {
  args: {
    ...Primary.args,
    theme: ThemeButton.OUTLINE
  }
};


export const OutlineDark: Story = {
   args: {
     ...Primary.args,
     theme: ThemeButton.OUTLINE
   },
   decorators: [
    ThemeDecorator(Theme.DARK)
   ]
 };