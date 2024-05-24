import Link from "next/link";
import { useTranslation } from "../../i18n";
import { Footer } from "../components/Footer";

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "second-page");

  const page = "second-page";

  return (
    <>
      <h1 className="bg-green-500">{t("title")}</h1>
      <Link href={`/${lng}`}>{t("back-to-home")}</Link>
      <Footer lng={lng} page={page} />
    </>
  );
}
