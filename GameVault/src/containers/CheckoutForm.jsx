import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const CheckoutForm = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    nombre: "",
    direccion: "",
    correo: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Orden enviada:", {
      datosCliente: formData,
      productos: cart,
    });
    clearCart();
    alert("¡Compra realizada con éxito!");
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Finalizar compra</h2>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="direccion"
        placeholder="Dirección"
        value={formData.direccion}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="correo"
        placeholder="Correo electrónico"
        value={formData.correo}
        onChange={handleChange}
        required
      />
      <button type="submit">Comprar</button>
    </form>
  );
};

export default CheckoutForm;
