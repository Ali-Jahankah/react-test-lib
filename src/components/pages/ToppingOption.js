import React from "react";
import { useOrderContext } from "../../contexts/OrderContext";

const ToppingOption = ({ item }) => {
  const { updateOrder } = useOrderContext();

  return (
    <div className="scoop-div">
      <img
        src={`http://localhost:3000/${item["imagePath"]}`}
        alt={item["name"]}
      />
      <h3>{item["name"]}</h3>
      <input
        type="number"
        onChange={(e) =>
          updateOrder("toppings", item.name, parseInt(e.target.value))
        }
        data-testid={item.name + "-toppings"}
      />
    </div>
  );
};

export default ToppingOption;
