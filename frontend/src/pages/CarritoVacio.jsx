import { Link } from "react-router-dom";

export default function Carrito() {
  return (
    <div className="font-sans flex flex-col items-center gap-y-10 py-8 ">


      {/* Encabezado de articulos */}
      <section className=" h-[80vh] justify-self-center flex justify-center items-center">
        <div className="  flex flex-col md:flex-row gap-x-6 w-[85%] md:w-[70%] lg:w-[60%] h-min items-center justify-center px-16 py-8 rounded-lg shadow-lg">
          {/* <div className="flex flex-col md:flex-row items-center md:px-5 lg:px-10 xl:px-20 2xl:px-32 md:pt-10 md:pb-20 text-center overflow-hidden border-b-2 rounded-lg border-slate-400"> */}
          {/* <div className="pl-5 md:pl-20 pr-5"> */}
          <div className="bg-gradient-to-br group from-clr-one via-clr-two to-clr-three flex justify-center items-center w-[8rem] md:w-[100%] max-w-[10rem] p-5 rounded-[50%] overflow-hidden drop-shadow-xl hover:drop-shadow-2xl">
            <img
              className="invert group-hover:scale-110 transition duration-300 ease-out"
              src="https://media.discordapp.net/attachments/885630750244868136/1172248051361005718/1699556085973.png?ex=655fa012&is=654d2b12&hm=f7484016699701d924f64d5b9ec47223a83f8bc4980c9f9fb65bb42ce5fc4360&="
              alt="Un carrito de compras."
            />
          </div>
          {/* </div> */}

          <div className="text-center text-clip">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-br group from-clr-one via-clr-two to-clr-three text-2xl md:text-3xl font-bold text-[#6A61D9] px-3 py-3">
              No tienes ningún artículo
            </h2>
            <p className="px-3 py-5 pb-10 text-sm md:text-base">
              En este momento no tienes ningún artículo en el carrito, cuando
              agregues o quieras comprar un artículo de tu interés, aparecerá
              aquí.
            </p>
            <Link
              to={"/"}
              className="px-2 md:px-3 py-1.5 rounded-lg text-white bg-clr-two hover:bg-gradient-to-br group from-clr-one via-clr-two to-clr-three font-semibold"
            >
              Ver artículos
            </Link>
          </div>
          {/* </div> */}
        </div>
      </section>
    </div>

 
   );

}
