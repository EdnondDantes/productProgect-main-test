import { StateSchema } from "app/providers/StoriesProvider/config/StateSchema";

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';