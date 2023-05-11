const btnAñadirAlCarro = document.querySelector('.contenedor')

let img
let nombre
let precio
let cantidad = 1

const agregarAlCarro = (e) => {
  if (e.target.className == 'fa-solid fa-cart-plus carro') {
    let productos = {
      producto: [],
    }

    let paso = 0

    let producto

    const botonAgregar = e.target
    const contenedor = botonAgregar.closest('.contenedor__producto')

    img = contenedor.querySelector('.img').src
    nombre = contenedor.querySelector('.titulo').innerHTML
    precio = contenedor.querySelector('.precio').innerHTML
    precio = precio.substring(9, precio.lenght)

    datosProductos = JSON.parse(localStorage.getItem('producto'))

    if (datosProductos != null) {
      productos = datosProductos
      localStorage.clear()

      for (c in productos.producto) {
        if (productos.producto[c].nombre == nombre) {
          productos.producto[c].cantidad++

          localStorage.setItem('producto', JSON.stringify(productos))

          paso = 1

          break
        }
      }

      if (paso == 0) {
        producto = {
          nombre: nombre,
          precio: precio,
          src: img,
          cantidad: cantidad,
        }
        productos.producto.push(producto)
        localStorage.setItem('producto', JSON.stringify(productos))
      }
    } else {
      producto = {
        nombre: nombre,
        precio: precio,
        src: img,
        cantidad: cantidad,
      }
      productos.producto.push(producto)
      localStorage.setItem('producto', JSON.stringify(productos))
    }
  }
}

btnAñadirAlCarro.addEventListener('click', agregarAlCarro)
