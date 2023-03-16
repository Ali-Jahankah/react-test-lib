import React from "react";
import { useOrderContext } from "../../contexts/OrderContext";
const ScoopOption = ({ item }) => {
  const { updateOrder } = useOrderContext;
  return (
    <div className="scoop-div">
      <img
        src={`http://localhost:3000/${item["imagePath"]}`}
        alt={item["name"]}
      />
      <h3>{item["name"]}</h3>
      <input
        type="number"
        onChange={(e) => updateOrder("scoop", item.name, e.target.value)}
        data-testid={item.name + "-scoop"}
      />
    </div>
  );
};

export default ScoopOption;
