import { screen, render } from "@testing-library/react";
import OrderSummery from "../OrderSummery";

test("Check data after fetching", async () => {
  render(<OrderSummery></OrderSummery>);
  const altTextArray = await screen.findAllByAltText(/name/);
  expect(altTextArray).toHaveLength(2);
});
