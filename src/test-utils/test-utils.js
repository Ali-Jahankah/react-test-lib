import { render } from "@testing-library/react";
import { OrderStatesProvider } from "../contexts/OrderContext";

const customRender = (ui, options) => {
  render(ui, { wrapper: OrderStatesProvider, ...options });
};
export * from "@testing-library/react";
export { customRender as render };
