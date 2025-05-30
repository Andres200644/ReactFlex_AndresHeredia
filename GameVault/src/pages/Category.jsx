import React from 'react';
import { useParams } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';

const Category = () => {
  const { categoryId } = useParams();

  return (
    <main className="p-4">
      <h2 className="text-xl font-semibold mb-4">Categoría: {categoryId}</h2>
      <ItemListContainer categoryId={categoryId} />
    </main>
  );
};

export default Category;
