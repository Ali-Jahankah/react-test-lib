import React from "react";

const ToppingOption = ({ item }) => {
  return (
    <div className="scoop-div">
      <img
        src={`http://localhost:3000/${item["imagePath"]}`}
        alt={item["name"]}
      />
      <h3>{item["name"]}</h3>
    </div>
  );
};

export default ToppingOption;
