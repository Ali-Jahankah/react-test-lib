import { rest } from "msw";
export const handlers = [
  rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "name1", imagePath: "/images/choco.png" },
        { name: "name2", imagePath: "/images/vanila.png" },
      ])
    );
  }),
];
