import { StateScheme } from "app/providers/StoriesProvider/config/StateScheme";
import { getCounterValue } from "./getCounterValue";

describe('getCounterValue.test', () => {

   test('', () => {

      const state: Partial<StateScheme> = {
         counter: {
            value: 10
         }
      }

      expect(getCounterValue(state as StateScheme)).toEqual(10);
   })

});