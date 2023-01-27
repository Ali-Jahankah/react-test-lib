import { render, screen,fireEvent } from '@testing-library/react';
import {seperateWords} from "../UnitTest";
import UnitTest from '../UnitTest';

test("Button's color and BG change'", () => {
 render(<UnitTest></UnitTest>);
 const myButton=screen.getByRole("button",{name:"Change BG to gray"});
 expect(myButton).toHaveStyle({backgroundColor: "black"});
 expect(myButton).toHaveTextContent("Change BG to gray");
 
  
 
  

});
test("Check box and button enabled and disabled",()=>{
  render(<UnitTest></UnitTest>)
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
// -----------------Combine tests--------------
describe("Seprating words where there is a camel case letter",()=>{
  test("If there is one word",()=>{
    expect(seperateWords("Red")).toBe("Red");
  });
  test("If there are two words",()=>{
    expect(seperateWords("VioletRed")).toBe("Violet Red");
  });
  test("If there are multiple words",()=>{
    expect(seperateWords("MediumVioletRed")).toBe("Medium Violet Red");
  })
})