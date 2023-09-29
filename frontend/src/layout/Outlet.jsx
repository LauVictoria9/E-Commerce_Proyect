import InicioD from "../img/InicioD.jpg";
import Barra from "../img/Barra.jpg";
import BarraD from "../img/BarraD.jpg";
import Proce from "../img/Procesadores.jpg";
import Compo from "../img/Componentes.jpg";
import Elementos from "../img/Elementos.png";
import Tarjeta from "../img/Tarjetas.jpg";
import Inicio from "../pages/Inicio";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./data";
import { itemData } from "./data";

export default function Outlet() {
  return (
    <section>
      <div className="flex relative">
        <img src={InicioD} alt="" className="pt-8 max-w-full h-108" />
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={Elementos} alt="" className=" h-auto max-w-full" />
        </div>
      </div>
      <div className="flex items-center pt-5 mx-4 w-full">
        <img src={Proce} alt="" className="h-auto max-w-md" />
        <div className="flex relative max-w-full">
          <img src={Barra} alt="" className="w-full h-80" />
          <div className="absolute max-w-4xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Slider {...settings}>
              {itemData.map((item) => (
                <div className="h-96 bg-slate-300 text-center font-bold text-[#4B0081] ">
                  <div className="w-58">
                    <img src={item.linking} alt={item.title} />
                    <h1>{item.title}</h1>
                  </div>
                  <div className="card-bottom">
                    <p>{item.category}</p>
                    <h3>{item.price}</h3>
                    <button className="relative w-32 h-12">
                      <img
                        src={Barra}
                        alt="Imagen de fondo del botón"
                        className="absolute inset-0 w-full h-full object-cover py-2 px-2"
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-white">
                        Ver más
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="flex items-center pt-5 mx-4 w-full">
        <div className="flex relative max-w-full">
          <img src={BarraD} alt="" className="w-full h-80" />
          <div className="absolute max-w-4xl top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 ">
            <Slider {...settings}>
              {itemData.map((item) => (
                <div className="h-96 bg-slate-300 text-center font-bold text-[#4B0081] ">
                  <div className="w-58">
                    <img src={item.linking} alt={item.title} />
                    <h1>{item.title}</h1>
                  </div>
                  <div className="card-bottom">
                    <p>{item.category}</p>
                    <h3>{item.price}</h3>
                    <button className="relative w-32 h-12">
                      <img
                        src={Barra}
                        alt="Imagen de fondo del botón"
                        className="absolute inset-0 w-full h-full object-cover py-2 px-2"
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-white">
                        Ver más
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <img src={Proce} alt="" className="h-auto max-w-md ml-auto" />
      </div>

      <div className="flex items-center pt-5 mx-4 w-full">
        <img src={Proce} alt="" className="h-auto max-w-md" />
        <div className="flex relative max-w-full">
          <img src={Barra} alt="" className="w-full h-80" />
          <div className="absolute max-w-4xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Slider {...settings}>
              {itemData.map((item) => (
                <div className="h-96 bg-slate-300 text-center font-bold text-[#4B0081] ">
                  <div className="w-58">
                    <img src={item.linking} alt={item.title} />
                    <h1>{item.title}</h1>
                  </div>
                  <div className="card-bottom">
                    <p>{item.category}</p>
                    <h3>{item.price}</h3>
                    <button className="relative w-32 h-12">
                      <img
                        src={Barra}
                        alt="Imagen de fondo del botón"
                        className="absolute inset-0 w-full h-full object-cover py-2 px-2"
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-white">
                        Ver más
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
