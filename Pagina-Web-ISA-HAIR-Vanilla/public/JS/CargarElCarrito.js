
const btnCarrito = document.querySelector('.btn-carrito');

const html = document.querySelector('.html');

const contenedorDelCarro = document.querySelector('.contenedor-carrito-compras');

const btnCerrar = document.querySelector('.btnCerrar');

const btnBorrar = document.querySelector('.btnBorrar');

const contenedorCarro = document.querySelector('.contenedor-del-carro');

//datos obtenidos
let datosProductos = {
    producto: [],
}

const abrirMenuCarrito = (e) => {
    agregarAlCarroo();
    html.style.overflow = 'hidden'
    contenedorDelCarro.style.display = 'flex'
}

const cerrarMenuCarrito = (e) => {
    if (e.target.className == 'fa-regular fa-circle-xmark') {
        contenedorDelCarro.style.display = 'none'
        html.style.overflow = 'auto'
    }
}

const borrarCarrito = (e) => {
    if (e.target.className == 'btnBorrar') {
        localStorage.clear();
        contenedorCarro.innerHTML = "";
    }
}
const agregarFrag = (element) => {
    let frag = document.createDocumentFragment()
    frag.appendChild(element)
    return frag
}

//retorno los datos almacenados en el local strorage
const obtenerDatosLocalStorage = () => {
    //obtengo y retorno los datos del local strorage
    return JSON.parse(localStorage.getItem('producto'));
}

const actualizarTotal = (localStorage) => {
    let total = 0
    if (localStorage != null) {
        for (i in localStorage.producto) {
            total += localStorage.producto[i].precio * localStorage.producto[i].cantidad;
        }
        document.querySelector('.totalPagar').innerHTML = ' Pagar: $' + total;
    }
}

const actualizarLocalStorage = (dato) => {
    localStorage.setItem('producto', JSON.stringify(dato))
}

//funcion que se encarga de obtener y asignar los datos de los productos
const agregarAlCarroo = () => {
    let producto = "";
    contenedorCarro.innerHTML = "";
    datosProductos = obtenerDatosLocalStorage();
    if (datosProductos != null) {
        for (Producto in datosProductos.producto) {
            //contenedor donde meto el producto
            let contenedorCarrito = document.createElement('div');
            //le agrego una clase
            contenedorCarrito.classList.add('contenedor-producto-compra');
            contenedorCarrito.setAttribute('data-aos', 'fade-down');
            //datos del producto
            producto = `
  
          <div class="contenedor-carrito-compras-img">
            <img src=" ${datosProductos.producto[Producto].src}">
          </div>
          <div class="contenedor-carrito-compras-descripcion">
            <h3 class="titulo">${datosProductos.producto[Producto].nombre}</h3>
            <p class="precio">${'Precio: $' + datosProductos.producto[Producto].precio
                }</p>
            <p class="subPrecio">${'SubPrecio: $' +
                datosProductos.producto[Producto].precio *
                datosProductos.producto[Producto].cantidad
                }</p>
          </div>
          <div class="contenedor-carrito-compras-cantidad">
            <button class="btn-mas mas">+</button>
            <p class="cantidad">${datosProductos.producto[Producto].cantidad
                }</p>
            <button class="btn-mas menos">-</button>
          </div>
          <button class="eliminar"><i class="fa-solid fa-trash"></i></button>
          `
            //lo agrego al div que contiene el producto
            contenedorCarrito.innerHTML += producto;
            //lo agrego al html
            contenedorCarro.appendChild(agregarFrag(contenedorCarrito));
        }
    }
    actualizarTotal(datosProductos);
}

btnCarrito.addEventListener('click', abrirMenuCarrito);

contenedorDelCarro.addEventListener('click', cerrarMenuCarrito);

btnBorrar.addEventListener('click', borrarCarrito);

contenedorCarro.addEventListener('click', (e) => {
    //obtendo el dato de que se preciono
    const botonEliminarProducto = e.target
    //si se apreto el boton de eliminar elimino el producto seleccionado
    if (botonEliminarProducto.className == 'fa-solid fa-trash') {
        const contenedor = botonEliminarProducto.closest('.contenedor-producto-compra')
        const titulo = contenedor.querySelector('.titulo').innerHTML;
        let productos = obtenerDatosLocalStorage()
        for (c in productos.producto) {
            if (productos.producto[c].nombre == titulo) {
                productos.producto.splice(c, 1);
                localStorage.clear();
                actualizarLocalStorage(productos);
                contenedor.style.display = 'none'
                actualizarTotal(obtenerDatosLocalStorage())
            }
        }
    } else if (botonEliminarProducto.className == 'btn-mas mas') {
        const contenedor = botonEliminarProducto.closest('.contenedor-producto-compra')
        const titulo = contenedor.querySelector('.titulo').innerHTML
        let productos = obtenerDatosLocalStorage()
        for (c in productos.producto) {
            if (productos.producto[c].nombre == titulo) {
                productos.producto[c].cantidad++
                contenedor.querySelector('.cantidad').innerHTML =
                    productos.producto[c].cantidad
                contenedor.querySelector('.subPrecio').innerHTML =
                    'SubPrecio: $' +
                    productos.producto[c].precio * productos.producto[c].cantidad
                localStorage.clear()
                actualizarLocalStorage(productos)
                actualizarTotal(obtenerDatosLocalStorage())
            }
        }
    } else if (botonEliminarProducto.className == 'btn-mas menos') {
        const contenedor = botonEliminarProducto.closest('.contenedor-producto-compra')
        const titulo = contenedor.querySelector('.titulo').innerHTML
        let productos = obtenerDatosLocalStorage()
        for (c in productos.producto) {
            if (productos.producto[c].nombre == titulo) {
                productos.producto[c].cantidad--
                contenedor.querySelector('.cantidad').innerHTML =
                    productos.producto[c].cantidad
                contenedor.querySelector('.subPrecio').innerHTML =
                    'SubPrecio: $' +
                    productos.producto[c].precio * productos.producto[c].cantidad
                if (productos.producto[c].cantidad <= 0) {
                    productos.producto.splice(c, 1)
                    localStorage.clear()
                    actualizarLocalStorage(productos)
                    actualizarTotal(obtenerDatosLocalStorage())
                    contenedor.style.display = 'none'
                } else {
                    localStorage.clear()
                    actualizarLocalStorage(productos)
                    actualizarTotal(obtenerDatosLocalStorage())
                }
            }
        }
    }
})