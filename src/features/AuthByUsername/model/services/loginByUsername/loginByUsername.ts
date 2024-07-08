import { $api } from 'shared/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserType, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localStorage';
import { ThunkConfig } from 'app/providers/StoriesProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}


export const loginByUsername = createAsyncThunk<UserType, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        const { dispatch, rejectWithValue, extra} = thunkApi;
        try {  
            const response = await extra.api.post<UserType>('/login', authData);
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))
            
            extra.navigate('./about')

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(i18n.t('Вы ввели невернное имя пользователя или пароль'));
        }
    },
);


