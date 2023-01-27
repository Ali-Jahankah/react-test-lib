import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';

test("Button's color and BG change'", () => {
 render(<App></App>);
 const myButton=screen.getByRole("button",{name:"Change BG to gray"});
 expect(myButton).toHaveStyle({backgroundColor: "black"});
 expect(myButton).toHaveTextContent("Change BG to gray");
 
  
 
  

});
test("Check box and button enabled and disabled",()=>{
  render(<App></App>)
  const checkbox=screen.getByRole("checkbox");
  const myButton=screen.getByRole("button",{name:"Change BG to gray"})
  expect(checkbox).not.toBeChecked();
  expect(myButton).toBeDisabled();
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(myButton).toBeEnabled();
  fireEvent.click(myButton);

expect(myButton).toHaveStyle({backgroundColor: "gray"});
expect(myButton).toHaveTextContent("Change BG to black");
  
})