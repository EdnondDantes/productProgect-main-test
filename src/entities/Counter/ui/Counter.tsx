
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { counterActions } from '../model/slice/CounterSlice';
import { getCounterValue } from '../model/selector/getCounterValue/getCounterValue';
import { StoriesProvider } from 'app/providers/StoriesProvider';

// import cls from './Counter.module.scss';

interface CounterProps {
}




export const Counter = ({}: CounterProps) => {


   const value = useSelector(getCounterValue)

   const dispatch = useDispatch()

   const increment = () => {
      dispatch(counterActions.increment())
   }

   const decrement = () => {
      dispatch(counterActions.decrement())
   }

   return (

         <StoriesProvider>
            <div>
               <h1>value = {value}</h1>
               <Button
               onClick={increment}
               >
                  Increment
               </Button>
               <Button
               onClick={decrement}
               >
                  Decrement
               </Button>
            </div>
         </StoriesProvider>

   );
}