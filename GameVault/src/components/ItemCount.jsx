import { useState } from 'react';

const ItemCount = ({ stock, onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    onAdd(quantity);
  };

  return (
    <div className="item-count">
      <button disabled={quantity <= 1} onClick={() => setQuantity(quantity - 1)}>-</button>
      <span>{quantity}</span>
      <button disabled={quantity >= stock} onClick={() => setQuantity(quantity + 1)}>+</button>
      <button onClick={handleAdd}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
