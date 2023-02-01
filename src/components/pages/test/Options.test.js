import { screen, render } from "@testing-library/react";
import Options from "../Options";

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
