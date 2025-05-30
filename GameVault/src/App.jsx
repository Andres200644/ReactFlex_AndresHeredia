import React from 'react';
import AppRouter from './routes/AppRouter';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
};

export default App;
