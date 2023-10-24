import { AiOutlineMenu } from "react-icons/ai";
export const links = [
  {
    name: <AiOutlineMenu className="w-10 h-10"></AiOutlineMenu>,
    submenu: true,
    sublinks: [
      {
        Head: "!Bienvenidos¡",
        sublink: [

          {name: "Computadores", link: "/",
           submenu: true,
            sublinks: [
            {
              Head: "!Bienvenidos¡",
              sublink: [
                { name: "Computadores", link: "/" },
                { name: "Componentes", link: "/" },
                { name: "Zona Gamer", link: "/" },
                { name: "Ofertas", link: "/" },
              ],
            },
          ] },
          { name: "Componentes", link: "/" },
          { name: "Zona Gamer", link: "/" },
          { name: "Ofertas", link: "/" },
        ],
      },
    ]}
];
