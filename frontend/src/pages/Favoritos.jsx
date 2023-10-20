import { FaRegHeart, FaPlus } from "react-icons/fa6";

const favorites = [
  {
    name: "Asus",
    price: 230000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed natus quam adipisci maiores dolorem culpa vero! Quibusdam fugiat illum rem est reiciendis natus error possimus eveniet beataeoluptatibus.",
  },
  {
    name: "Asus",
    price: 230000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed natus quam adipisci maiores dolorem culpa vero! Quibusdam fugiat illum rem est reiciendis natus error possimus eveniet beataeoluptatibus.",
  },
  {
    name: "Asus",
    price: 230000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed natus quam adipisci maiores dolorem culpa vero! Quibusdam fugiat illum rem est reiciendis natus error possimus eveniet beataeoluptatibus.",
  },
  {
    name: "Asus",
    price: 230000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed natus quam adipisci maiores dolorem culpa vero! Quibusdam fugiat illum rem est reiciendis natus error possimus eveniet beataeoluptatibus.",
  },
  {
    name: "Asus",
    price: 230000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed natus quam adipisci maiores dolorem culpa vero! Quibusdam fugiat illum rem est reiciendis natus error possimus eveniet beataeoluptatibus.",
  },
];

export default function Favoritos() {
  const handleAddToFavorites = () => {
    console.log("oooo");
  };

  return (
    <main>
      <section className="py-16 px-8">
        <div className="border max-w-xl mx-auto text-center p-4 flex flex-col rounded-md">
          <p className="text-violet-700 text-2xl font-medium">
            No tienes ningun articulo
          </p>

          <div className="h-8" />

          <div className="flex gap-8">
            <FaRegHeart className="text-7xl text-violet-700 flex-shrink-0" />

            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              natus quam adipisci maiores dolorem culpa vero! Quibusdam fugiat
              illum rem est reiciendis natus error possimus eveniet beatae
              voluptatibus.
            </p>
          </div>

          <div className="h-8" />

          <button
            onClick={handleAddToFavorites}
            className="ml-auto bg-violet-700 text-white px-2 py-1 rounded-md flex items-center gap-1 font-medium"
          >
            Añadir a favoritos <FaPlus />
          </button>
        </div>
      </section>

      <div className="h-16" />

      <section className="px-8">
        <div className="max-w-xl mx-auto flex flex-col">
          <h2 className="text-2xl">Tus favoritos</h2>

          <div className="h-8" />

          <div className="flex flex-col gap-y-4">
            {favorites.map((item, index) => (
              <div className="border relative flex justify-between items-center rounded-md">
                <div className="absolute top-0 left-0 h-2 rounded-full w-full bg-gradient-to-l from-violet-700 to-pink-700" />

                <div className="w-96 h-64"></div>

                <div className="col-span-4">
                  <h3 className="text-violet-700 text-lg font-medium">
                    {item.name}
                  </h3>

                  <div className="h-4" />

                  <p className="text-sm">{item.description}</p>
                </div>

                <div className="px-4 flex gap-2 shrink-0">
                  <p className="text-violet-700 font-medium text-lg">
                    $ {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
