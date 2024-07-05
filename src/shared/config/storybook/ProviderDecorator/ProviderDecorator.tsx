import { ReducersMapObject } from "@reduxjs/toolkit";
import { StoriesProvider } from "app/providers/StoriesProvider";
import { StateSchema } from "app/providers/StoriesProvider/config/StateSchema";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import React from "react";

const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer
};

export const ProviderDecorator = (state: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) => (StoryComponent: React.ComponentType) => {
  return (
    <StoriesProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoriesProvider>
  );
}
