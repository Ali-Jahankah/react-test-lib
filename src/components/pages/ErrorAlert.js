import React from "react";

const ErrorAlert = ({ message }) => {
  const text = message || "There is an error!";
  return (
    <div role="alert" className="error-alert">
      {text}
    </div>
  );
};

export default ErrorAlert;
