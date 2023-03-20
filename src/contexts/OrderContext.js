import React, { createContext, useContext } from "react";
import { useState } from "react";

const OrderStates = createContext();

export const useOrderContext = () => {
  const myContext = useContext(OrderStates);
  if (!myContext) {
    throw new Error("UseOrederContext must be called within an Provider");
  }
  return myContext;
};

export const OrderStatesProvider = (props) => {
  const [options, setOpteions] = useState({
    scoops: {},
    toppings: {},
  });
  const prices = {
    scoops: 2,
    toppings: 1.5,
  };
  const updateOrder = (type, name, number) => {
    const copyOptions = { ...options };

    copyOptions[type][name] = number;
    setOpteions(copyOptions);
  };
  const resetOption = () => {
    setOpteions({ scoops: {}, toppings: {} });
  };
  const totalOptionsPrice = (type) => {
    const myArr = Object.values(options[type]);
    const total = myArr.reduce((total, val) => total + val, 0);
    return total * prices[type];
  };
  const totals = {
    scoops: totalOptionsPrice("scoops"),
    toppings: totalOptionsPrice("toppings"),
  };
  const value = { updateOrder, options, setOpteions, resetOption, totals };
  return <OrderStates.Provider value={value} {...props} />;
};
