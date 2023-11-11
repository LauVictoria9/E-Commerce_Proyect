import Header from "./Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-[100vh] flex-col ">
      <Header />
      <main className="min-h-[80vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
