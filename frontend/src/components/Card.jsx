import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="relative  z-50 border w-48 md:w-64 flex-shrink-0 p-2 bg-white text-clr-two overflow-hidden  shadow-md group">
      {/* Card image */}
      <img
        src={item.linking}
        alt={item.title}
        className="group-hover:scale-110 transition-transform duration-200 ease-in-out"
      />

      {/* Card content */}
      <div className="flex flex-col text-center relative z-40">
        <p className="font-medium">{item.name}</p>
        <p className="text-sm">{item.category}</p>

        <div className="h-2" />

        <p className="font-bold text-lg">{item.price}</p>

        <div className="h-8" />

        <Link
          to="#"
          className="bg-gradient-to-br from-clr-two to-clr-three text-white mx-auto px-2 py-1 rounded-md "
        >
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default Card;
