export default function Carrito() {

  {/*Página*/}
  return <div className="m-0 p-0 box-border font-sans">

{/*Body*/}
<div className= "flex flex-col items-center p-1 min-h-screen bg-[white]">


{ /* Encabezado de articulos */}

<div className="md:px-80">
  <div className="flex flex-col md:flex-row items-center md:px-5 lg:px-10 xl:px-20 2xl:px-32 md:pt-10 md:pb-20 text-center overflow-hidden border-b-2 rounded-lg border-slate-400">
    <div className="pl-5 md:pl-20 pr-5">
          <div className="flex-1 w-32 h-32 object-cover relative rounded-full overflow-hidden">
            <img
              className="bg-[#cecdcd] max-w-full"
              src="https://cdn.discordapp.com/attachments/885630750244868136/1158435794705465424/5a364b6d2c5557.7578312615135076931816.png?ex=651c3ce8&is=651aeb68&hm=3ca96fc6b842d281b3378e16897c5f88fd2c9fe0d955438ea3d0d53d1c527c2a&"
              alt="Un carrito de compras."
            />
          </div>
        </div>
        
        <div className="text-center text-clip">

        <h1 className="text-2xl md:text-3xl font-bold text-[#6A61D9] px-3 py-3">No tienes ningún artículo</h1>
        <p className="px-3 py-5 pb-10 text-sm md:text-base">En este momento no tienes ningún artículo en el carrito, cuando agregues o quieras comprar un artículo de tu interés, aparecerá aquí.</p>
        <button className="px-2 md:px-3 py-1.5 rounded-lg bg-[#6A61D9] text-white hover:bg-[#9660fa] font-semibold"> Ver artículos </button>
        
          </div>  
    
    </div>

</div>
  




{/*Lista de articulos en el carrito*/}

<div className="flex flex-col md:flex-row">

  <div className="flex items-center justify-center p-5 md:w-1/2">
   <div className="rounded-lg p-1 w-full md:w-96 border-b-2 border-slate-300">
      <div className="text-center">
       <h1 className="p-3 text-3xl font-bold text-[#6A61D9] mt-4">Carro (0 artículos)</h1>
        <div className="rounded-2xl w-80 h-2 bg-gradient-to-r from-[#6A61D9] via-[#824EA3] to-[#F46ED8]"></div>
          </div>



        <div className="grid grid-cols-7 gap-1.5 mt-6">

            <input type="checkbox" class="appearance-none checked:bg-[#6A61D9] border-2 border-[#666565] w-5 h-5 checked:after:content-['✔']"/> 
              <img
              className="p-1 w-auto h-auto mx-auto"
              src="https://cdn.discordapp.com/attachments/885630750244868136/1159613130180137030/c02874c2ea329bf48a76f6bef9e9e4fb-product.png?ex=6531a8e2&is=651f33e2&hm=191e99d3aa7dc3246272174a0100c14321c2153cf6e901f2542a92652ceb84bf&"
              alt="Imagen de elemendo de la lista."
              />
            <p className="text-[#824EA3] text-base font-bold">Portátil HP 15-dw3505la Intel Core i3 1115G4 Ram 8gb 256ssd Win de prueba</p>
            <p className="text-[#824EA3] text-lg font-bold">$0</p>


            {/* ______:: Contador con botones ::_________ */}

            <button
                onClick={() => {
                  const input = document.querySelector('.quantity-input');
                  if (input) {
                    input.value = Math.max(parseInt(input.value) - 1, 0);
                  }
                }}
                className="border-2 border-[#666565] w-5 h-5 text-center text-[white] bg-[#6A61D9] hover:bg-[#824EA3] rounded font-semibold"
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
                  const input = document.querySelector('.quantity-input'); 
                  if (input) {
                    input.value = parseInt(input.value) + 1;
                  }
                }}
                className="border-2 border-[#666565] w-5 h-5 text-center text-[white] bg-[#6A61D9] hover:bg-[#824EA3] rounded font-semibold"
              >
                +
            </button>

        </div>

    </div>
  </div>







    {/*Resumen de compra*/}

    <div className="flex items-center justify-center p-5 md:w-1/2">
      <div className="rounded-lg p-8 w-full md:w-96 border-b-2 border-slate-300">
        <div className="text-center">
          <h1 className="p-3 text-3xl font-bold text-[#6A61D9] mt-4">Resumen de Compra</h1>
          <div className="rounded-2xl w-80 h-2 bg-gradient-to-r from-[#6A61D9] via-[#824EA3] to-[#F46ED8]"></div>
        </div>

    <div className="mt-6">
      <div className="grid grid-cols-2 gap-4 mb-4">

        <div>
          <p className="text-[#824EA3] text-sm font-bold "><b>Productos (0)</b></p>
           <p className="text-[#824EA3] text-sm font-semibold"><b>Total:</b></p>
        </div>

            <p className="pt-4 text-right text-[#824EA3] font-medium"><b>$0</b></p>
        

      </div>
    </div>

         <button
          className="w-full bg-[#6A61D9] text-white py-2 px-4 rounded-lg hover:bg-[#9660fa] focus:outline-none focus:bg-blue-500 mt-4 font-semibold">
          Continuar compra
         </button>
      </div>
    </div>


</div>




</div>
</div>
}
