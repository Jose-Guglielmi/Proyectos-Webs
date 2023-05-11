const htmls = document.querySelector(".html");
const imagen = document.querySelector(".contenedor");
//const imagenes = document.querySelectorAll(".contenedor__producto__img");
const primeraPlana = document.querySelector(".contenedor-principal");
const imagenActiva = document.querySelector(".imagen-activa");
let indiceImagen = 0;
const abrirContenedorPrincipal = (e) => {
  if (e.target.src != undefined) {
    imagenActiva.src = e.target.src;
    primeraPlana.style.display = "flex";
    htmls.style.overflow = "hidden";
  } else if (e.target.className == "fa-solid fa-eye btn-info") {
    imagenActiva.src = "/IMG/instrucciones plex.jpeg";
    primeraPlana.style.display = "flex";
    htmls.style.overflow = "hidden";
  }
};
imagen.addEventListener("click", abrirContenedorPrincipal);
primeraPlana.addEventListener("click", (e) => {
  if (e.target.className != "imagen-activa") {
    primeraPlana.style.display = "none";
    htmls.style.overflow = "auto";
  }
});
