import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import InfoProduct from "../components/InfoProduct";
import { obtenerProducto } from "../api/productos.api";
import { obtenerTipoProducto } from "../api/tipos_producto.api";

export default function InfoProducto() {
  const [producto, setProducto] = useState(null);
  const [tipoProducto, setTipoProducto] = useState("");
  const params = useParams();

  useEffect(() => {
    async function cargarProducto() {
      const productoRes = await obtenerProducto(params.id);
      setProducto(productoRes.data);
    }

    cargarProducto();
  }, [params.id]);

  return producto ? (
    <InfoProduct producto={producto} />
  ) : (
    <h2 className="text-clr-one text-2xl pt-20 text-center">Cargando..</h2>
  );
}
