import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <section className="bg-orange-500 p-12 rounded-md  flex flex-col justify-center items-center gap-y-5">
        <h1>Ooops!</h1>
        <p>Lo siento, algo salio mal</p>
        <p className="">{error.statusText || error.message}</p>
      </section>
    </div>
  );
}
