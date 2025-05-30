import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// Hook personalizado para acceder al carrito
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }

  return context;
};
