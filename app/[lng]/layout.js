import { dir } from "i18next";
import { Montserrat } from 'next/font/google';
import { languages } from "../i18n/settings";

const mont = Montserrat({ subsets: ['latin'] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const RootLayout = ({ children, params: { lng } }) => {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body className={mont.className}>{children}</body>
    </html>
  );
};

export default RootLayout;