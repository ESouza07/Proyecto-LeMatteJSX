import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <img src="../public/images/logopng.png" alt="Logo Le Matte" />
      </Link>
      <ul>
        <li>
          <Link to="/categorias/mates">Mates</Link>
        </li>
        <li>
          <Link to="/categorias/yerbas">Yerbas</Link>
        </li>
        <li>
          <Link to="/categorias/termos">Termos</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;