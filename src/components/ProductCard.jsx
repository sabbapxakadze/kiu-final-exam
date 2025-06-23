import React from "react";
import "../css/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className={`product-card ${!product.inStock ? "out-of-stock" : ""}`}>
      <div className="image-container">
        <img src={product.image} alt={product.title} />
        {!product.inStock && <div className="overlay">OUT OF STOCK</div>}
        {product.inStock && <div className="cart-icon">🛒</div>}
      </div>
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
