import React, { useState } from "react";

const OrderSummery = () => {
  const submitForm = () => {};

  return (
    <article className="order-article">
      <h1 className="order-title">Order Summery</h1>
      <section className="order-section">
        <div className="scoops-div"></div>
        <div className="toppings-div"></div>
        <div className="total-div"></div>
      </section>
      <section className="order-form-section">
        <form onSubmit={submitForm}></form>
        <input type="checkbox" name="check-order" id="check-order" />
        <label htmlFor="check-order">
          I agree to <a href="£">Terms and Conditions</a>
        </label>
        <button type="submit">Confirm Order</button>
      </section>
    </article>
  );
};

export default OrderSummery;
