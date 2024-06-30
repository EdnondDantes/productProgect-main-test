import { StateSchema } from "app/providers/StoriesProvider/config/StateSchema";
import { getCounterValue } from "./getCounterValue";

describe('getCounterValue.test', () => {

   test('', () => {

      const state: Partial<StateSchema> = {
         counter: {
            value: 10
         }
      }

      expect(getCounterValue(state as StateSchema)).toEqual(10);
   })

});