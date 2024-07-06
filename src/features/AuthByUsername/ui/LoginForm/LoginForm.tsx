import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useCallback, useEffect } from 'react';

import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { ReduxStoreWithManagers, StateSchema } from 'app/providers/StoriesProvider/config/StateSchema';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginUsername } from '../../model/selector/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selector/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selector/getLoginError/getLoginError';
import { getLoginLoading } from '../../model/selector/getLoginLoading/getLoginLoading';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';

export interface LoginFormProps {
   className?: string;
}

const initialReducer: ReducerList = {
   loginForm: loginReducer,
}

type loginDispatch = ThunkDispatch<StateSchema, undefined, UnknownAction>

const LoginForm = memo(({ className }: LoginFormProps) => {

   const {t} = useTranslation();

   const dispatch = useDispatch<loginDispatch>();

   const username = useSelector(getLoginUsername);
   const password = useSelector(getLoginPassword);
   const error = useSelector(getLoginError);
   const isLoading = useSelector(getLoginLoading);

   const onChangeUsername = useCallback((value: string) => {
      dispatch(loginActions.setUsername(value));
   }, [dispatch]);

   const onChangePassword = useCallback((value: string) => {
      dispatch(loginActions.setPassword(value));
   }, [dispatch]);

   const onLoadingClick = useCallback(() => {
      dispatch(loginByUsername({ username, password }));
   }, [dispatch, username, password]);

   return (

         <DynamicModuleLoader reducers={initialReducer}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
            
               <Text
                title={t('Форма входа')}
                />
            
               {error &&
                <Text
                 title={error}
                 theme={TextTheme.ERROR}
                 />
                 }
            
               <Input
                type="text"
                className={cls.loginInput}
                placeholder={t('Логин')}
                autofocus
                onChange={onChangeUsername}
                value={username}            />
               <Input
                type="text"
                className={cls.loginInput}
                placeholder={t('Пароль')}
                onChange={onChangePassword}
                value={password}
                  />
            
               <Button
                className={cls.loginBtn}
                onClick={onLoadingClick}
                disabled={isLoading}
                >
                  {t('Войти')}
               </Button>
            </div>
         </DynamicModuleLoader>

   );
})


export default LoginForm