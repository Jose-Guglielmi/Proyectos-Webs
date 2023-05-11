import { type_Tienda_Productos_Carrito } from "../Action/section_Productos/type_Productos_Carrito";

export let lista_Producto_Y_Carrito_State = {
  lista_Productos: [],
  lista_Carrito: [],
};

export function producto_Y_Carrito_Reducer(state, action) {
  switch (action.type) {
    case type_Tienda_Productos_Carrito.cargar_productos: {
      return { ...state, lista_Productos: action.payload };
    }
    case type_Tienda_Productos_Carrito.agregar_producto_al_carrito: {
      let producto = {
        id: action.payload.id,
        nombre: action.payload.nombre,
        precio: action.payload.precio,
        img: action.payload.src,
        cantidad: 1,
      };

      let producto_carro = state.lista_Carrito.find(
        (prop) => prop.id == producto.id
      );

      return producto_carro
        ? {
            ...state,
            lista_Carrito: state.lista_Carrito.map((e) =>
              e.id == producto.id ? { ...e, cantidad: e.cantidad + 1 } : e
            ),
          }
        : { ...state, lista_Carrito: [...state.lista_Carrito, producto] };
    }

    case type_Tienda_Productos_Carrito.sumar_cantidad: {
      return {
        ...state,
        lista_Carrito: state.lista_Carrito.map((e) =>
          e.id == action.payload ? { ...e, cantidad: e.cantidad + 1 } : e
        ),
      };
    }

    case type_Tienda_Productos_Carrito.restar_cantidad: {
      //resto uno al producto seleccionado
      let lista = state.lista_Carrito.map((e) =>
        e.id == action.payload ? { ...e, cantidad: e.cantidad - 1 } : e
      );

      //verifico que no se quede la cantidad en 0 o en negativo(si es negativo o 0 lo saco de la lista)
      let nueva_lista = lista.filter((e) => e.cantidad > 0);

      //retorno la lista con la cantidad actualizada
      return {
        ...state,
        lista_Carrito: nueva_lista,
      };
    }

    case type_Tienda_Productos_Carrito.eliminar_producto_del_carrito: {
      return {
        ...state,
        lista_Carrito: state.lista_Carrito.filter(
          (e) => e.id != action.payload
        ),
      };
    }

    case type_Tienda_Productos_Carrito.cargar_carrito: {
      const list_carrito = JSON.parse(localStorage.getItem("Carrito"));

      if (list_carrito != null) {
        return {
          ...state,
          lista_Carrito: list_carrito,
        };
      }

      return state;
    }

    default:
      return state;
  }
}
