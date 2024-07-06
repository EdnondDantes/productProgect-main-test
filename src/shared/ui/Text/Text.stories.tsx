import { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';



const meta: Meta<typeof Text> = {
   component: Text,
};
export default meta;

type Story = StoryObj<typeof Text>;


export const Primary: Story = {
   args: {
      text: 'Text',
      title: 'Title'
   }
};



export const DarkTheme: Story = {
   args: {
      ...Primary.args
   },
   decorators: [
      ThemeDecorator(Theme.DARK)
     ]
};

export const ErrorTheme: Story = {
   args: {
      ...Primary.args,
      theme: TextTheme.ERROR
   },
};