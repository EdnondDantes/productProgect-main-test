import { classNames } from "./classNames"

describe('classNames', () => {

   test('test with only one parameter', () => {
     expect(classNames('someClass')).toBe('someClass')
   });

   test('test with additionally class', () => {
      const expected = "someClass class1 class2"
      expect(classNames('someClass',{},['class1','class2'])).toBe(expected)
    });

    
   test('test with mods', () => {
      const expected = "someClass hovered"
      expect(classNames('someClass',{hovered: true, scrollable: false})).toBe(expected)
    });

   
})