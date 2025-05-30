import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  const totalQuantity = getTotalQuantity();

  return (
    <Link to="/cart" className="cart-widget">
      🛒 {totalQuantity > 0 && <span>{totalQuantity}</span>}
    </Link>
  );
};

export default CartWidget;
