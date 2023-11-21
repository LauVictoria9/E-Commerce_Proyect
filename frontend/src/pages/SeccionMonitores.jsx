//import React from "react";
import Monitor from "../img/LogoMonitorMsi.png";
import MonitorLogoImg from "../img/componentes.jpg";

/* Components imports */
import Slider from "../components/Slider";

/* Item data temp */
import { itemDataMonitores, itemDataMonitores1, itemDataMonitores2 } from "../layout/data";

export default function SeccionMonitores() {
  return (
    <main className="pt-8 pb-16 ">
      <section className="relative flex justify-center items-center">
        <div className="bg-clr-two w-full h-96" />
        <img src={Monitor} alt="" className="absolute max-w-auto w-1/2 object-scale-down " />
      </section>

      <div className="h-8" />

      <section className="">
        <div className="flex">
          {/* Combo image */}
          <img
            src={MonitorLogoImg}
            alt="Components combo image."
            className="w-1/3 hidden md:inline-block"
          />

          {/* Slider */}
          <div className="w-full md:w-2/3 items-center relative flex">
            <div className="bg-gradient-to-br from-clr-two absolute -z-10 to-clr-three w-full h-4/5" />

            <Slider sliderId="promo_one" data={itemDataMonitores} />
          </div>
        </div>

        <div className="h-16" />

        <div className="flex">
          {/* Slider */}
          <div className="w-full md:w-4/% items-center relative flex">
            <div className="bg-gradient-to-br from-clr-two absolute -z-10 to-clr-three w-full h-4/5" />

            <Slider sliderId="promo_two" data={itemDataMonitores1} />
          </div>
        </div>
        <div className="h-16" />

        <div className="flex">
          {/* Slider */}
          <div className="w-full md:w-4/% items-center relative flex">
            <div className="bg-gradient-to-br from-clr-two absolute -z-10 to-clr-three w-full h-4/5" />

            <Slider sliderId="promo_three" data={itemDataMonitores2} />
          </div>
        </div>
      </section>
    </main>
  );
}
