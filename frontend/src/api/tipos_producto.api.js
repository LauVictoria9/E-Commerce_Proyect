import axios from "axios";

// tipo producto
const tipoProductosApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/tipo-productos/",
});

export const obtenerTipoProducto = (idTipoProducto) =>
  tipoProductosApi.get(`/${idTipoProducto}/`);
