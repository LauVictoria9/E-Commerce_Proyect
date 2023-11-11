import { Link } from "react-router-dom";

export default function Carrito() {
  return (
    <div className="font-sans flex flex-col items-center gap-y-10 py-8 ">

      {/* Encabezado de articulos */}
<section className=" h-[80vh] justify-self-center flex justify-center items-center">
<div className="  flex flex-col md:flex-row gap-x-6 w-[85%] md:w-[70%] lg:w-[60%] h-min items-center justify-center px-16 py-8 rounded-lg shadow-lg">
  {/* <div className="flex flex-col md:flex-row items-center md:px-5 lg:px-10 xl:px-20 2xl:px-32 md:pt-10 md:pb-20 text-center overflow-hidden border-b-2 rounded-lg border-slate-400"> */}
  {/* <div className="pl-5 md:pl-20 pr-5"> */}
  <div className="bg-[#cecdcd] flex justify-center items-center w-[8rem] md:w-[100%] max-w-[10rem] p-5 rounded-[50%] overflow-hidden drop-shadow-xl hover:drop-shadow-2xl">
    <img
      src="https://media.discordapp.net/attachments/885630750244868136/1172248051361005718/1699556085973.png?ex=655fa012&is=654d2b12&hm=f7484016699701d924f64d5b9ec47223a83f8bc4980c9f9fb65bb42ce5fc4360&="
      alt="Un carrito de compras."
    />
  </div>
  {/* </div> */}

  <div className="text-center text-clip">
    <h2 className="text-2xl md:text-3xl font-bold text-[#6A61D9] px-3 py-3">
      No tienes ningún artículo
    </h2>
    <p className="px-3 py-5 pb-10 text-sm md:text-base">
      En este momento no tienes ningún artículo en el carrito, cuando
      agregues o quieras comprar un artículo de tu interés, aparecerá
      aquí.
    </p>
    <Link
      to={"/"}
      className="px-2 md:px-3 py-1.5 rounded-lg bg-[#6A61D9] text-white hover:bg-[#824EA3] font-semibold"
    >
      Ver artículos
    </Link>
  </div>
  {/* </div> */}
    </div>
    </section>

      {/*Lista de articulos en el carrito*/}
      <section className="w-[90vw] flex flex-col md:flex-row justify-center gap-x-8 items-center justify-self-center">
        {/* <div className="flex items-center justify-center p-5 md:w-1/2"> */}
        <section className="w-[85%] md:w-[62%]  flex flex-col gap-y-3">
          <h1 className="p-3 text-2xl font-bold text-[#6A61D9] mt-4  text-center md:text-start">
            Carro (0 artículos)
          </h1>

          {/* Articulo 1*/}

          <div className="rounded-2xl w-full h-2 bg-gradient-to-r from-[#6A61D9] via-[#824EA3] to-[#F46ED8]" />
          <div className="flex flex-col gap-y-2 rounded-lg shadow-lg md:flex-row justify-center gap-x-[5%] p-4">
            <div className="flex flex-col items-center justify-center md:flex-row  gap-x-[5%] text-center">
              {/* <input
                type="checkbox"
                className="appearance-none checked:bg-[#6A61D9] border-2 border-[#666565] w-6 h-5 checked:after:content-['✔']"
              /> */}
              <img
                className="p-1 w-[10rem] h-auto "
                src="https://cdn.discordapp.com/attachments/885630750244868136/1159613130180137030/c02874c2ea329bf48a76f6bef9e9e4fb-product.png?ex=6531a8e2&is=651f33e2&hm=191e99d3aa7dc3246272174a0100c14321c2153cf6e901f2542a92652ceb84bf&"
                alt="Imagen de elemendo de la lista."
              />
              <p className="self-center  text-[#824EA3] text-base font-bold">
                Portátil HP 15-dw3505la
              </p>
            </div>

            <p className="self-center text-[#824EA3] text-lg font-bold">
              $500.000
            </p>
            <div className="self-center flex justify-center items-center">
              <button
                onClick={() => {
                  const input = document.querySelector(".quantity-input");
                  if (input) {
                    input.value = Math.max(parseInt(input.value) - 1, 0);
                  }
                }}
                className="  w-5 h-5 text-center text-[white] bg-[#6A61D9] hover:bg-[#824EA3] rounded font-semibold"
              >
                -
              </button>

              <input
                type="number"
                className="quantity-input appearance-none w-7 h-7 text-center text-[#824EA3] font-semibold"
                min="0"
                value="0"
              />

              <button
                onClick={() => {
                  const input = document.querySelector(".quantity-input");
                  if (input) {
                    input.value = parseInt(input.value) + 1;
                  }
                }}
                className=" w-5 h-5 text-center text-[white] bg-[#6A61D9] hover:bg-[#824EA3] rounded font-semibold"
              >
                +
              </button>
            </div>
          </div>

           {/* Articulo 2*/}

          <div className="rounded-2xl w-full h-2 bg-gradient-to-r from-[#6A61D9] via-[#824EA3] to-[#F46ED8]" />
          <div className="flex flex-col gap-y-2 rounded-lg shadow-lg md:flex-row justify-center gap-x-[5%] p-4">
            <div className="flex flex-col items-center justify-center md:flex-row  gap-x-[5%] text-center">
              {/* <input
                type="checkbox"
                className="appearance-none checked:bg-[#6A61D9] border-2 border-[#666565] w-6 h-5 checked:after:content-['✔']"
              /> */}
              <img
                className="p-1 w-[10rem] h-auto "
                src="https://cdn.discordapp.com/attachments/885630750244868136/1159613130180137030/c02874c2ea329bf48a76f6bef9e9e4fb-product.png?ex=6531a8e2&is=651f33e2&hm=191e99d3aa7dc3246272174a0100c14321c2153cf6e901f2542a92652ceb84bf&"
                alt="Imagen de elemendo de la lista."
              />
              <p className="self-center  text-[#824EA3] text-base font-bold">
                Portátil HP 15-dw3505la
              </p>
            </div>

            <p className="self-center text-[#824EA3] text-lg font-bold">
              $500.000
            </p>
            <div className="self-center flex justify-center items-center">
              <button
                onClick={() => {
                  const input = document.querySelector(".quantity-input");
                  if (input) {
                    input.value = Math.max(parseInt(input.value) - 1, 0);
                  }
                }}
                className="  w-5 h-5 text-center text-[white] bg-[#6A61D9] hover:bg-[#824EA3] rounded font-semibold"
              >
                -
              </button>

              <input
                type="number"
                className="quantity-input appearance-none w-7 h-7 text-center text-[#824EA3] font-semibold"
                min="0"
                value="0"
              />


              <button
                onClick={() => {
                  const input = document.querySelector(".quantity-input");
                  if (input) {
                    input.value = parseInt(input.value) + 1;
                  }
                }}
                className=" w-5 h-5 text-center text-[white] bg-[#6A61D9] hover:bg-[#824EA3] rounded font-semibold"
              >
                +
              </button>
            </div>
          </div>


           {/* Articulo 3*/}

          <div className="rounded-2xl w-full h-2 bg-gradient-to-r from-[#6A61D9] via-[#824EA3] to-[#F46ED8]" />
          <div className="flex flex-col gap-y-2 rounded-lg shadow-lg md:flex-row justify-center gap-x-[5%] p-4">
            <div className="flex flex-col items-center justify-center md:flex-row  gap-x-[5%] text-center">
              {/* <input
                type="checkbox"
                className="appearance-none checked:bg-[#6A61D9] border-2 border-[#666565] w-6 h-5 checked:after:content-['✔']"
              /> */}
              <img
                className="p-1 w-[10rem] h-auto "
                src="https://cdn.discordapp.com/attachments/885630750244868136/1159613130180137030/c02874c2ea329bf48a76f6bef9e9e4fb-product.png?ex=6531a8e2&is=651f33e2&hm=191e99d3aa7dc3246272174a0100c14321c2153cf6e901f2542a92652ceb84bf&"
                alt="Imagen de elemendo de la lista."
              />
              <p className="self-center  text-[#824EA3] text-base font-bold">
                Portátil HP 15-dw3505la
              </p>
            </div>

            <p className="self-center text-[#824EA3] text-lg font-bold">
              $500.000
            </p>
            <div className="self-center flex justify-center items-center">
              <button
                onClick={() => {
                  const input = document.querySelector(".quantity-input");
                  if (input) {
                    input.value = Math.max(parseInt(input.value) - 1, 0);
                  }
                }}
                className="  w-5 h-5 text-center text-[white] bg-[#6A61D9] hover:bg-[#824EA3] rounded font-semibold"
              >
                -
              </button>

              <input
                type="number"
                className="quantity-input appearance-none w-7 h-7 text-center text-[#824EA3] font-semibold"
                min="0"
                value="0"
              />

              <button
                onClick={() => {
                  const input = document.querySelector(".quantity-input");
                  if (input) {
                    input.value = parseInt(input.value) + 1;
                  }
                }}
                className=" w-5 h-5 text-center text-[white] bg-[#6A61D9] hover:bg-[#824EA3] rounded font-semibold"
              >
                +
              </button>
            </div>
          </div>
        </section>
        {/* </div> */}


        {/*Resumen de compra*/}

        <section className="w-[75%] md:w-[30%] rounded-lg shadow-lg flex md:self-start justify-center p-5 my-16">
          <div className=" ">
            <div className="text-center">
              <h1 className="p-3 text-2xl font-bold text-[#6A61D9] mt-4">
                Resumen de Compra
              </h1>
              <div className="rounded-2xl  h-2 bg-gradient-to-r from-[#6A61D9] via-[#824EA3] to-[#F46ED8]"></div>
            </div>

            <div className="mt-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-[#824EA3] text-sm font-bold ">
                    <b>Productos (0)</b>
                  </p>
                  <p className="text-[#824EA3] text-sm font-semibold">
                    <b>Total:</b>
                  </p>
                </div>

                <p className=" text-right text-[#824EA3] font-medium">
                  <b>$0</b>
                </p>
              </div>
            </div>

            <Link
               to={"/"}
               className="w-full bg-[#6A61D9] text-white py-2 px-4 rounded-lg hover:bg-[#9660fa] focus:outline-none focus:bg-blue-500 mt-4 font-semibold"
            >
                Continuar compra
            </Link>
            

          </div>
        </section>
      </section>
    </div>
  );
}
