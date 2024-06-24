import React from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";
import { Button, ButtonSize, ThemeButton } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from 'shared/assets/icons/MainPage-icon.svg';
import AboutIcon from 'shared/assets/icons/AboutPage-icon.svg';


interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {

    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
           <Button
            onClick={onToggle}
            className={cls.collapseBtn}
            theme={ThemeButton.BACKGROUND_INVERTED}
            size={ButtonSize.L}
            square
            >
            {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.links}>
                <div className={cls.item}>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={cls.item}>
                        <MainIcon className={cls.icon} />
                        <span className={cls.link}>
                            {t('Главная')}
                        </span>
                    </AppLink>
                </div>

                <div >
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={cls.item}>
                    <AboutIcon className={cls.icon} />
                        <span className={cls.link}>
                            {t('О сайтике')}
                        </span>
                    </AppLink>
                </div>
 
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang}/>
            </div>
        </div>
    );
};

