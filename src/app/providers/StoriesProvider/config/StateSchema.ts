import { EnhancedStore } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ReducerManager } from './reducerManager';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    profile: ProfileSchema;

    // Асинхронные редьюсеры:
    loginForm?: LoginSchema;
}



export type StateSchemaKey = keyof StateSchema;


export interface ReduxStoreWithManagers extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
} 

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
}