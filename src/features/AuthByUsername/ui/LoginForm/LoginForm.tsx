import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useCallback } from 'react';

import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginSchema } from '../../model/selector/getLoginSchema/getLoginSchema';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoriesProvider/config/StateSchema';

interface LoginFormProps {
   className?: string;
}

type loginDispatch = ThunkDispatch<StateSchema, undefined, UnknownAction>

export const LoginForm = memo(({ className }: LoginFormProps) => {

   const {t} = useTranslation();

   const dispatch = useDispatch<loginDispatch>();
   const { username, password, isLoading, error } = useSelector(getLoginSchema);


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
      <div className={classNames(cls.LoginForm, {}, [className])}>


         {error && <div>{error}</div>}

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
   );
})