import { StateScheme } from "app/providers/StoriesProvider/config/StateScheme"
import { counterActions, counterReducer } from "./CounterSlice"
import { CounterScheme } from "../types/CounterSchema"

describe('CounterSlice', () => {

   test('counterReducer.increment', () => {
      const state: CounterScheme = {
         value: 10
      }
      expect(counterReducer(state, counterActions.increment())).toEqual({
         value: 11
      })
   })

   test('counterReducer.decrement', () => {
      const state: CounterScheme = {
         value: 10
      }
      expect(counterReducer(state, counterActions.decrement())).toEqual({
         value: 9
      })
   })

   test('counterReducer with empty state', () => {

      expect(counterReducer(undefined, counterActions.increment())).toEqual({
         value: 1
      })
   })


 
   }
)

