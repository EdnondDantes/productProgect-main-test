import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ThemeButton } from './Button';
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



export const BackgroundInverted: Story = {
   args: {
     ...Primary.args,
     theme: ThemeButton.BACKGROUND_INVERTED
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

 export const SquareSizeM: Story = {
   args: {
     ...Primary.args,
     children: '<',
     square: true,
     size: ButtonSize.M
   }
 };


 export const SquareSizeL: Story = {
   args: {
     ...Primary.args,
     children: '<',
     square: true,
     size: ButtonSize.L
   }
 };

 export const SquareSizeXL: Story = {
   args: {
     ...Primary.args,
     children: '<',
     square: true,
     size: ButtonSize.XL
   }
 };

 export const OutlineSizeM: Story = {
   args: {
     ...Primary.args,
     size: ButtonSize.M
   }
 };

 export const OutlineSizeL: Story = {
   args: {
     ...Primary.args,
     size: ButtonSize.L
   }
 };

 export const OutlineSizeXL: Story = {
   args: {
     ...Primary.args,
     size: ButtonSize.XL
   }
 };