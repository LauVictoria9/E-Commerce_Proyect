import { Link } from "react-router-dom";
import Logo from "../../img/Logo.png";
import NavLinks from "./NavLinks";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  // const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-between md:px-10 px-6  py-1">
      {/* <section className="flex justify-between items-center "> */}
      {/* <div className="z-50 p-5 w-full flex justify-between  ">
          romero
          <div
            className="text-3xl md:hidden bg-black"
            onClick={() => setOpen(!open)}
          >
            romero
            <ion-icon name={`${open ? "close" : "menu"}`}>romero</ion-icon>
          </div>
        </div> */}
      <ul className="flex items-center justify-center gap-x-6">
        <li className="relative">
          <NavLinks />
        </li>
        <li className="h-min">
          <Link to="/">
            <AiOutlineSearch className="w-10 h-10"></AiOutlineSearch>
          </Link>
        </li>
      </ul>
      {/* Mobile nav */}
      {/* <ul
          className={`
        md:hidden bg-white fixed w-full top-20 z-30 overflow-y-auto bottom-0  pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              <AiOutlineSearch className="w-8 h-8"></AiOutlineSearch>
            </Link>
          </li>
          <NavLinks />
        </ul> */}
      <Link to="/"><img src={Logo} alt="logo" className="h-20"/></Link>
      {/* </section> */}
    </nav>
  );
};

export default Navbar;
