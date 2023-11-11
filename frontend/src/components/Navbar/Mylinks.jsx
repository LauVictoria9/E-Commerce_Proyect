import { AiOutlineMenu } from "react-icons/ai";
export const menu = [
  {
    id: "menu1",
    icono: <AiOutlineMenu className="w-10 h-10"></AiOutlineMenu>,
    datos: [
      {
        id: "dato1",
        Head: "!Bienvenidos¡",
        links: [
          {
            id: "link1",
            name: "Computadores",
            link: "seccion-asus/",
            submenu: true,
            subdatos: [
              {
                Head: "!Computadores¡",
                sublinks: [
                  { name: "portatiles", link: "/romero" },
                  { name: "convertibles 2 en 1", link: "/arias" },
                ],
              },
            ],
          },
          {
            id: "link2",
            name: "Componentes",
            link: "seccion-componentes/",
          },
          {
            id: "link3",
            name: "Zona Gamer",
            link: "seccion-tarjetas-graficas/",
          },
          {
            id: "link4",
            name: "Ofertas",
            link: "/",
          },
        ],
      },
    ],
  },
];
