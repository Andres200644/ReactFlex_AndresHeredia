import ItemList from './ItemList';

const ItemListContainer = ({ products }) => {
  return (
    <div className="item-list-container">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
