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
import { itemData2, itemData3, settings } from "./data";
import { itemData } from "./data";

export default function Outlet() {
  return (
    <section>
      <div className="flex relative ">
        <img src={InicioD} alt="" className="pt-8 max-w-full h-108" />
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={Elementos} alt="" className=" max-w-auto h-auto" />
        </div>
      </div>
      <div className="flex items-center pt-5 mx-4">
        <img src={Compo} alt="" className="w-full md:w-1/2 h-auto max-w-md " />
        <div className="flex relative max-w-full">
          <img src={Barra} alt="" className="w-full h-80" />
          <div className="absolute max-w-4xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Slider {...settings}>
              {itemData.map((item) => (
                <div className="h-96 bg-white text-center font-bold text-[#4B0081] item-center overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out shadow-md ">
                  <div className="w-52 ">
                    <img src={item.linking} alt={item.title} />
                    <h1>{item.title}</h1>
                  </div>
                  <div className="pt-3">
                    <p>{item.category}</p>
                    <h3>{item.price}</h3>
                    <button className="relative w-32 h-12 ">
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

      <div className="flex items-center pt-5 mx-4">
        <div className="flex relative max-w-full">
          <img src={Barra} alt="" className="w-full h-80" />
          <div className="absolute max-w-4xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* <Slider {...settings}>
              {itemData3.map((item) => (
                <div className="h-96 bg-white text-center font-bold text-[#4B0081] item-center overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out shadow-md ">
                  <div className="w-56">
                    <img src={item.linking} alt={item.title} />
                    <h1>{item.title}</h1>
                  </div>
                  <div className="pt-0">
                    <p>{item.category}</p>
                    <h3>{item.price}</h3>
                    <button className="relative w-32 h-12 ">
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
            </Slider> */}
          </div>
        </div>
        <img
          src={Tarjeta}
          alt=""
          className="w-full md:w-1/2 h-auto max-w-md  "
        />
      </div>

      <div className="flex items-center pt-5 mx-4">
        <img src={Proce} alt="" className="w-full md:w-1/2 h-auto max-w-md" />
        <div className="flex relative max-w-full">
          <img src={Barra} alt="" className="w-full h-80" />
          <div className="absolute max-w-4xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* <Slider {...settings}>
              {itemData3.map((item) => (
                <div className="h-96 bg-white text-center font-bold text-[#4B0081] item-center overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out shadow-md ">
                  <div className="w-56">
                    <img src={item.linking} alt={item.title} />
                    <h1>{item.title}</h1>
                  </div>
                  <div className="pt-0">
                    <p>{item.category}</p>
                    <h3>{item.price}</h3>
                    <button className="relative w-32 h-12 ">
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
            </Slider> */}
          </div>
        </div>
      </div>
    </section>
  );
}
