import Image from "next/image";
import Cabecalho from "./components/Header";
import Banner from "./components/Banner";
import "./globals.css"
import Noticias from "./components/Noticias";
export default function Home() {
  return (
    <main>
      <Cabecalho></Cabecalho>
      <Banner></Banner>
      <Noticias></Noticias>
    </main>
  );
}
