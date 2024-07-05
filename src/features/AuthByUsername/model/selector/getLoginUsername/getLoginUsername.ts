import { StateSchema } from "app/providers/StoriesProvider/config/StateSchema";

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';