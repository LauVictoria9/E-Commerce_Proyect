import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import { FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6";

export default function Header() {
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const handleClick = () => {
    setShowProfileOptions(!showProfileOptions);
  };

  return (
    <header className="px-8 py-4 bg-gradient-to-l to-violet-700 from-pink-700 text-white">
      <div className="flex items-center">
        <Link to="/">Logo</Link>

        <div className="w-8" />

        <nav className="font-medium">
          <NavLink to={"/"} className="hover:underline">
            Inicio
          </NavLink>
        </nav>

        <div className="mx-auto relative items-center hidden md:flex">
          <input
            type="text"
            placeholder="Buscar"
            className="rounded-full px-2 py-1"
          />

          <FaMagnifyingGlass className="absolute right-2 text-black opacity-50" />
        </div>

        <div className="flex-grow md:hidden" />

        <Link to={"/carrito"} className="text-2xl hover:opacity-90">
          <FaCartShopping />
        </Link>

        <div className="w-4" />

        <div className="flex justify-center relative">
          <button
            onClick={handleClick}
            className="w-10 h-10 rounded-full bg-white"
          ></button>

          <div
            className={`absolute ${
              showProfileOptions ? "flex" : "hidden"
            } z-10 text-center bg-gradient-to-br to-violet-700 from-pink-700 flex-col font-medium rounded-md -bottom-32 overflow-hidden`}
          >
            <Link
              to={"/favoritos"}
              className="px-4 py-2 hover:bg-black/25 transition-colors duration-200 ease-in-out"
            >
              Favoritos
            </Link>
            <Link
              to={"/User"}
              className="px-4 py-2 hover:bg-black/25 transition-colors duration-200 ease-in-out"
            >
              Perfil
            </Link>
            <button className="px-4 py-2 hover:bg-black/25 transition-colors duration-200 ease-in-out">
              Salir
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
