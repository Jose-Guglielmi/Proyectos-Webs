import "../CSS/BtnNav.css";
import { useRef, useEffect } from "react";

function BtnMenu({ menu, valorMenuActivo, setMenuActivo }) {
  const btn = useRef();

  useEffect(() => {
    if (!valorMenuActivo) btn.current.classList.remove("click");
  }, [valorMenuActivo]);

  const btnMenu = () => {
    if (btn.current.classList[1] != "click") {
      btn.current.classList.add("click");
      setMenuActivo(true);
    } else {
      btn.current.classList.remove("click");
      setMenuActivo(false);
    }
  };

  return (
    <div className="btn-menu" ref={btn} onClick={btnMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default BtnMenu;
