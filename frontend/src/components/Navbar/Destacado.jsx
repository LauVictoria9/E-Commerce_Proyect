import { Link } from "react-router-dom";

function App() {
  const handleClick = () => {};

  return (
    <div>
      <div className="grid grid-cols-1 place-items-center">
        <Link
          to={"/ofertas"}
          className="flex space-x-3 mr-2 font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-100 rounded-sm ring-2 ring-purple-950 px-6 py-2 hover:text-black mx-8"
        >
          Ofertas %
        </Link>
      </div>
    </div>
  );
}

export default App;
