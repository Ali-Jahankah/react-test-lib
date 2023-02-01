import React from "react";
import OrderForm from "./OrderForm";
import "../../styles/orderForm.css";
import "../../styles/orderSummery.css";
import Options from "./Options";
const OrderSummery = () => {
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
        <div className="total-div">Total Price: $</div>
        <OrderForm></OrderForm>
      </section>
    </article>
  );
};

export default OrderSummery;
