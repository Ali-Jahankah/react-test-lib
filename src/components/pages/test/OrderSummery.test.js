import { screen, render } from "@testing-library/react";
import OrderSummery from "../OrderSummery";
import { server } from "../../../mocks/server";
import { rest } from "msw";

// Error handler
test("Error handling", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (req, res, ctx) =>
      res(ctx.status(500))
    ),

    rest.get("http://localhost:3030/toppings", (req, res, ctx) =>
      res(ctx.status(500))
    )
  );
  render(<OrderSummery></OrderSummery>);

  const errorAlert = await screen.findAllByRole("alert");
  expect(errorAlert).toHaveLength(2);
});
