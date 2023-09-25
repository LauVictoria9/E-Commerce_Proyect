import InicioD from "../img/InicioD.jpg";
import Barra from "../img/Barra.jpg";
import BarraD from "../img/BarraD.jpg";
import Proce from "../img/Procesadores.jpg";
import Compo from "../img/Componentes.jpg";
import Elementos from "../img/Elementos.png";
import Tarjeta from "../img/Tarjetas.jpg";
import Inicio from "../pages/Inicio";
import Slider from "../components/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./data";
import { itemData } from "./data";

export default function Outlet() {
  return (
    <section>
      <div className="w—full h—screen mx—auto">
        <div className="flex relative">
          <img src={InicioD} alt="" className="pt-8 w-full h-108" />
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={Elementos}
              alt=""
              className="w-[740.117px] h-[510px] h-auto max-w-full"
            />
          </div>
        </div>

        <div className="h-8" />

        <div className="flex items-center px-5 w-full">
          <img src={Proce} alt="" className="w-full h-auto max-w-md" />

          <div className="w-full flex">
            <div className="bg-purple-600">left</div>

            <Slider data={itemData} sliderId="slider_one" />

            <div className="bg-purple-600">left</div>
          </div>
        </div>
        <div className="flex relative items-center justify-center p-5 pt-40">
          <img src={BarraD} alt="" className="w-full h-96 grid grid-cols-1" />
          <div className="absolute top-18 right-3">
            <img
              src={Compo}
              alt=""
              className="w-[500.117px] h-[510px] h-auto max-w-full"
            />
          </div>
        </div>
        <div className="flex relative items-center justify-center p-5 py-40">
          <img src={Barra} alt="" className="w-full h-96" />
          <div className="absolute top-18 left-3">
            <img
              src={Tarjeta}
              alt=""
              className="w-[500.117px] h-[510px] h-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
