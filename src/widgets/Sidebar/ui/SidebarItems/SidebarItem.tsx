import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';

import cls from './Sidebar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { SidebarItemType } from '../Sidebar/model/items';
import { useTranslation } from 'react-i18next';

interface SidebarItemsProps {
   item: SidebarItemType
   collapsed: boolean
}



export const SidebarItems = memo(({ item, collapsed }: SidebarItemsProps) => {

   const { t } = useTranslation();

   return (
      <div className={classNames(cls.SidebarItem, {[cls.collapsed]: collapsed}, [])}>
         <AppLink theme={AppLinkTheme.SECONDARY} to={item.path} className={cls.item}>
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
              {t(item.text)}
            </span>
         </AppLink>
      </div>
   );
})