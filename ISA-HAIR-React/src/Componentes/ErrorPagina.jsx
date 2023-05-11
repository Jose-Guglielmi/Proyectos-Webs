import "../CSS/ErrorPagina.css";
import { Link } from "react-router-dom";

function ErrorPagina() {
  return (
    <div className="contenedor-paginaError">
      <h2 className="h2ErrorPagina">Uups......</h2>
      <div className="contenedor-celular">
        <span className="span"></span>
        <p className="tituloError">404 Error</p>
        <img
          src="https://data.terabox.com/thumbnail/d928e72c3fb48bb77c3c5f13e7bd1ec0?fid=4399618070428-250528-861217862733217&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-5WD%2brBGz4Uims9aRUryi53RkQ%2fo%3d&expires=8h&chkbd=0&chkv=0&dp-logid=161947447150372740&dp-callid=0&time=1667336400&size=c1360_u768&quality=90&vuk=4399618070428&ft=image&autopolicy=1"
          alt="404 error"
          className="imgErrorPagina"
        />
        <span className="span"></span>
        <span className="span"></span>
      </div>
      <h2 className="h2ErrorPagina">No se encontro la pagina</h2>
      <Link to="/" className="btn-redireccionar">
        Ir a la pagina principal
      </Link>
    </div>
  );
}

export default ErrorPagina;
