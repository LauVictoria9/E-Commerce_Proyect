import axios from "axios";

const productosApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/productos/",
});

export const obtenerProductos = () => productosApi.get("/");

export const obtenerProducto = (idProducto) =>
  productosApi.get(`/${idProducto}/`);

export const crearProducto = (producto) => productosApi.post("/", producto);

export const eliminarProducto = (idProducto) =>
  productosApi.delete(`/${idProducto}/`);

export const actualizarProducto = (idProducto, producto) =>
  productosApi.delete(`/${idProducto}/`, producto);
