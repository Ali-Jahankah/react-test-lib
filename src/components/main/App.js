import React from "react";
import OrderSummery from "../pages/OrderSummery";
import "../../styles/app.css";
import { OrderStatesProvider } from "../../contexts/OrderContext";

// import UnitTest from '../general/UnitTest';

function App() {
  return (
    <div className="app-article">
      <OrderStatesProvider>
        <OrderSummery></OrderSummery>
      </OrderStatesProvider>
    </div>
  );
}

export default App;
