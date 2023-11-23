import { useState, useEffect } from "react";
import Card from "./Card";
import { obtenerProductosTipo } from "../api/productos.api";
import { obtenerTipoProducto } from "../api/tipos_producto.api";

function Button({ signo, handleClick }) {
  return (
    <button className="bg-clr-three px-3 rounded-lg " onClick={handleClick}>
      {signo}
    </button>
  );
}

export default function InfoProduct({ producto }) {
  const [cantidad, setCantidad] = useState(0);
  const [productosRelacionados, setProductosRelacionados] = useState(null);
  const [tipoProducto, setTipoProducto] = useState("");

  useEffect(() => {
    async function cargarProductosRelacionados() {
      // obtiene el tipo de producto correspondiente, esto para luego mostrar los productos con el mismo tipo
      const tipoProductoRes = await obtenerTipoProducto(producto.tipoProducto);
      setTipoProducto(tipoProductoRes.data);

      if (tipoProductoRes && tipoProductoRes.data) {
        const productosRelacionadosRes = await obtenerProductosTipo(
          tipoProductoRes.data.tipoProducto,
          10
        );
        setProductosRelacionados(productosRelacionadosRes.data.results);
      }
    }

    cargarProductosRelacionados();
  }, []);

  return (
    <div className="flex justify-center items-center  py-32">
      {producto ? (
        <article className="bg-clr-one text-[#FFFFFF] w-[80vw]  pt-4 pb-12 px-10 md:pt-12">
          <section className="flex flex-col md:flex-row justify-evenly gap-y-10 md:gap-x-12 items-center">
            <img
              className="w-[60%] md:w-[40%] self-center drop-shadow-3xl "
              src={producto.imagen}
              alt={producto.nombre}
            />
            <div className="flex flex-col  gap-y-6  text-center md:text-right">
              <h2 className="text-2xl font-bold uppercase">
                {producto.nombre}
              </h2>
              <h3 className="text-2xl font-bold">{producto.precio}</h3>
              <p className="text-center md:text-right ">
                &ldquo;{producto.detalles}&rdquo;
              </p>
              <div className="self-start flex justify-center gap-x-6">
                <p>{producto.cantidad} disponibles</p>
                <Button
                  signo="-"
                  handleClick={() => {
                    if (cantidad > 0) {
                      setCantidad(cantidad - 1);
                    }
                  }}
                />
                <p>{cantidad}</p>
                <Button
                  signo="+"
                  handleClick={() => {
                    if (cantidad < producto.cantidad) {
                      setCantidad(cantidad + 1);
                    }
                  }}
                />
              </div>
              <button className="bg-clr-three self-center md:self-end  w-fit px-6 py-1 rounded-lg ">
                Comprar
              </button>
            </div>
          </section>
          <hr className="my-8" />
          <section className="text-center md:text-left">
            <h2 className="font-bold text-2xl mb-4">Características </h2>
            <p className="text-justify">{producto.caracteristicas}</p>
          </section>
          <hr className="my-8" />
          <section className="text-center md:text-left">
            <h2 className="font-bold text-2xl mb-4">Productos relaciones </h2>
            <div className="pb-6 flex  overflow-x-auto gap-6">
              {productosRelacionados &&
                productosRelacionados.map((producto) => (
                  <Card
                    key={producto.id}
                    infoCard={true}
                    item={{
                      id: producto.id,
                      name: producto.nombre,
                      category: tipoProducto.tipoProducto,
                      price: `$${producto.precio}`,
                      linking: producto.imagen,
                    }}
                  />
                ))}
            </div>
          </section>
        </article>
      ) : (
        <article>
          <h2>No se encontro el producto</h2>
        </article>
      )}
    </div>
  );
}
