import Image from "next/image";
import { useTranslation } from "../i18n" 
import Beneficios from "./components/beneficios/Beneficios";
import { Footer } from "./components/Footer";
import Link from "next/link";
import Certificacion from "./components/certificacion/Certificacion";
import Navbar from "./components/navbar/Navbar";
import HeroOne from "./components/heroOne/HeroOne";
import SubHeroOne from "./components/subHeroOne/SubHeroOne";
import ModalidadCursada from "./components/modalidadCursada/ModalidadCursada";
import Comunidad from "./components/comunidad/Comunidad";

interface HomeProps {
  params: {
    lng: string;
  };
}

export default async function Page({ params }: HomeProps) {
  const { lng } = params;
  const { t } = await useTranslation(lng, "translate");

  return (
    <main className="flex  flex-col items-center justify-between overflow-x-hidden">
      {/* <Navbar lng={lng} /> */}
      <HeroOne lng={lng} />
      <SubHeroOne lng={lng} />
      <Beneficios lng={lng} />
      <ModalidadCursada lng={lng} />
      <Certificacion lng={lng} />
      <Comunidad lng={lng} />
      <Footer lng={lng} />
    </main>
  );
}
