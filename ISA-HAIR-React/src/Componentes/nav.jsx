import { Link, useHref, NavLink } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { AiTwotoneTags } from "react-icons/ai";
import BtnMenu from "./BtnNav";
import "../CSS/nav.css";
import { useState, useRef } from "react";

function Nav() {
  const [menuActivo, setMenuActivo] = useState(false);
  const menu = useRef();

  const menuNoActivo = () => {
    setMenuActivo(false);
  };

  return (
    <div className="contenedor-nav">
      <div className="nav">
        <img src="/IMG/logo.png" className="img-logo" />
        <Link to="/" className="titulo">
          ISA-HAIR
        </Link>
        <div className={menuActivo ? "paginas " : "paginas activo"} ref={menu}>
          <NavLink
            className={(data) => (data.isActive ? "link navActivo" : "link")}
            to="/home"
            onClick={menuNoActivo}
          >
            <FaHome className="icon" />
            Inicio
          </NavLink>
          <NavLink
            className={(data) => (data.isActive ? "link navActivo" : "link")}
            to="/Productos"
            onClick={menuNoActivo}
          >
            <AiTwotoneTags className="icon" />
            Productos
          </NavLink>
          <NavLink
            className={(data) => (data.isActive ? "link navActivo" : "link")}
            to="/Carrito"
            onClick={menuNoActivo}
          >
            <FaShoppingCart className="icon" />
            Carrito
          </NavLink>
        </div>
        <div className="contendor-btn-menu">
          <BtnMenu
            menu={menu}
            valorMenuActivo={menuActivo}
            setMenuActivo={setMenuActivo}
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
