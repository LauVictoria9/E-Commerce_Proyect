/* Images imports */
import heroBackgroundImage from "../img/InicioD.jpg";
import heroImage from "../img/Elementos.png";
import comboOneImage from "../img/Componentes.jpg";
import comboTwoImage from "../img/Tarjetas.jpg";
import comboThreeImage from "../img/Procesadores.jpg";
import { useEffect, useState } from "react";
import { obtenerProductos } from "../api/productos.api";
import { obtenerTiposProducto } from "../api/tipos_producto.api";

/* Components imports */
import Slider from "../components/Slider";

/* Item data temp */
import { itemData, itemData2, itemData3 } from "./data";

export default function Outlet() {
  const [productos, setProductos] = useState([]);
  const [tipoProducto, setTipoProductos] = useState([]);
  const [idTipoGrafica, setIdTipoGrafica] = useState(null);
  const [idTipoProcesador, setIdTipoProcesador] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function cargarTipoProductos() {
      try {
        const response = await obtenerTiposProducto();
        if (response.data) {
          setTipoProductos(response.data);
        }
      } catch (error) {
        setError(error.response.data.detail);
      }
    }
    cargarTipoProductos();
  }, []);

  useEffect(() => {
    async function cargarProductos() {
      try {
        const response = await obtenerProductos();
        if (response.data) {
          setProductos(response.data);
        }
      } catch (error) {
        setError(error.response.data.detail);
      }
    }
    if (tipoProducto.length != 0) {
      cargarProductos();
    }
  }, [tipoProducto]);

  useEffect(() => {
    if (tipoProducto.length > 0) {
      const idGrafica = tipoProducto.find(
        (objeto) => objeto.tipoProducto === "grafica"
      );
      const idProcesador = tipoProducto.find(
        (objeto) => objeto.tipoProducto === "procesador"
      );

      if (idGrafica) {
        setIdTipoGrafica(idGrafica.id);
      }
      if (idProcesador) {
        setIdTipoProcesador(idProcesador.id);
      }
    }
  }, [tipoProducto]);

  return (
    <main className="pt-8 pb-16">
      {/* Hero */}
      <section className="relative flex justify-center items-center">
        <img src={heroBackgroundImage} alt="Hero background image." />

        <img src={heroImage} alt="" className="absolute max-w-auto w-1/2" />
      </section>
      {/* Separator */}
      <div className="h-8" />
      {productos.length > 0 ? (
        <>
          {/* Content */}
          <section className="">
            <div className="flex">
              {/* Combo image */}
              <img
                src={comboOneImage}
                alt="Components combo image."
                className="w-1/3 hidden md:inline-block"
              />
              {/* Slider */}
              <div className="w-full md:w-2/3 items-center relative flex">
                <div className="bg-gradient-to-br from-clr-two absolute -z-10 to-clr-three w-full h-4/5 " />
                <Slider
                  key="promo_one"
                  sliderId="promo_one"
                  data={productos.filter(
                    (producto) =>
                      (producto.tipoProducto != idTipoGrafica) &
                      (producto.tipoProducto != idTipoProcesador)
                  )}
                />
              </div>
            </div>

            <div className="h-16" />

            <div className="flex">
              {/* Slider */}
              <div className="w-full md:w-2/3 items-center relative flex">
                <div className="bg-gradient-to-br from-clr-two absolute -z-10 to-clr-three w-full h-4/5" />

                <Slider
                  sliderId="promo_two"
                  data={productos.filter(
                    (producto) => producto.tipoProducto === idTipoGrafica
                  )}
                />
              </div>

              {/* Combo image */}
              <img
                src={comboTwoImage}
                alt="Components combo image."
                className="w-1/3 hidden md:inline-block"
              />
            </div>

            <div className="h-16" />

            <div className="flex">
              {/* Combo image */}
              <img
                src={comboThreeImage}
                alt="Components combo image."
                className="w-1/3 hidden md:inline-block"
              />

              {/* Slider */}
              <div className="w-full md:w-2/3 items-center relative flex">
                <div className="bg-gradient-to-br from-clr-two absolute -z-10 to-clr-three w-full h-4/5" />

                <Slider
                  sliderId="promo_three"
                  data={productos.filter(
                    (producto) => producto.tipoProducto === idTipoProcesador
                  )}
                />
              </div>
            </div>
          </section>
        </>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <h2>Cargando..</h2>
      )}
    </main>
  );
}
