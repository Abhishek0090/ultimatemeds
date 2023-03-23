import React from "react";
import { Link } from "react-router-dom";
import "./orderPlaced.css";

const OrderPlaced = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="orderplaced">
        <h2>
          Your Order is placed
          <br />
          It will be delivered Soon
        </h2>
        <Link to="/">
          <button className="btn Linkbtn" style={{ textDecoration: "none" }}>
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderPlaced;
