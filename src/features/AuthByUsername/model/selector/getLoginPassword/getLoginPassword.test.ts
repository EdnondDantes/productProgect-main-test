import { StateSchema } from 'app/providers/StoriesProvider/config/StateSchema';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return value', () => {
        const state: Partial<StateSchema> = {
            loginForm: {
                password: '123123',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('123123');
    });
    test('should work with empty state', () => {
        const state: Partial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});