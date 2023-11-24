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
import SeccionProcesadores from "./pages/SeccionProcesadores";
import SeccionTarjetasG from "./pages/SeccionTarjetasG";
import InfoProducto from "./pages/InfoProducto";
import SeccionFP from "./pages/SeccionFP";
import SeccionRL from "./pages/SeccionRL";
import ProductosEnsayo from "./pages/ProductosEnsayo";
import SeccionChasis from "./pages/SeccionChasis";
import SeccionMonitores from "./pages/SeccionMonitores";
import SeccionConvertibleAsus from "./pages/SeccionConvertibleAsus";
import SeccionConvertibleHP from "./pages/SeccionConvertibleHP";
import SeccionAsusCopy from "./pages/SeccionAsus copy";

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
        path: "producto/:id",
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
        path: "seccion-acer/",
        element: <SeccionAcer />,
      },
      {
        path: "seccion-procesadores/",
        element: <SeccionProcesadores />,
      },
      {
        path: "seccion-tarjetas-graficas/",
        element: <SeccionTarjetasG />,
      },
      {
        path: "Seccion-lenovo/",
        element: <SeccionLenovo />,
      },
      {
        path: "Seccion-hp/",
        element: <SeccionHP />,
      },
      {
        path: "Seccion-fuentesP/",
        element: <SeccionFP />,
      },
      {
        path: "Seccion-refrigeracion-liquida/",
        element: <SeccionRL />,
      },
      {
        path: "Seccion-Monitores/",
        element: <SeccionMonitores />,
      },
      {
        path: "Seccion-Chasis/",
        element: <SeccionChasis />,
      },
      {
        path: "Seccion-Convertible-Asus/",
        element: <SeccionAsusCopy />,
      },
      {
        path: "Seccion-Convertible-HP/",
        element: <SeccionConvertibleHP />,
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
