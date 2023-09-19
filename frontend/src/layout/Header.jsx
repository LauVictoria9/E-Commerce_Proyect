import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="h-[10vh] bg-green-900">
      <nav className="w-[85%] h-full m-auto flex justify-evenly items-center">
        <Link to={"favoritos/"}>Favoritos</Link>
        <Link to={"carrito/"}>Carrito</Link>
        <Link to={"User/"}>Usuario</Link>
      </nav>
    </header>
  );
}
