import React from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {

    const [isAuthModal, setIsAuthModal] = React.useState(false);

    // const onToggleModal = React.useCallback(() => {
    //     setIsAuthModal(prev => !prev);
    // }, []);

    const onCloseModal = React.useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenModal = React.useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
             theme={ThemeButton.CLEAR_INVERTED}
              className={cls.links}
              onClick={onOpenModal}
              >
                {t('Войти')}
            </Button>
            
            <LoginModal
             isOpen={isAuthModal}
             onClose={onCloseModal}    
             >

            </LoginModal>

        </div>
    );
};




