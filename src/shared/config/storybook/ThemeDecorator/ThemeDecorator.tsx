import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import React from "react";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: React.ComponentType) => {
  return (
    <ThemeProvider>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
}
