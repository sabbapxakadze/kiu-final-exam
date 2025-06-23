import React from "react";
import ProductCard from "../components/ProductCard";
import "../css/ProductPage.css";

const dummyProducts = [
  {
    id: 1,
    title: "Apollo Running Short",
    price: 50,
    inStock: true,
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    title: "Apollo Running Short",
    price: 50,
    inStock: true,
    image: "/images/product2.jpg",
  },
  {
    id: 3,
    title: "Apollo Running Short",
    price: 50,
    inStock: false,
    image: "/images/product3.jpg",
  },
  // add more...
];

const ProductPage = () => {
  return (
    <div className="product-page">
      <h2>Category name</h2>
      <div className="product-grid">
        {dummyProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
