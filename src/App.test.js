import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';

test("Button's color and BG change'", () => {
 render(<App></App>);
 const myButton=screen.getByRole("button",{name:"Change BG to black"});
 expect(myButton).toHaveStyle({backgroundColor: "black"});
 expect(myButton).toHaveTextContent("Change BG to black");
fireEvent.click(myButton);
expect(myButton).toHaveStyle({backgroundColor: "gray"});
expect(myButton).toHaveTextContent("Change BG to gray");
});
