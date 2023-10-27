import React from "react";
import Asus from "../img/asusImage.png";
import AsusPortatilImage from "../img/asusPortatil.jpg";

/* Components imports */
import Slider from "../components/Slider";

/* Item data temp */
import { itemDataAsus, itemDataAsus1, itemDataAsus2 } from "../layout/data";

export default function SeccionAsus() {
  return (
    <main className="pt-8 pb-16 ">
      <section className="relative flex justify-center items-center">
        <div className="bg-clr-two w-full h-96" />
        <img src={Asus} alt="" className="absolute max-w-auto w-1/2" />
      </section>

      <div className="h-8" />

      <section className="">
        <div className="flex">
          {/* Combo image */}
          <img
            src={AsusPortatilImage}
            alt="Components combo image."
            className="w-1/3 hidden md:inline-block"
          />

          {/* Slider */}
          <div className="w-full md:w-2/3 items-center relative flex">
            <div className="bg-gradient-to-br from-clr-two absolute -z-10 to-clr-three w-full h-4/5" />

            <Slider sliderId="promo_one" data={itemDataAsus} />
          </div>
        </div>

        <div className="h-16" />

        <div className="flex">
          {/* Slider */}
          <div className="w-full md:w-4/% items-center relative flex">
            <div className="bg-gradient-to-br from-clr-two absolute -z-10 to-clr-three w-full h-4/5" />

            <Slider sliderId="promo_two" data={itemDataAsus1} />
          </div>
        </div>
        <div className="h-16" />

        <div className="flex">
          {/* Slider */}
          <div className="w-full md:w-4/% items-center relative flex">
            <div className="bg-gradient-to-br from-clr-two absolute -z-10 to-clr-three w-full h-4/5" />

            <Slider sliderId="promo_three" data={itemDataAsus2} />
          </div>
        </div>
      </section>
    </main>
  );
}
