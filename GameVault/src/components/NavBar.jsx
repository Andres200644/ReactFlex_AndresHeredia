import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">GameVault</div>
      <nav className="nav-links">
        <Link to="/monitores">Monitores</Link>
        <Link to="/consolas">Consolas</Link>
        <Link to="/computadoras">Computadoras</Link>
        <Link to="/accesorios">Accesorios</Link>
      </nav>
      <div className="cart-icon">
        <Link to="/carrito">
          <i className="fas fa-shopping-bag"></i>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
