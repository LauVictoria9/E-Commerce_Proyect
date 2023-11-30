import axios from "axios";

const carritosApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/carritos/",
});

export const obtenerProductosCarrito = (token) =>
  carritosApi.get("/?productos=true", {
    headers: { Authorization: `${token}` },
  });

export const borrarProductoCarrito = (carritoID, productoID) =>
  carritosApi.delete(
    `/${carritoID}/eliminar_producto/?producto_id=${productoID}`
  );

export const agregarProductoCarrito = (carritoID, productoID) =>
  carritosApi.post(`/${carritoID}/agregar_producto/?producto_id=${productoID}`);
