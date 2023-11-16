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
                Head: "Computadores",
                sublinks: [
                  {
                    id: "subLink1",
                    Head: "Portatiles",
                    name: "Portatiles",
                    submenu: true,
                    ultimosLinks: [
                      {
                        id: "ultimoLink1.1",
                        name: "ASUS",
                        link: "/seccion-asus/",
                      },
                      {
                        id: "ultimoLink1.2",
                        name: "ACER",
                        link: "/seccion-acer",
                      },
                      {
                        id: "ultimoLink1.3",
                        name: "HP",
                        link: "/seccion-hp/",
                      },
                      {
                        id: "ultimoLink1.4",
                        name: "LENOVO",
                        link: "/seccion-lenovo/",
                      },
                    ],
                  },
                  {
                    id: "subLink2",
                    Head: "2 en 1",
                    name: "2 en 1",
                    submenu: true,
                    ultimosLinks: [
                      {
                        id: "ultimoLink2.1",
                        name: "Esteban",
                        link: "/seccion-asus/",
                      },
                      {
                        id: "ultimoLink2.2",
                        name: "Esteban",
                        link: "/seccion-acer",
                      },
                    ],
                  },
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
                  {
                    name: "Tarjetas Graficas",
                    link: "/seccion-tarjetas-graficas/",
                  },
                  { name: "Fuentes de Poder", link: "/seccion-fuentesP/" },
                  {
                    name: "Refrigeracion Liquida",
                    link: "/seccion-refrigeracion-liquida/",
                  },
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

// import { AiOutlineMenu } from "react-icons/ai";
// export const menu = [
//   {
//     id: "menu1",
//     icono: <AiOutlineMenu className="w-10 h-10"></AiOutlineMenu>,
//     datos: [
//       {
//         id: "dato1",
//         Head: "¡Bienvenidos!",
//         links: [
//           {
//             id: "link1",
//             name: "Computadores",
//             submenu: true,
//             subdatos: [
//               {
//                 Head: "Computadores",
//                 sublinks: [
//                   { name: "ASUS", link: "/seccion-asus/" },
//                   { name: "ACER", link: "/seccion-acer" },
//                   { name: "HP", link: "/seccion-hp/" },
//                   { name: "LENOVO", link: "/seccion-lenovo/" },
//                 ],
//               },
//             ],
//           },
//           {
//             id: "link2",
//             name: "Componentes",
//             submenu: true,
//             subdatos: [
//               {
//                 Head: "",
//                 sublinks: [
//                   { name: "Procesadores", link: "/seccion-procesadores/" },
//                   {
//                     name: "Tarjetas Graficas",
//                     link: "/seccion-tarjetas-graficas/",
//                   },
//                   { name: "Fuentes de Poder", link: "/seccion-fuentesP/" },
//                   {
//                     name: "Refrigeracion Liquida",
//                     link: "/seccion-refrigeracion-liquida/",
//                   },
//                 ],
//               },
//             ],
//           },
//           {
//             id: "link3",
//             name: "Zona Gamer",
//             submenu: true,
//             subdatos: [
//               {
//                 Head: "",
//                 sublinks: [
//                   { name: "Monitores", link: "/seccion-Monitores/" },
//                   { name: "Chasis", link: "/seccion-Chasis" },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ];
