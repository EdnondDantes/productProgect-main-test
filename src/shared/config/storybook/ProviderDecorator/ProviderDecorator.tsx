import { StoriesProvider } from "app/providers/StoriesProvider";
import { StateSchema } from "app/providers/StoriesProvider/config/StateSchema";
import React from "react";

export const ProviderDecorator = (state: StateSchema) => (StoryComponent: React.ComponentType) => {
  return (
    <StoriesProvider initialState={state}>
        <StoryComponent />
    </StoriesProvider>
  );
}
