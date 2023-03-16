import { screen, render, fireEvent } from "../../../test-utils/test-utils";
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
test("Update scoop subtotal when scoops change", async () => {
  render(<OrderSummery />);
  const total = await screen.findByText("Total: $0", { exact: false });
  const name1Input = await screen.findByTestId("name1-scoop");
  const name2Input = await screen.findByTestId("name2-scoop");
  expect(name1Input).toBeTruthy();
  expect(name2Input).toBeTruthy();
  expect(total).toBeInTheDocument();
});
