

import {render, screen} from '@testing-library/react' 
import { Button, ThemeButton } from './Button';


describe('Button', () => {

   test('test button with only one parameter', () => {
      render(<Button>Test</Button>)
      expect(screen.getByText('Test')).toBeInTheDocument()
   });

   test('test button class', () => {
      render(<Button theme={ThemeButton.CLEAR}>Test</Button>)
      expect(screen.getByText('Test')).toHaveClass('clear')
   });




   
})