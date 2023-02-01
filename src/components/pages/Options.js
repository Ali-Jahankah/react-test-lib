import React, { useState, useEffect } from "react";
import axios from "axios";
import ErrorAlert from "./ErrorAlert";
import ToppingOption from "./ToppingOption";
import ScoopOption from "./ScoopOption";

const Options = ({ optionType }) => {
  const [arr, setArr] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => {
        setArr(res.data);
      })
      .catch((err) => {
        setError(true);
      });
  }, [optionType]);
  if (error) {
    return <ErrorAlert></ErrorAlert>;
  }
  const OptionsComponent =
    optionType === "scoops" ? ScoopOption : ToppingOption;

  const optionsItem = arr.map((item) => (
    <OptionsComponent key={item.name} item={item}></OptionsComponent>
  ));
  return <div>{optionsItem}</div>;
};

export default Options;
