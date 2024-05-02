import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NonFoundPage }  from './NonFoundPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';


const meta: Meta<typeof NonFoundPage> = {
  component: NonFoundPage,
};

export default meta;
type Story = StoryObj<typeof NonFoundPage>;

export const Light: Story = {
  args: {
  },
  decorators: [
    // ThemeDecorator(Theme.LIGHT)
  ]
};

export const Dark: Story = {
  args: {
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
};

