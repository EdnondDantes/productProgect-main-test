import { classNames } from 'shared/lib/classNames/classNames';
import React, { Suspense } from 'react';

import cls from './LoginModal.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Loader } from 'shared/ui/Loader/Loader';

interface LoginModalProps {
   className?: string;
   isOpen: boolean;
   onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {

   const { 
      className, 
      isOpen, 
      onClose
    } = props;


   return (
      <Modal 
       className={classNames(cls.LoginModal, {}, [className])}
       isOpen={isOpen}
       onClose={onClose}
       lazyLoading
       >
         <Suspense fallback={<Loader />} > 
            <LoginFormAsync />
         </Suspense>
      </Modal>
   );
}