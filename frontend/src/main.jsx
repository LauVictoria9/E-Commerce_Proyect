import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Index from "./layout";
import Inicio from "./pages/Inicio";
import Favoritos from "./pages/Favoritos";
import Carrito from "./pages/Carrito";
import User from "./pages/User";
import "./index.css";
import SeccionAsus from "./pages/SeccionAsus";
import SeccionAcer from "./pages/SeccionAcer";
import SeccionLenovo from "./pages/SeccionLenovo";
import SeccionHP from "./pages/SeccionHP";
import SeccionComponentes from "./pages/SeccionComponentes";
import SeccionTarjetasG from "./pages/SeccionTarjetasG";
import InfoProducto from "./pages/InfoProducto";
import SeccionFP from "./pages/SeccionFP";
import SeccionRL from "./pages/SeccionRL";
import ProductosEnsayo from "./pages/ProductosEnsayo";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Inicio />,
      },
      {
        path: "producto/",
        element: <InfoProducto />,
      },
      {
        path: "favoritos/",
        element: <Favoritos />,
      },
      {
        path: "carrito/",
        element: <Carrito />,
      },
      {
        path: "user/",
        element: <User />,
      },
      {
        path: "seccion-asus/",
        element: <SeccionAsus />,
      },
      {
        path: "SeccionFP/",
        element: <SeccionFP />,
      },
      {
        path: "SeccionRL/",
        element: <SeccionRL />,
      },
      {
        path: "seccion-acer/",
        element: <SeccionAcer />,
      },
      {
        path: "seccion-componentes/",
        element: <SeccionComponentes />,
      },
      {
        path: "seccion-tarjetas-graficas/",
        element: <SeccionTarjetasG />,
      },
      {
        path: "SeccionLenovo/",
        element: <SeccionLenovo />,
      },
      {
        path: "SeccionHP/",
        element: <SeccionHP />,
      },
      {
        path: "productos/",
        element: <ProductosEnsayo />,

      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
