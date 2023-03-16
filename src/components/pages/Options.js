import React, { useState, useEffect } from "react";
import axios from "axios";
import ErrorAlert from "./ErrorAlert";
import ToppingOption from "./ToppingOption";
import ScoopOption from "./ScoopOption";

const Options = ({ optionType }) => {
  const [arr, setArr] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`http://localhost:3030/${optionType}`, { signal: controller.signal })
      .then((res) => {
        setArr(res.data);
      })
      .catch((err) => {
        if (err.name !== "CanceledError") {
          setError(true);
        }
      });
    return () => {
      controller.abort();
    };
  }, [optionType]);
  if (error) {
    return <ErrorAlert></ErrorAlert>;
  }
  const OptionsComponent =
    optionType === "scoops" ? ScoopOption : ToppingOption;

  const optionsItem = arr.map((item) => (
    <OptionsComponent key={item.name} item={item}></OptionsComponent>
  ));
  return (
    <>
      <h2>{optionType}</h2>
      <p>{optionType === "scoops" ? "$2" : "$1.5"} per item</p>
      <h3>Total {optionType}: $</h3>
      <div>{optionsItem}</div>
    </>
  );
};

export default Options;
