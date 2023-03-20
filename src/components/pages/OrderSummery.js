import React from "react";
import "../../styles/orderForm.css";
import "../../styles/orderSummery.css";
import { useOrderContext } from "../../contexts/OrderContext";
import Options from "./Options";
const OrderSummery = () => {
  const { totals } = useOrderContext();
  return (
    <article className="order-article">
      <h1 className="order-title">Order Summery</h1>
      <section className="order-section">
        <div className="scoops-div">
          <h2>Scoops: </h2>
          <Options optionType="scoops"></Options>
        </div>
        <div className="toppings-div">
          <h2>Toppings</h2>
          <Options optionType="toppings"></Options>
        </div>
        <h1>
          {!totals.scoops
            ? "Total: $0"
            : "$" + Number(totals.scoops) + Number(totals.toppings)}
        </h1>
      </section>
    </article>
  );
};

export default OrderSummery;
