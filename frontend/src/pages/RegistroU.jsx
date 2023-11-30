import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const RegistroU = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/usuarios/",
        user
      );

      if (response) {
        return navigate("/");
      }

      console.log("Usuario registrado:", response.data);
    } catch (error) {
      console.error("Error al registrar usuario:", error.response.data);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-evenly gap-y-10 md:gap-x-12 items-center">
      <div className="bg-clr-one text-[#8D8A8A] w-full md:w-[40vw] h-full md:h-[80vh] pt-4 pb-8 px-6 md:pt-8 mt-4 mb-4">
        <div className="flex items-center justify-center h-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-[30vw] h-full md:h-[70vh] bg-white items-center"
          >
            <h1 className="text-clr-two font-bold text-3xl text-center pt-6">
              ¡Regístrate!
            </h1>{" "}
            <br />
            <label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                onChange={handleInput}
                placeholder="Nombre"
                className="bg-[#DCDCDC] p-2 focus:outline-none mb-4"
              />
            </label>
            <label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                onChange={handleInput}
                placeholder="Apellido"
                className="bg-[#DCDCDC] p-2 focus:outline-none mb-4"
              />
            </label>
            <label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={handleInput}
                placeholder="Nombre de usuario"
                className="bg-[#DCDCDC] p-2 focus:outline-none mb-4"
              />
            </label>
            <label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={handleInput}
                placeholder="Correo electrónico"
                className="bg-[#DCDCDC] p-2 focus:outline-none mb-4"
              />
            </label>
            <label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleInput}
                placeholder="Contraseña"
                className="bg-[#DCDCDC] p-2 focus:outline-none mb-6"
              />
            </label>
            <div className="flex">
              <button
                type="submit"
                className="bg-clr-three text-white p-1 rounded-md mr-2"
              >
                Registrar
              </button>
              <Link to="/registro5">
                <button className="bg-clr-three text-white p-1 rounded-md mr-2">
                  Cancelar
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistroU;
