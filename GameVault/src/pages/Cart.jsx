import React from 'react';
import { useCart } from '../hooks/useCart';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, total } = useCart();

  if (cartItems.length === 0) {
    return <p className="p-4">Tu carrito está vacío.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Carrito de Compras</h2>
      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li key={item.id} className="border p-2 flex justify-between items-center">
            <div>
              <p className="font-semibold">{item.name}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: ${item.price * item.quantity}</p>
            </div>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => removeFromCart(item.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <p className="font-bold">Total: ${total}</p>
        <button
          onClick={clearCart}
          className="bg-gray-800 text-white mt-2 px-4 py-2 rounded"
        >
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
};

export default Cart;
