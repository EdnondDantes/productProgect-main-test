import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithManagers, StateSchemaKey } from "app/providers/StoriesProvider/config/StateSchema";
import { FC, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";


export type ReducerList = {
   [name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer] 

interface DynamicModuleLoaderProps {
   children?: React.ReactNode;
   
   reducers: ReducerList;
   saveAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {

   const { children, reducers, saveAfterUnmount = false } = props
  
   const store = useStore() as ReduxStoreWithManagers

   const dispatch = useDispatch()

   useEffect(() => {

      Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
         store.reducerManager.add(name, reducer);
         dispatch({ type: `@INIT ${name} reducer` });
      })

      return () => {
         if (!saveAfterUnmount) {
            Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
               store.reducerManager.remove(name);
               dispatch({ type: `@DESTROY ${name} reducer` });
            })
            
         }
      }
    }, [])

   return(
      <>
         {children}
      </>
   )

}

