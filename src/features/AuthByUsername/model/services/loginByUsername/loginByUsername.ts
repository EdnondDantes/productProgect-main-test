import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserType, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}


export const loginByUsername = createAsyncThunk<UserType, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<UserType>('http://localhost:8000/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue(i18n.t('Вы ввели невернное имя пользователя или пароль'));
        }
    },
);
