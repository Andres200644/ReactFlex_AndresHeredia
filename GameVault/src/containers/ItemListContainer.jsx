import React, { useEffect, useState } from "react";
import productsData from "../data/products.json";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      const filtered = productsData.filter(
        (product) => product.category === category
      );
      setProducts(filtered);
    } else {
      setProducts(productsData);
    }
  }, [category]);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemListContainer;
