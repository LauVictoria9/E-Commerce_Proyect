import { AiOutlinePercentage } from "react-icons/ai";

function App() {
  return (
    <div>
      <div className="grid grid-cols-1 place-items-center">
        <button
          type="submit"
          className="flex space-x-3 mr-2 font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-100 rounded-sm ring-2 ring-purple-950 px-6 py-2 hover:text-black mx-8"
        >
          <p>Ofertas</p>
          <AiOutlinePercentage size="1.5rem" />
        </button>
      </div>
    </div>
  );
}

export default App;
