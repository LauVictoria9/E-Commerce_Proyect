// import react from "react";
// import Slider from "react-slick";

import chasis from "../img/pc.jpg";
import ch2 from "../img/pc2.jpg";
import refri from "../img/rl.jpg";
import refri1 from "../img/rl1.jpg";
import moni from "../img/moni.jpg";
import moni1 from "../img/moni1.jpg";
import fp from "../img/fuente.jpg";
import fp1 from "../img/fuente1.jpg";

import t1 from "../img/t1.jpg";
import t2 from "../img/t2.jpg";
import t3 from "../img/t3.jpg";
import t4 from "../img/t4.jpg";
import t5 from "../img/t5.jpg";
import t6 from "../img/t6.jpg";
import t7 from "../img/t7.jpg";
import t8 from "../img/t8.jpg";

import i5 from "../img/i5.jpg";
import i72 from "../img/i52.jpg";
import i7 from "../img/i7.jpg";
import i9 from "../img/i9.jpg";
import amd from "../img/amd.jpg";
import amd1 from "../img/amd1.jpg";
import amd2 from "../img/amd2.jpg";
import amd3 from "../img/amd3.jpg";

export const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialslide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        inicialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const itemData = [
  {
    id: 1,
    name: "Asus",
    category: "Monitor Gamer LG 45 UltraGear OLED WQHD",
    price: "$8.399.000",
    linking: moni,
  },
  {
    id: 2,
    name: "Asus",
    category: "Coolermaster masterbox TD500 CRYSTAL",
    price: "$580.000",
    linking: ch2,
  },
  {
    id: 3,
    name: "Asus",
    category: " Refrigeración líquida H100 240 RGB - CORSAIR",
    price: "$580.000",
    linking: refri,
  },
  {
    id: 4,
    name: "Asus",
    category: "Fuente de poder EVGA 600W 80+ White K1",
    price: "$200.000",
    linking: fp,
  },
  {
    id: 5,
    name: "Asus",
    category: "Samsung Odyssey G3 24'' 165 ghz",
    price: "$1.218.200",
    linking: moni1,
  },
  {
    id: 6,
    name: "Asus",
    category: "Chasis Gamer Cougar Dark Blader ",
    price: "$1.019.900",
    linking: chasis,
  },
  {
    id: 7,
    name: "Asus",
    category: "Refigeración líquida Thermaltake TH240 ARGB",
    price: "$3.418.200",
    linking: refri1,
  },
  {
    id: 8,
    name: "Asus",
    category: "Fuente Asus ROG THOR 1200W 80 PLUS",
    price: "$1.890.000",
    linking: fp1,
  },
];
export const itemData2 = [
  {
    id: 1,
    name: "Asus",
    category: " Asus Dual Radeon RX 7600 OC 8GB",
    price: "$1.500.000",
    linking: t8,
  },
  {
    id: 2,
    name: "Asus",
    category: "Asus Dual GeForce RTX 3060 Ti GDDR6 OC 8GB",
    price: "$1.699.000",
    linking: t1,
  },
  {
    id: 3,
    name: "Asus",
    category: "MSI Radeon RX 7600 MECH 2X C GDDR6 8GB",

    price: "$1.480.000",
    linking: t2,
  },
  {
    id: 4,
    name: "Asus",
    category: "RTX 3050 8GB VERTO DUAL FAN",
    price: "$1.590.000",
    linking: t3,
  },
  {
    id: 5,
    name: "Asus",
    category: " Gigabyte GeForce GTX 1650 GDDR6 OC 4GB",
    price: "$775.000",
    linking: t5,
  },
  {
    id: 6,
    name: "Asus",
    category: "MSI GeForce GTX 1070TI 8GB GDDR5",
    price: "$2.660.000",
    linking: t6,
  },
  {
    id: 7,
    name: "Asus",
    category: "ZOTAC GAMING GeForce GTX 1660 SUPER AMP",
    price: "$2.890.000",
    linking: t7,
  },
  {
    id: 8,
    name: "Asus",
    category: "ASROCK Radeon RX 560 Phantom 4GB",
    price: "$800.000",
    linking: t4,
  },
];
export const itemData3 = [
  {
    id: 1,
    name: "Asus",
    category: "Procesador Intel Core i5 12400f",
    price: "$764.000",
    linking: i5,
  },
  {
    id: 2,
    name: "Asus",
    category: "Procesador AMD Ryzen 5 3600 4.2 GHz",
    price: "$528.000",
    linking: amd2,
  },
  {
    id: 3,
    name: "Asus",
    category: "Procesador Intel Core i7-11700F",
    price: "$1.495.000",
    linking: i7,
  },
  {
    id: 4,
    name: "Asus",
    category: "Procesador AMD Ryzen 7 2700x",
    price: "$1.418.000",
    linking: amd,
  },
  {
    id: 5,
    name: "Asus",
    category: "Procesador Intel Core i7 9700 3.0 GHz",
    price: "$1.699.000",
    linking: i72,
  },
  {
    id: 6,
    name: "Asus",
    category: "Procesador AMD Ryzen 5 2600 3.9 GHz",
    price: "$899.000",
    linking: amd1,
  },
  {
    id: 7,
    name: "Asus",
    category: "Procesador Intel Core i9-13900K 5.8GHz",
    price: "$3.890.000",
    linking: i9,
  },
  {
    id: 8,
    name: "Asus",
    category: "Procesador AMD Ryzen 7 5800X 3.8GHz",
    price: "$2.609.900",
    linking: amd3,
  },
];
