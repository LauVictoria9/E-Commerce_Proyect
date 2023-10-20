/* Images imports */
import heroBackgroundImage from "../img/InicioD.jpg";
import heroImage from "../img/Elementos.png";
import comboOneImage from "../img/Componentes.jpg";
import comboTwoImage from "../img/Tarjetas.jpg";
import comboThreeImage from "../img/Procesadores.jpg";

/* Components imports */
import Slider from "../components/Slider";

/* Item data temp */
import { itemData, itemData2, itemData3 } from "./data";

export default function Outlet() {
  // const [itemDataOne, setItemDataOne] = useState(null);
  // const [itemDataTwo, setItemDataTwo] = useState(null);
  // const [itemDataThree, setItemDataThree] = useState(null);

  // const getData = async () => {
  //   try {
  //     const request = await fetch("http://localhost:6000/api/products");
  //     const data = request.json();

  //     data.map((item) => {
  //       if (item.category == "component") {
  //         setItemDataOne((previous) => setItemDataOne([...previous, item]));
  //       }
  //       if (item.category == "video_card") {
  //         setItemDataTwo((previous) => setItemDataTwo([...previous, item]));
  //       }
  //       if (item.category == "cpu") {
  //         setItemDataThree((previous) => setItemDataThree([...previous, item]));
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <main className="pt-8 pb-16">
      {/* Hero */}
      <section className="relative flex justify-center items-center">
        <img src={heroBackgroundImage} alt="Hero background image." />

        <img src={heroImage} alt="" className="absolute max-w-auto w-1/2" />
      </section>

      {/* Separator */}
      <div className="h-8" />

      {/* Content */}
      <section className="">
        <div className="flex">
          {/* Combo image */}
          <img
            src={comboOneImage}
            alt="Components combo image."
            className="w-1/3 hidden md:inline-block"
          />

          {/* Slider */}
          <div className="w-full md:w-2/3 items-center relative flex">
            <div className="bg-gradient-to-br from-clr-two absolute -z-10 to-clr-three w-full h-4/5" />

            <Slider sliderId="promo_one" data={itemData} />
          </div>
        </div>

        <div className="h-16" />

        <div className="flex">
          {/* Slider */}
          <div className="w-full md:w-2/3 items-center relative flex">
            <div className="bg-gradient-to-br from-clr-two absolute -z-10 to-clr-three w-full h-4/5" />

            <Slider sliderId="promo_two" data={itemData2} />
          </div>

          {/* Combo image */}
          <img
            src={comboTwoImage}
            alt="Components combo image."
            className="w-1/3 hidden md:inline-block"
          />
        </div>

        <div className="h-16" />

        <div className="flex">
          {/* Combo image */}
          <img
            src={comboThreeImage}
            alt="Components combo image."
            className="w-1/3 hidden md:inline-block"
          />

          {/* Slider */}
          <div className="w-full md:w-2/3 items-center relative flex">
            <div className="bg-gradient-to-br from-clr-two absolute -z-10 to-clr-three w-full h-4/5" />

            <Slider sliderId="promo_three" data={itemData3} />
          </div>
        </div>
      </section>
    </main>
  );
}
