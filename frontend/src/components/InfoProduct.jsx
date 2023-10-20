import { useState } from "react";
import Card from "./Card";

function Button({ signo, handleClick }) {
  return (
    <button className="bg-clr-three px-3 rounded-lg " onClick={handleClick}>
      {signo}
    </button>
  );
}

export default function InfoProduct(props) {
  const [cantidad, setCantidad] = useState(0);
  return (
    <div className="flex justify-center items-center py-32">
      <article className="bg-clr-one text-[#FFFFFF] w-[80vw]  pt-4 pb-12 px-10 md:pt-12">
        <section className="flex flex-col md:flex-row md:gap-x-12 items-center">
          <img
            className="w-[60%] md:w-[40%] self-center drop-shadow-3xl "
            src={props.img}
            alt={props.name}
          />
          <div className="flex flex-col  gap-y-6  text-center md:text-right">
            <h2 className="text-2xl font-bold">{props.name}</h2>
            <h3 className="text-2xl font-bold">{props.precio}</h3>
            <p className="text-justify ">&ldquo;{props.descripcion}&rdquo;</p>
            <div className="self-start flex justify-center gap-x-6">
              <p>{props.disponible} disponibles</p>
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
                  if (cantidad < props.disponible) {
                    setCantidad(cantidad + 1);
                  }
                }}
              />
            </div>
            <button className="bg-clr-three self-end w-fit px-6 py-1 rounded-lg ">
              Comprar
            </button>
          </div>
        </section>
        <hr className="my-8" />
        <section className="text-center md:text-left">
          <h2 className="font-bold text-2xl mb-4">Características </h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <hr className="my-8" />
        <section className="text-center md:text-left">
          <h2 className="font-bold text-2xl mb-4">Productos relaciones </h2>
          <div className="pb-6 flex  overflow-x-auto gap-6">
            <Card
              infoCard={true}
              item={{
                id: 2,
                name: "ASUS Zenbook Pro 14 Duo OLED",
                category: "Laptops",
                price: "$5.400.000",
                linking: props.img,
              }}
            />
            <Card
              infoCard={true}
              item={{
                id: 2,
                name: "ASUS Zenbook Pro 14 Duo OLED",
                category: "Laptops",
                price: "$5.400.000",
                linking: props.img,
              }}
            />
            <Card
              infoCard={true}
              item={{
                id: 2,
                name: "ASUS Zenbook Pro 14 Duo OLED",
                category: "Laptops",
                price: "$5.400.000",
                linking: props.img,
              }}
            />
            <Card
              infoCard={true}
              item={{
                id: 2,
                name: "ASUS Zenbook Pro 14 Duo OLED",
                category: "Laptops",
                price: "$5.400.000",
                linking: props.img,
              }}
            />
            <Card
              infoCard={true}
              item={{
                id: 2,
                name: "ASUS Zenbook Pro 14 Duo OLED",
                category: "Laptops",
                price: "$5.400.000",
                linking: props.img,
              }}
            />
          </div>
        </section>
      </article>
    </div>
  );
}
