import React from "react";

const ScoopOption = ({ item }) => {
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

export default ScoopOption;
