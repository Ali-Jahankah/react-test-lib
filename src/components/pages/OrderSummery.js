import axios from "axios";

import React, { useState, useEffect } from "react";
import OrderForm from "./OrderForm";
import "../../styles/orderForm.css";
import "../../styles/orderSummery.css";
const OrderSummery = () => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3030/scoops")
      .then((res) => setArr(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <article className="order-article">
      <h1 className="order-title">Order Summery</h1>
      <section className="order-section">
        <div className="scoops-div">
          <h2>Scoops: </h2>

          {arr.map((item) => {
            return (
              <>
                <div className="scoop-div">
                  <img
                    src={`http://localhost:3000/${item["imagePath"]}`}
                    alt={item["name"]}
                  />
                  <h3>{item["name"]}</h3>
                </div>
              </>
            );
          })}
        </div>
        <div className="toppings-div">Toppings: </div>
        <div className="total-div">Total Price: $</div>
        <OrderForm></OrderForm>
      </section>
    </article>
  );
};

export default OrderSummery;
