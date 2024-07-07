import React from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";
import { Button, ButtonSize, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { SidebarItemsList } from "./model/items";
import { SidebarItems } from "../SidebarItems/SidebarItem";


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
                    {SidebarItemsList.map((item) => (
                        <SidebarItems
                            item={item}
                            collapsed={collapsed}
                            key={item.path}
                         />
                    ))}
                </div>

            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang}/>
            </div>
        </div>
    );
};

