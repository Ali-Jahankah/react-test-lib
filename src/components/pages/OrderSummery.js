import React, { useState } from "react";
import OrderForm from "./OrderForm";
import orderSummery from "../../styles/orderSummery.css";
import orderForm from "../../styles/orderForm.css";
const OrderSummery = () => {
  return (
    <article className="order-article">
      <h1 className="order-title">Order Summery</h1>
      <section className="order-section">
        <div className="scoops-div">Number of scoops: </div>
        <div className="toppings-div">Toppings: </div>
        <div className="total-div">Total Price: $</div>
        <OrderForm></OrderForm>
      </section>
    </article>
  );
};

export default OrderSummery;
