//cargo los productos que obtengo del servidor
const cargarProductos = (productos) => {
  let html = ''
  //los recorro y lo agrego a un bloque html que contiene el producto
  for (c in productos) {
    html += `
		<div class="contenedor__producto" data-aos="zoom-in-up">
			<div class="contenedor__producto__img">
                <img src="${productos[c].src}" class="img">
            </div>
            <div class="contenedor__producto__descripcion">
                <div class="contenedor__producto__descripcion__titulo">
               		<h3 class="titulo">${productos[c].nombre}</h3>
                </div>
                <div class="contenedor__producto__descripcion__p">
                    <p class="descripcion">${productos[c].descripcion}</p>
                </div>
                <div class="contenedor__producto__descripcion__carrito">
                    <p class="precio">Precio: $${productos[c].precio}</p>
                    <i class="fa-solid fa-cart-plus carro">Agregar al carro</i>
                </div>
            </div>
        </div>`
  }
  //meto el html en el contenedor de los productos
  document.querySelector('.contenedor').innerHTML = html
}
//cuando se carga la pagina traigo los productosdel servidor
window.onload = async () => {
  //obtengo los productos del servidor
  const productos = await (await fetch('/isa-hair/productos')).json()
  //cargo los producto
  cargarProductos(productos)
}
