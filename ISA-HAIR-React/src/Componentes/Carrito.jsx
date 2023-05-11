import { contextProductos } from "../Context/Context";
import { useContext, useState } from "react";

import "../CSS/Carrito.css";
import Icon from "./Icon";
import { type_Tienda_Productos_Carrito } from "../Action/section_Productos/type_Productos_Carrito";
import Modal_mensaje from "./modal";

function Carrito() {
  const context = useContext(contextProductos);
  const [modal, setModal] = useState({ open: false, mensaje: "" });

  const abrir_modal_mensaje = (modal) => {
    if (modal.open) {
      return <Modal_mensaje activo={modal} modificarModal={setModal} />;
    }
  };

  const sumar_producto = (id) => {
    context.actualizarLista({
      type: type_Tienda_Productos_Carrito.sumar_cantidad,
      payload: id,
    });
  };

  const restar_producto = (id) => {
    context.actualizarLista({
      type: type_Tienda_Productos_Carrito.restar_cantidad,
      payload: id,
    });
  };

  const eliminar_producto = (id) => {
    setModal({
      open: true,
      mensaje: "se a eliminado el producto del carrito ",
    });
    context.actualizarLista({
      type: type_Tienda_Productos_Carrito.eliminar_producto_del_carrito,
      payload: id,
    });
  };

  return (
    <div className="contenedor-carrito">
      {context.lista.lista_Carrito.map((producto) => (
        <div className="contenedor-producto-del-carro" key={producto.id}>
          <div className="contenedor-img-carrito">
            <img
              className="img-producto-carrito"
              src={producto.img}
              alt={producto.nombre}
            />
          </div>
          <div className="contenedor-description-carrito">
            <h1 className=" datos-producto-carrito titulo-producto-carrito">
              {producto.nombre}
            </h1>
            <h3 className="datos-producto-carrito ">
              Precio ${producto.precio}
            </h3>
            <h3 className="datos-producto-carrito  ">
              SubPrecio ${producto.precio * producto.cantidad}
            </h3>

            <div className="contenedor-botones-carrito">
              <div className="contenedor-botones-carrito-mas-menos">
                <h3 className="texto-cantidad">Cantidad</h3>
                <button
                  className="boton-carrito"
                  onClick={() => sumar_producto(producto.id)}
                >
                  <Icon icon={"/Iconos/mas.svg"} tamaño={40} />
                </button>
                <h3 className=" cantidad-producto-carrito">
                  {producto.cantidad}
                </h3>

                <button
                  className="boton-carrito"
                  onClick={() => restar_producto(producto.id)}
                >
                  <Icon icon={"/Iconos/menos.svg"} tamaño={40} />
                </button>
              </div>
              <button
                className="boton-carrito btn-eliminar"
                onClick={() => eliminar_producto(producto.id)}
              >
                <Icon icon={"/Iconos/basura.svg"} /> Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}
      {abrir_modal_mensaje(modal)}
    </div>
  );
}

export default Carrito;
