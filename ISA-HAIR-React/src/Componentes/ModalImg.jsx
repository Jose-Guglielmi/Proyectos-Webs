import { useRef, useEffect } from "react";
import "../CSS/ModalImg.css";

function ModalImgen({ children, activo, setActivo}) {
  const modal = useRef();
  
  useEffect(() => {
    if(activo.open && modal.current != undefined){
      modal.current.classList.add("open")
    }else modal.current.classList.remove("open")
  }, [activo.open])
  

  return (
    <div
      className="contenedor-modal"
      ref={modal}
    >
      <div className="contenedor-modal-img">
        <button
          className="btn-salir-modal"
          onClick={() => setActivo({ open: false , src: "" })}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );

}

export default ModalImgen;