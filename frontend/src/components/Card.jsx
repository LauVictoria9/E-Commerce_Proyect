import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="relative  z-50 border w-48 md:w-64 flex-shrink-0 p-2 bg-white text-clr-two overflow-hidden  shadow-md group">
      {/* Card image */}
      <img
        src={item.imagen}
        alt={item.nombre}
        className="group-hover:scale-110 transition-transform duration-200 ease-in-out object-contain h-48 w-full"
      />

      {/* Card content */}
      <div className="flex flex-col text-center relative z-40">
        <p className="font-medium">{item.nombre}</p>
        <p className="text-sm">{item.marca}</p>

        <div className="h-2" />

        {item.oferta ? (
          <>
            <p className="font-bold text-lg text-[#9b71b2] line-through">
              ${item.precio}
            </p>
            <p className="font-bold text-lg">${item.oferta}</p>
          </>
        ) : (
          <p className="font-bold text-lg">${item.precio.toLocaleString()}</p>
        )}

        <div className="h-8" />

        <Link
          to={`/producto/${item.id}`}
          className="bg-gradient-to-br from-clr-two to-clr-three text-white mx-auto px-2 py-1 rounded-md "
        >
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default Card;
