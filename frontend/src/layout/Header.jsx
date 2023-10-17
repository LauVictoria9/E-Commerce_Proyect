import Navbar from "../components/Navbar/Navbar";
import { BsFillPersonFill } from "react-icons/bs"; 
import { AiOutlineShoppingCart } from "react-icons/ai"; 
import { AiFillHeart } from "react-icons/ai";

export default function Header() {
  return (
    <header className="h-[10vh]" >
      <div className="flex flex-row-reverse my-2">
      <BsFillPersonFill className="w-8 h-8"></BsFillPersonFill>
      <AiOutlineShoppingCart className="w-8 h-8 mx-2"></AiOutlineShoppingCart>
      <AiFillHeart className="w-8 h-8 "></AiFillHeart>
      </div>
     <Navbar/>
    </header>
  );
}
