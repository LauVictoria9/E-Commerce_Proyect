import { AiOutlineMenu } from "react-icons/ai";
export const menu = [
  {
    id: "menu1",
    icono: <AiOutlineMenu className="w-10 h-10"></AiOutlineMenu>,
    datos: [
      {
        id: "dato1",
        Head: "¡Bienvenidos!",
        links: [
          {
            id: "link1",
            name: "Computadores",
            submenu: true,
            subdatos: [
              {
                Head: "Portatiles",
                sublinks: [
                  { name: "ASUS", link: "/seccion-asus/" },
                  { name: "ACER", link: "/seccion-acer" },
                  { name: "HP", link: "/seccion-hp/" },
                  { name: "LENOVO", link: "/seccion-lenovo/" },
                ],
              },
            ],
          },
          {
            id: "link2",
            name: "Componentes",
            submenu: true,
            subdatos: [
              {
                Head: "",
                sublinks: [
                  { name: "Procesadores", link: "/seccion-procesadores/" },
                  { name: "Tarjetas Graficas", link: "/seccion-tarjetas-graficas/" },
                  { name: "Fuentes de Poder", link: "/seccion-fuentesP/" },
                  { name: "Refrigeracion Liquida", link: "/seccion-refrigeracion-liquida/" },
                ],
              },
            ],
          },
          {
            id: "link3",
            name: "Zona Gamer",
            submenu: true,
            subdatos: [
              {
                Head: "",
                sublinks: [
                  { name: "Monitores", link: "/seccion-Monitores/" },
                  { name: "Chasis", link: "/seccion-Chasis" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];