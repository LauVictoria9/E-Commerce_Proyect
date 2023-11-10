import { useEffect, useState } from "react";
import { obtenerProductos } from "../api/productos.api";

export default function ProductosEnsayo() {
  const [productos, setproductos] = useState([]);

  useEffect(() => {
    async function cargarProductos() {
      const res = await obtenerProductos();
      console.log(res);
      setproductos(res.data);
    }
    cargarProductos();
  }, []);

  return (
    <div>
      {productos.map((producto) => (
        <div key={producto.id}>
          <h2>{producto.nombre}</h2>
          <p>{producto.precio}</p>
          <img src={producto.imagen} alt="imagen" />
        </div>
      ))}
    </div>
  );
}
