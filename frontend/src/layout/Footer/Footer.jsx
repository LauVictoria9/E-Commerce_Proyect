import React from "react";
import Logo_ from "../../img/i3.jpg";
import {Item} from "./ItemFooter"
import { CONTACTO, LEGAL } from "./MenuFooter";



export default function Footer() {
  return (
    <footer className= "bg-gradient-to-r from-violet-500 to-fuchsia-500 flex text-white justify-center">
      <div className="text-2xl mx-10 grid grid-cols-1 md:grid-cols-3 gap-5 p-8 py-4 ">
      <div className='flex h-[8vh] md:h-[10hv]'>
        <img src={Logo_} alt="Logo empresa" /> 
      </div>
      <Item Links={CONTACTO} title={'CONTACTO'}/>
      <Item Links={LEGAL} title={'LEGAL'}/>
      </div>  
      </footer>
      )
    ;}