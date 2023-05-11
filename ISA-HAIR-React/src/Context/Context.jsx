import { useEffect, createContext, useReducer } from "react";
import { type_Tienda_Productos_Carrito } from "../Action/section_Productos/type_Productos_Carrito";
import {
  producto_Y_Carrito_Reducer,
  lista_Producto_Y_Carrito_State,
} from "../Reducer/reducerTienda";

export const contextProductos = createContext();

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(
    producto_Y_Carrito_Reducer,
    lista_Producto_Y_Carrito_State
  );

  useEffect(() => {
    dispatch({
      type: type_Tienda_Productos_Carrito.cargar_carrito,
    });
    fetch("/Data/Productos.json")
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: type_Tienda_Productos_Carrito.cargar_productos,
          payload: res,
        });
      });
  }, []);

  const array = {
    lista: state,
    actualizarLista: dispatch,
  };

  return (
    <contextProductos.Provider value={array}>
      {children}
    </contextProductos.Provider>
  );
}
