

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NonFoundPage.module.scss';
import { useTranslation } from 'react-i18next';
// import { t } from 'i18next';

interface NonFoundPageProps {
   className?: string;
}



export const NonFoundPage = ({ className }: NonFoundPageProps) => {
   const {t} = useTranslation();

   return (
      <div className={classNames(cls.NonFoundPage, {}, [className])}>
         {t('Cтраница не найдена')}
      </div>
   );
}