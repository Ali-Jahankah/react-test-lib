import React, { useState } from "react";

const OrderForm = () => {
  const submitForm = () => {};
  const [disabled, setDisabled] = useState(true);
  return (
    <section className="order-form-section">
      <form onSubmit={submitForm}></form>
      <div>
        <input
          type="checkbox"
          name="check-order"
          id="check-order"
          defaultChecked={!disabled}
          onChange={() => setDisabled(!disabled)}
        />
        <label htmlFor="check-order">
          I agree to <a href="#">Terms and Conditions.</a>
        </label>
      </div>

      <button type="submit" disabled={disabled}>
        Confirm Order
      </button>
    </section>
  );
};

export default OrderForm;
