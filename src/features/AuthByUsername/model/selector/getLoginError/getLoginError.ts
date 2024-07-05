import { StateSchema } from "app/providers/StoriesProvider/config/StateSchema";

export const getLoginError = (state: StateSchema) => state?.loginForm?.error;