import { StoryFn } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

// Принимаем компонент Story и возвращаем функцию обертку
export const RouterDecorator =  (Story: React.ComponentType) => (
   <BrowserRouter>
     <Story />
   </BrowserRouter>
   )
