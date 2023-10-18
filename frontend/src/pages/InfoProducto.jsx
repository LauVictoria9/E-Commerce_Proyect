import InfoProduct from "../components/InfoProduct";
// Imagen temporal
import img from "../img/laptop.png";

export default function InfoProducto() {
  return (
    <InfoProduct
      img={img}
      name="ASUS Zenbook Pro 14 Duo OLED"
      precio="$5.400.000"
      descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quidem? Sint delectus officia, placeat maiores assumenda eaque quia labore! Tempora deleniti aspernatur iusto sequi nam, at unde quibusdam sed incidunt."
      disponible={2}
      caracteristicas="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quidem? Sint delectus officia, placeat maiores assumenda eaque quia labore! Tempora deleniti aspernatur iusto sequi nam, at unde quibusdam sed incidunt."
    />
  );
}
