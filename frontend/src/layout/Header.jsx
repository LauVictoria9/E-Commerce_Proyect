import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

export default function Header() {
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  function handleClick() {
    setShowProfileOptions(!showProfileOptions);
  }
  return (
    <header>
      <section className="flex justify-end gap-x-4 py-2 px-5">
        <Link to="favoritos">
          <AiFillHeart className="w-7 h-7 "></AiFillHeart>
        </Link>
        <p className="border-l-2 border-black"></p>
        <Link to="carrito">
          <AiOutlineShoppingCart className="w-7 h-7"></AiOutlineShoppingCart>
        </Link>
        <p className="border-l-2 border-black"></p>
        <button onClick={handleClick} className="relative">
          <BsFillPersonFill className="w-7 h-7"></BsFillPersonFill>
          <div
            className={`${showProfileOptions ? "flex" : "hidden"} 
            absolute right-0 z-10 bg-clr-one border-2 border-black flex-col py-4 mt-2 text-center   font-medium rounded-md whitespace-nowrap `}
          >
            <div className="absolute top-[-12px] right-[6px] w-0 h-0  border-l-[8px] border-r-[8px] border-b-[12px] border-transparent  border-b-black"></div>
            <Link
              to={"/iniciar sesion"}
              className="px-6 py-2 w-full hover:bg-black/25 transition-colors duration-200 ease-in-out"
            >
              Iniciar sesion
            </Link>
            <Link
              to={"/User"}
              className="px-6 py-2 hover:bg-black/25 transition-colors duration-200 ease-in-out"
            >
              Registrarse
            </Link>
            <button className="px-6 py-2 hover:bg-black/25 transition-colors duration-200 ease-in-out">
              Cerrar Sesion
            </button>
          </div>
          <div></div>
        </button>
      </section>
      <Navbar />
    </header>
  );
}

// import { NavLink, Link } from "react-router-dom";
// import { FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6";
//hasta aqui es provicional

// <header className="px-8 py-4 bg-gradient-to-l to-violet-700 from-pink-700 text-white">
//   <div className="flex items-center">
//     <Link to="/">Logo</Link>

//     <div className="w-8" />

//     <nav className="font-medium">
//       <NavLink to={"/"} className="hover:underline">
//         Inicio
//       </NavLink>
//     </nav>

//     <div className="mx-auto relative items-center hidden md:flex">
//       <input
//         type="text"
//         placeholder="Buscar"
//         className="rounded-full px-2 py-1"
//       />

//       <FaMagnifyingGlass className="absolute right-2 text-black opacity-50" />
//     </div>

//     <div className="flex-grow md:hidden" />

//     <Link to={"/carrito"} className="text-2xl hover:opacity-90">
//       <FaCartShopping />
//     </Link>

//     <div className="w-4" />

//     <div className="flex justify-center relative">
//       <button
//         onClick={handleClick}
//         className="w-10 h-10 rounded-full bg-white"
//       ></button>

//       <div
//         className={`absolute ${
//           showProfileOptions ? "flex" : "hidden"
//         } z-10 text-center bg-gradient-to-br to-violet-700 from-pink-700 flex-col font-medium rounded-md -bottom-32 overflow-hidden`}
//       >
//         <Link
//           to={"/favoritos"}
//           className="px-4 py-2 hover:bg-black/25 transition-colors duration-200 ease-in-out"
//         >
//           Favoritos
//         </Link>
//         <Link
//           to={"/User"}
//           className="px-4 py-2 hover:bg-black/25 transition-colors duration-200 ease-in-out"
//         >
//           Perfil
//         </Link>
//         <button className="px-4 py-2 hover:bg-black/25 transition-colors duration-200 ease-in-out">
//           Salir
//         </button>
//       </div>
//     </div>
//   </div>
// </header>
