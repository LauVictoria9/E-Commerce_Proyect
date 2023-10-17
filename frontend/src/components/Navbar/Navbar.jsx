import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.png";
import NavLinks from "./NavLinks";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {  
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 relative">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">    
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins] pr-96 mr-96">
        <NavLinks />
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
            <AiOutlineSearch className="w-10 h-10"></AiOutlineSearch>
            </Link>
          </li>
        </ul>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
            <AiOutlineSearch className="w-8 h-8"></AiOutlineSearch>
            </Link>
          </li>
          <NavLinks />
        </ul>
        <img src={Logo} alt="logo" className="md:cursor-pointer h-24" />
      </div> 
    </nav>
  );
};

export default Navbar;
