import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';

import cls from './ProfilePage.module.scss';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';


const reducers: ReducerList = {
   profile: profileReducer,
}

interface ProfilePageProps {
   className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
   return (

      <DynamicModuleLoader reducers={reducers}>
         <div className={classNames(cls.ProfilePage, {}, [className])}>
         </div>
      </DynamicModuleLoader>

   );
}

export default ProfilePage