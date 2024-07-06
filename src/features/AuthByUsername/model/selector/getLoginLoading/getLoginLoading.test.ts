import { StateSchema } from "app/providers/StoriesProvider/config/StateSchema";
import { getLoginLoading } from "./getLoginLoading";

describe('getLoginIsLoading.test', () => {
    test('should return true', () => {
        const state: Partial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: Partial<StateSchema> = {};
        expect(getLoginLoading(state as StateSchema)).toEqual(false);
    });
});
