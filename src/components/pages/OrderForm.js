import React, { useState } from "react";

const OrderForm = () => {
  const submitForm = () => {};
  const [disabled, setDisabled] = useState(true);
  const [span, setSpan] = useState("");

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
        <label
          htmlFor="check-order"
          className="terms-label"
          onMouseOver={() => setSpan("This is a test")}
          onMouseOut={() => setSpan("")}
        >
          I agree to <a href="#">Terms and Conditions.</a>
        </label>
        {span.length > 3 ? <span className="test-span">{span}</span> : ""}
      </div>

      <button type="submit" disabled={disabled}>
        Confirm Order
      </button>
    </section>
  );
};

export default OrderForm;
