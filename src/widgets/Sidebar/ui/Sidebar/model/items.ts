import AboutIcon from 'shared/assets/icons/AboutPage-icon.svg';
import MainIcon from 'shared/assets/icons/MainPage-icon.svg';
import ProfileIcon from 'shared/assets/icons/ProfilePage-icon.svg';
import { RoutePath } from "shared/config/routeConfig/routeConfig"


export interface SidebarItemType {
   path: string
   text: string
   Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [

   {
      path: RoutePath.main,
      text: 'Главная',
      Icon: MainIcon 
   },

   {
      path: RoutePath.about,
      text: 'О сайте',
      Icon: AboutIcon
   },

   {
      path: RoutePath.profile,
      text: 'Профиль',
      Icon: ProfileIcon,
   }



]

