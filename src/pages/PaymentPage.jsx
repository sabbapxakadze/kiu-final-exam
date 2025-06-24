import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import OrderSummary from "../components/OrderSummary";

import "../css/BreadCrumb.css";
import "../css/Payment.css";

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { shippingInfo, shippingMethod, shippingCost } = location.state || {};
  const { firstName, lastName, address, city, postalCode, country } =
    shippingInfo || {};

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    holderName: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Payment submitted", paymentInfo);

    navigate("/success", {
      state: { shippingCost, shippingMethod, shippingInfo },
    });
  };

  const formattedAddress = `${address}, ${city}, ${postalCode}, ${country}`;
  //აქაც ვალიდაცია კრედიტ ქარდის დაგვეზარა. დდ
  return (
    <div className="shipping-page">
      <div className="shipping-container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <span className="done">Cart</span>
          <span>›</span>
          <span className="done">Details</span>
          <span>›</span>
          <span className="done">Shipping</span>
          <span>›</span>
          <span className="active">Payment</span>
        </div>

        <div className="main-content">
          <div className="form-section">
            {/* Delivery Info */}
            <div
              className="shipping-info-display"
              style={{ marginBottom: "30px" }}
            >
              <div className="contact-info">
                <h3>Contact Name</h3>
                <p>
                  {firstName && lastName
                    ? `${firstName} ${lastName}`
                    : "No contact info available"}
                </p>
              </div>
              <hr className="divider" />
              <div className="contact-info">
                <h3>Ship To</h3>
                <p>
                  {formattedAddress.trim() !== ", , ,"
                    ? formattedAddress
                    : "No address provided"}
                </p>
              </div>
              <hr className="divider" />
              <div className="contact-info">
                <h3>Delivery Method</h3>
                <p>
                  {shippingMethod === "express"
                    ? `Express Delivery (+${shippingCost.toFixed(2)})`
                    : "Free Delivery"}
                </p>
              </div>
            </div>

            <h2 className="section-title">Payment Method</h2>

            <div className="payment-method-box">
              <div className="payment-header">
                <div className="card-image-and-header">
                  <img
                    src="/credit-card.png"
                    style={{ height: 24 }}
                    alt="Credit Card"
                  />
                  Credit Card
                </div>
              </div>
              <div className="card-form">
                <input
                  type="text"
                  name="cardNumber"
                  className="form-input"
                  placeholder="Card Number"
                  value={paymentInfo.cardNumber}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="holderName"
                  className="form-input"
                  placeholder="Cardholder Name"
                  value={paymentInfo.holderName}
                  onChange={handleChange}
                />
                <div className="row">
                  <input
                    type="text"
                    name="expiry"
                    className="form-input"
                    placeholder="MM/YY"
                    value={paymentInfo.expiry}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="cvv"
                    className="form-input"
                    placeholder="CVV"
                    value={paymentInfo.cvv}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="button-group" style={{ marginTop: "40px" }}>
              <button
                className="back-button"
                onClick={() => navigate("/shipping-method")}
              >
                Back
              </button>
              <button className="continue-button" onClick={handleSubmit}>
                Complete Payment
              </button>
            </div>
          </div>

          {/* Right Side */}
          <OrderSummary
            shippingCost={shippingCost}
            shippingMethod={shippingMethod}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
