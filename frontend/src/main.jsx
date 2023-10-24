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
<<<<<<< HEAD
import SeccionAcer from "./pages/SeccionAcer";
=======
import SeccionComponentes from "./pages/SeccionComponentes";
import SeccionTarjetasG from "./pages/SeccionTarjetasG";
import InfoProducto from "./pages/InfoProducto";

>>>>>>> 47b9ff1930d10c74e9f5c4b6aaffe58273c4b87c

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
        path: "SeccionAsus/",
        element: <SeccionAsus />,
      },
      {
<<<<<<< HEAD
        path: "SeccionAcer/",
        element: <SeccionAcer />,
=======
        path: "SeccionComponentes/",
        element: <SeccionComponentes />,
      },
      {
        path: "SeccionTarjetasG/",
        element: <SeccionTarjetasG />,
>>>>>>> 47b9ff1930d10c74e9f5c4b6aaffe58273c4b87c
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
