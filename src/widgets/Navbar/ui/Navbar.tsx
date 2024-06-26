import React from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {

    const [isAuthModal, setIsAuthModal] = React.useState(false);

    const onToggleModal = React.useCallback(() => {
        setIsAuthModal(prev => !prev);
    }, []);

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
             theme={ThemeButton.CLEAR_INVERTED}
              className={cls.links}
              onClick={onToggleModal}
              >
                {t('Войти')}
            </Button>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}
                 > 
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni fugit provident ex impedit, quidem reiciendis ab est sed at adipisci assumenda rerum architecto distinctio, deserunt eligendi fuga quibusdam nemo! Alias.
            </Modal>

        </div>
    );
};




