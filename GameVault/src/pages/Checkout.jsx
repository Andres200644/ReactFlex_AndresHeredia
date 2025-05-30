import React from 'react';
import CheckoutForm from '../containers/CheckoutForm';

const Checkout = () => {
  return (
    <main className="p-4">
      <h2 className="text-xl font-semibold mb-4">Finalizar Compra</h2>
      <CheckoutForm />
    </main>
  );
};

export default Checkout;
