import { render, screen, fireEvent } from "@testing-library/react";
import OrderForm from "../OrderForm";
test("Check box unchecked firest | button disabled first | change them by clicking", () => {
  render(<OrderForm></OrderForm>);
  const checkBox = screen.getByLabelText("I agree to Terms and Conditions.");
  const btn = screen.getByRole("button", { name: "Confirm Order" });

  expect(checkBox).not.toBeChecked();
  expect(btn).toBeDisabled();
  fireEvent.click(checkBox);
  expect(checkBox).toBeChecked();
  expect(btn).not.toBeDisabled();
});
