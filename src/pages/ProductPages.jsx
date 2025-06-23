import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import "../css/ProductPage.css";

const dummyProducts = [
  {
    id: 1,
    title: "GLOCK 48 FS silver slide  cal. 9X19 (AUSTRIA)",
    price: 505,
    image:
      "https://www.winchester.ge/uploads/product/vSu435du5z9eV3bSFZGnUsVqDvML2L8Kie3qLJhG.jpg",
    category: "Gun",
  },
  {
    id: 2,
    title: "GLOCK 17 GEN5   MOS  cal. 9X19",
    price: 50,
    image:
      "https://www.winchester.ge/uploads/product/PrMsLmxYpSfozGLaxBLn8zjixnuZlOBz38v4MAmC.jpg",
    category: "Gun",
  },
  {
    id: 3,
    title: "Magnum Miyu Chiisai 01SC061",
    price: 50,
    image:
      "https://www.winchester.ge/uploads/product/r9nDOFPcn3eqonaj9See5dOtX87Yx0Kt88CuM9Ai.jpg",
    category: "Knife",
  },
];

const ProductPage = ({ category }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const filteredProducts = category
    ? dummyProducts.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      )
    : dummyProducts;

  return (
    <div className="product-page">
      <h2>{category ? `Category: ${category}` : "All Products"}</h2>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
