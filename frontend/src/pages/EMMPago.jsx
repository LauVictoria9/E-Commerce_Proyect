// EMUsuarios.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EMMPago = () => {
  const [metodoPago, setMetodoPago] = useState([]);

  useEffect(() => {
    const obtenerMetodoPago = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/metodo-pago/"
        );
        setMetodoPago(response.data);
      } catch (error) {
        console.error("Error al obtener el metodo de pago:", error);
      }
    };
    obtenerMetodoPago();
  }, []);

  const handleEliminarMetodoPago = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/metodo-pago/${id}/`);
      setMetodoPago((metodoPago) =>
        metodoPago.filter((metodoPago) => metodoPago.id !== id)
      );
    } catch (error) {
      console.error("Error al eliminar el metodo de pago:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mt-4 ml-4">
        <Link to="/registro4">
          <button className="bg-clr-three text-white p-1 rounded-md mr-2 ">
            Agregar +
          </button>
        </Link>

        <table className="border-collapse border border-clr-two mt-4 mb-6 ">
          <thead>
            <tr>
              <th className="text-start mb-4">Nombre</th>
              <th className="text-start">Descripcion</th>
              <th className="text-start">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {metodoPago.map((metodoPago) => (
              <tr key={metodoPago.id}>
                <td>{metodoPago.nombre}</td>
                <td>{metodoPago.descripcion}</td>
                <td>
                  <button
                    onClick={() => handleEliminarMetodoPago(metodoPago.id)}
                    className="bg-clr-three text-white p-1 rounded-md mr-2 mb-4"
                  >
                    Eliminar
                  </button>
                  <Link to={`/modificar3/${metodoPago.id}`}>
                    <button className="bg-clr-three text-white p-1 rounded-md mr-2">
                      Modificar
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EMMPago;
