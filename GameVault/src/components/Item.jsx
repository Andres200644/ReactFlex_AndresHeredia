import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="item-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;
