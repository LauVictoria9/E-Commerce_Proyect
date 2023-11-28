import axios from "axios";

// Se crear una instancia de axios, esto para configurar la ruta a la cual le va hacer la peticion
const productosApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/productos/",
});

//Funcion que permite obtener todos los producto. ("/") significa que se obtendran de la ruta configurada en la instancias axios
export const obtenerProductos = () => productosApi.get("/");

//Esta funcion permite obtener un producto segun su id
export const obtenerProducto = (idProducto) =>
  productosApi.get(`/${idProducto}/`);

//Esta funcion permite obtener productos segun su marca
export const obtenerProductosMarca = (marcaProducto, pageSize = 0) =>
  productosApi.get(`/?marca=${marcaProducto}&page-size=${pageSize}`);

//Esta funcion permite obtener productos segun su tipo de producto y posibilidad de definir el numero de registros
export const obtenerProductosTipo = (tipoProducto, pageSize = 0, page =1) =>
  productosApi.get(`/?tipo-producto=${tipoProducto}&page-size=${pageSize}&page=${page}`);

//Esta funcion permite obtener productos segun su marca y tipo de producto
export const obtenerProductosMarcaTipo = (
  marcaProducto,
  tipoProducto,
  pageSize = 0,
  page = 1
) =>
  productosApi.get(
    `/?marca=${marcaProducto}&tipo-producto=${tipoProducto}&page-size=${pageSize}&page=${page}`
  );

//Esta funcion permite obtener productos que estan en oferta
export const obtenerProductosOferta = (pageSize = 0) =>
  productosApi.get(`/?oferta=0&page-size=${pageSize}`);

//Esta funcion permite crear un producto, a esta recibe como argumento la informacion del producto
export const crearProducto = (producto) => productosApi.post("/", producto);

//Esta funcion elimina un producto segun su id
export const eliminarProducto = (idProducto) =>
  productosApi.delete(`/${idProducto}/`);

//Esta funcio modifica un producto segun su id y tambien recibe como argumento la nueva informacion del producto
export const actualizarProducto = (idProducto, producto) =>
  productosApi.delete(`/${idProducto}/`, producto);
