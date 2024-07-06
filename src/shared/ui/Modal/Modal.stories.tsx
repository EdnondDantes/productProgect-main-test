import { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, cumque.'

const meta: Meta<typeof Modal> = {
   component: Modal,
};
export default meta;

type Story = StoryObj<typeof Modal>;


export const Primary: Story = {
   args: {
      children: lorem,
      isOpen: true
   }
};


export const Dark: Story = {
   args: {
      children: lorem,
      isOpen: true
   }
};

Dark.decorators = [ThemeDecorator(Theme.DARK)]