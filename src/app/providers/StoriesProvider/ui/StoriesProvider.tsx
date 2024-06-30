import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';


interface StoriesProviderProps {
   children?: React.ReactNode;
   initialState?: StateSchema;

}

export const StoriesProvider = (props: StoriesProviderProps) => {
   
   const {
      children,
      initialState
   } = props

   const store = createReduxStore();

   
   return (
      <Provider store={store} >
         {children}
      </Provider>
   );
}

