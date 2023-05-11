function Icon({ icon, tamaño = 25 }) {
  return (
    <div
      className="contenedor-img-icon"
      style={{ width: tamaño + "px", height: tamaño + "px" }}
    >
      <img className="img-icon" src={icon} />
    </div>
  );
}

export default Icon;
