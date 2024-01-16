import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { carrito, totalCantidad } = useContext(CartContext);
  return (
    <Link to="/carrito" className="cartwidget">
    <img src="../public/images/carrito2.png" alt="icono de carrito" />
    {carrito.length !== 0 && <p>{totalCantidad()}</p>}
  </Link>
  );
};

export default CartWidget;

