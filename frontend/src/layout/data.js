import react from "react";
import i5 from "../img/i5.jpg";
import I5 from "../img/i52.jpg";

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
    price: "$29.000",
    category: "Blablabla",
    linking: i5,
  },
  {
    id: 2,
    name: "Asus",
    price: "$29.000",
    category: "Blablabla",
    linking: i5,
  },
  {
    id: 3,
    name: "Asus",
    price: "$29.000",
    category: "Blablabla",
    linking: i5,
  },
  {
    id: 4,
    name: "Asus",
    price: "$29.000",
    category: "Blablabla",
    linking: i5,
  },
  {
    id: 5,
    name: "Asus",
    price: "$29.000",
    category: "Blablabla",
    linking: i5,
  },
  {
    id: 6,
    name: "Asus",
    price: "$29.000",
    category: "Blablabla",
    linking: i5,
  },
];
