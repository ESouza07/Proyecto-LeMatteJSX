import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div id="navbar">
      <Link to="/" className="brand">
        <img src="./public/images/logopng.png" alt="Logo Le Matte" />
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
    </div>
  );
};

export default NavBar;