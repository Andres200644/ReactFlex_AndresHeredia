import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/products.json";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = productsData.find((item) => item.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  return (
    <div>
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
