import "../CSS/modal_mensaje.css";

import { useEffect, useRef } from "react";
import Icon from "./Icon";

function Modal_mensaje({ activo, modificarModal }) {
  const modall = useRef();

  const quitarModal = () => {
    modificarModal({ open: false, mensaje: "" });
  };

  useEffect(() => {
    if (activo.open) {
      setTimeout(quitarModal, 3000);
    }
  }, [activo.open]);

  return (
    <div className="contenedor_modal_img" ref={modall}>
      <div className="div-modal-mensaje "></div>
      <Icon tamaño={20} icon={"/Iconos/ok.svg"} />
      <h2 className="mensaje_modal">{activo.mensaje}</h2>
    </div>
  );
}

export default Modal_mensaje;
