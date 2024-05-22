import { useTranslation } from "../../../i18n";
import { FooterBase } from "./FooterBase.js";

export const Footer = async ({ lng, page }) => {
  const { t } = await useTranslation(lng, "footer");
  return <FooterBase t={t} lng={lng} page={page} />;
};
