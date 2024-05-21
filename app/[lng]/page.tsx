import Image from "next/image";
import { useTranslation } from "../i18n" 
import Beneficios from "./components/beneficios/Beneficios";
import { Footer } from "./components/Footer";
import Link from "next/link";

interface HomeProps {
  params: {
    lng: string;
  };
}

export default async function Page({ params }: HomeProps) {
  const { lng } = params;
  const { t } = await useTranslation(lng, "translate");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-green-900">
      <h1>{t('title')}</h1>
      <Link href={`/${lng}/second-page`}>
        {t('to-second-page')}
      </Link>
      <br />
      <Link href={`/${lng}/client-page`}>
        {t('to-client-page')}
      </Link>
      <Beneficios lng={lng} />
      <Footer lng={lng} />
    </main>
  );
}
