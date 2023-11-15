import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import InfoProduct from "../components/InfoProduct";
import { obtenerProducto, obtenerTipoProducto } from "../api/productos.api";
// Imagen temporal
import img from "../img/laptop.png";

export default function InfoProducto() {
  const [producto, setProducto] = useState(0);
  const [tipoProducto, setTipoProducto] = useState(0);
  const params = useParams();

  useEffect(() => {
    async function cargarProducto() {
      const res = await obtenerProducto(params.id);
      setProducto(res.data);
    }
    cargarProducto();
    async function cargarTipoProducto() {
      const res = await obtenerTipoProducto(producto.tipoProducto);
      setTipoProducto(res.data);
    }
    cargarTipoProducto();
  }, []);

  return (
    <InfoProduct
      producto={producto}
      img={producto.imagen}
      name={producto.nombre}
      precio={producto.precio}
      descripcion={producto.detalles}
      disponible={producto.cantidad}
      tipoProducto={tipoProducto.tipoProducto}
      caracteristicas="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quidem? Sint delectus officia, placeat maiores assumenda eaque quia labore! Tempora deleniti aspernatur iusto sequi nam, at unde quibusdam sed incidunt."
    />
  );
}
