import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';

import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
   className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
   return (
      <div className={classNames(cls.ProfilePage, {}, [className])}>

      </div>
   );
}

export default ProfilePage