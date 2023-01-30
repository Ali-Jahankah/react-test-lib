import { render, screen } from "@testing-library/react";
import OrderForm from "../OrderForm";
import userEvent from "@testing-library/user-event";
test("Check box unchecked firest | button disabled first | change them by clicking", async () => {
  const user = userEvent.setup();
  render(<OrderForm></OrderForm>);
  const checkBox = screen.getByLabelText("I agree to Terms and Conditions.");
  const btn = screen.getByRole("button", { name: "Confirm Order" });

  expect(checkBox).not.toBeChecked();
  expect(btn).toBeDisabled();
  await user.click(checkBox);
  expect(checkBox).toBeChecked();
  expect(btn).not.toBeDisabled();
});
test("check popover on the page by hovering", async () => {
  const user = userEvent.setup();
  render(<OrderForm></OrderForm>);
  const nullPop = screen.queryByText(/This is a test/i);
  expect(nullPop).not.toBeInTheDocument();
  const terms = screen.getByText(/Terms and Conditions./i);

  await user.hover(terms);

  const pop = screen.getByText(/This is a test/i);
  expect(pop).toBeInTheDocument();
  await user.unhover(terms);
  expect(pop).not.toBeInTheDocument();
});
