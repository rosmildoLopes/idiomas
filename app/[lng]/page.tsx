import Image from "next/image";
import { useTranslation } from "../i18n" 
import Beneficios from "./components/beneficios/Beneficios";
import { Footer } from "./components/Footer";
import Link from "next/link";
import Certificacion from "./components/certificacion/Certificacion";
import Navbar from "./components/navbar/Navbar";

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
      <Navbar lng={lng} />
      <Beneficios lng={lng} />
      <Certificacion lng={lng} />
      <Footer lng={lng} />
    </main>
  );
}
