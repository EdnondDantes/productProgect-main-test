import { StateSchema } from "app/providers/StoriesProvider/config/StateSchema";

export const getLoginLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;