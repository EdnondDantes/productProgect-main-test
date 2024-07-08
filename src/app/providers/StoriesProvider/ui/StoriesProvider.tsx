import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';


interface StoriesProviderProps {
   children?: ReactNode;
   initialState?: StateSchema;
   asyncReducers?: Partial<ReducersMapObject<StateSchema>>

}

export const StoriesProvider = (props: StoriesProviderProps) => {
   
   const {
      children,
      initialState,
      asyncReducers
   } = props

   const navigate = useNavigate();

   const store = createReduxStore(
       initialState as StateSchema,
       asyncReducers as ReducersMapObject<StateSchema>,
       navigate
      );

   
   return (
      <Provider store={store} >
         {children}
      </Provider>
   );
}

