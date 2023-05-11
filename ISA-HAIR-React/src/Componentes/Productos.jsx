import { BsFillCartPlusFill } from "react-icons/bs";
import { useState, useContext } from "react";

import "/src/CSS/Productos.css";
import { contextProductos } from "../Context/Context.jsx";
import { type_Tienda_Productos_Carrito } from "../Action/section_Productos/type_Productos_Carrito.js";
import ModalImgen from "./ModalImg.jsx";
import Modal_mensaje from "./modal.jsx";

function Productos() {
  let context = useContext(contextProductos);
  const [img, setImg] = useState({ open: false, src: "" });
  const [modal, setModal] = useState({ open: false, mensaje: "" });

  const abrir_modal_mensaje = (modal) => {
    if (modal.open) {
      return <Modal_mensaje activo={modal} modificarModal={setModal} />;
    }
  };

  const abrirModal_img = (obj) => {
    const html = document.querySelector("html");
    if (obj.open) {
      html.style.overflow = "hidden";
      return (
        <ModalImgen activo={obj} setActivo={setImg}>
          <img src={obj.src} />
        </ModalImgen>
      );
    } else html.style.overflow = "auto";
  };

  const agregarAlcarro = (producto) => {
    context.actualizarLista({
      type: type_Tienda_Productos_Carrito.agregar_producto_al_carrito,
      payload: producto,
    });
  };

  return (
    <div className="contenedor-productos">
      {context.lista.lista_Productos.map((e) => (
        <div className="contenedor-producto" key={e.id}>
          <h2 className="texto-producto titulo-producto">{e.nombre}</h2>
          <div className="contenedor-img">
            <img
              src={e.src}
              className="img-producto"
              onClick={() => setImg({ open: true, src: e.src })}
            />
          </div>
          <p className="descripcion-producto texto-producto">{e.descripcion}</p>
          <p className="precio-producto texto-producto">Precio ${e.precio}</p>
          <button
            className="btn-agr-carro"
            onClick={() => {
              agregarAlcarro(e);
              setModal({
                open: true,
                mensaje: "Se agrego el producto al carrito",
              });
            }}
          >
            <BsFillCartPlusFill />
            <p className="texto-producto">Agregar al carro</p>
          </button>
        </div>
      ))}
      {abrirModal_img(img)}
      {abrir_modal_mensaje(modal)}
    </div>
  );
}

export default Productos;
