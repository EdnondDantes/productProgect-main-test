import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/index';

const meta: Meta<typeof AppLink> = {
  component: AppLink,
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
   children: 'Text',
   to: '/'
  }
};


export const Secondary: Story = {
  args: {
    ...Primary.args,
   theme: AppLinkTheme.SECONDARY

  }
};

export const Red: Story = {
  args: {
    ...Primary.args,
   theme: AppLinkTheme.RED

  }
};


