import userEvent from "@testing-library/user-event";
import { screen, render } from "../../../test-utils/test-utils";
import Options from "../Options";
import OrderSummery from "../OrderSummery";

test("Show images for scoops", async () => {
  render(<Options optionType="scoops"></Options>);
  const scoopImages = await screen.findAllByRole("img", { name: /name/i });
  expect(scoopImages).toHaveLength(2);
  const altText = scoopImages.map((item) => item.alt);
  expect(altText).toEqual(["name1", "name2"]);
});
test("Show images for toppings", async () => {
  render(<Options optionType="toppings"></Options>);
  const images = await screen.findAllByRole("img", { name: /toppings/i });
  expect(images).toHaveLength(2);
  const altText = images.map((item) => item.alt);
  expect(altText).toEqual(["toppings1", "toppings2"]);
});
test("Update scoop and toppings subtotal when scoops and toppings change", async () => {
  const user = userEvent.setup();
  render(<OrderSummery />);

  const total = await screen.findByText("Total: $0", { exact: false });
  const name1Input = await screen.findByTestId("name1-scoop");
  const name2Input = await screen.findByTestId("name2-scoop");
  const toppings1 = await screen.findByTestId("toppings1-toppings");
  const toppings2 = await screen.findByTestId("toppings2-toppings");
  expect(toppings1).toBeInTheDocument();
  expect(toppings2).toBeInTheDocument();
  expect(name1Input).toBeTruthy();
  expect(name2Input).toBeTruthy();
  expect(total).toBeInTheDocument();
  await user.clear(name1Input);
  await user.type(name1Input, "2");
  await user.clear(name2Input);
  await user.type(name2Input, "2");
  expect(name1Input).toHaveValue(2);
  expect(name2Input).toHaveValue(2);
});
// test();
