import React from "react";
import { useCart } from "../context/CartContext";
import "../css/ShippingInfoPage.css";

const OrderSummary = ({ shippingCost = 0, shippingMethod = "standard" }) => {
  const { cartItems, currency, exchangeRates } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const rate = exchangeRates[currency] || 1;

  const subtotalInCurrency = subtotal * rate;
  const shippingCostInCurrency = shippingCost * rate;
  const totalInCurrency = subtotalInCurrency + shippingCostInCurrency;

  // მოკლედ, ეს კომპონენტი არის აი უკვე payment-ის ფეიჯებზე როცა გადავდივართ
  // მარჯვენა მხარე ყველგან მეორდება ზუსტად Order Summary არის და code duplication რო აგვერიდებინა ამას ვიყენებთ.
  // Breadcrumb-ისთვისაც (აი ეგ არის Shipping > Details > Payment ასე როა ზემოთ ყიდვის დროს)
  // შეგვეძლო გაგვეკეთებინა მარა ძაან პატარა კოდი იყო მაგისთვის და აღარ შევქმენით.

  return (
    <div className="order-summary">
      {cartItems.map((item) => (
        <div key={item.id} className="product-item">
          <div className="product-image">
            <img src={item.image} alt={item.title} />
            <span className="quantity-badge">{item.quantity}</span>
          </div>
          <div className="product-details">
            <h3>{item.title}</h3>
            <div className="product-price">
              {currency} {(item.price * rate).toFixed(2)}
            </div>
          </div>
        </div>
      ))}

      <div className="summary-row subtotal">
        <span>Subtotal</span>
        <span>
          {currency} {subtotalInCurrency.toFixed(2)}
        </span>
      </div>

      <div className="summary-row shipping">
        <span>Shipping</span>
        <span>
          {shippingMethod === "express"
            ? `Express Delivery (+${currency} ${shippingCostInCurrency.toFixed(
                2
              )})`
            : "Free Delivery"}
        </span>
      </div>

      <div className="summary-row total">
        <span>Total</span>
        <span>
          {currency} {totalInCurrency.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default OrderSummary;
