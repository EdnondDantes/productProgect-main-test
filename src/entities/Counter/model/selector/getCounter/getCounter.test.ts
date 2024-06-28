import { StateScheme } from "app/providers/StoriesProvider/config/StateScheme"
import { getCounter } from "./getCounter"

describe('getCounter', () => {

   test('should return value', () => {
      const state: Partial<StateScheme> = {
         counter: {
            value: 10
         }
      }
      expect(getCounter(state as StateScheme)).toEqual({
         value: 10
      })
   })

 
   }
)

