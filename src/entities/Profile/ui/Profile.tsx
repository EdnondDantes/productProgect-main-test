import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';

import cls from './Profile.module.scss';

interface ProfileProps {
   className?: string;
   
}

export const Profile = (props: ProfileProps) => {
   const { 
      className,
   } = props;
   return (
      <div className={classNames(cls.Profile, {}, [className])}>

      </div>
   );
}