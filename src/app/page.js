import Image from "next/image";
import Cabecalho from "./components/Header";
import Banner from "./components/Banner";
import "./globals.css"
import Noticias from "./components/Noticias";
import Banner2 from "./components/Banner2";
import Quem from "./components/Quem";
export default function Home() {
  return (
    <main>
      <Cabecalho></Cabecalho>
      <Banner></Banner>
      <Noticias></Noticias>
      <Banner2></Banner2>
      <Quem></Quem>
    </main>
  );
}
