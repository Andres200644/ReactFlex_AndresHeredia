import React from 'react';
import ItemListContainer from '../components/ItemListContainer';

const Home = () => {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bienvenido a GameVault</h1>
      <ItemListContainer greeting="Explora nuestros productos" />
    </main>
  );
};

export default Home;
