import React from "react";
import { useTranslation } from "../../../i18n";
import { agba, titan } from "../../font/font";
import Image from "next/image";
interface SubHeroOneProps {
	lng:string;
}
const SubHeroOne: React.FC<SubHeroOneProps> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "sub-hero-one");

  return (
    <div className="relative flex justify-center over">
      <div className="grid text-center text-white max-w-2xl">
        <h2 className={`${titan.className} md:text-4xl text-2xl`}>
          {t("titulo")}
        </h2>
        <h4 className={`${agba.className} md:text-2xl text-base`}>
          {t("subtitulo")}
        </h4>
        <p className="md:text-base py-6 text-xs px-3 ">
          {t("texto")} <strong>{t("certificado")}</strong> y{" "}
          <strong>{t("diplomatura")}</strong>, {t("cumpliendo")} <br />{" "}
          {t("requisitos")}.
        </p>
      </div>
      <div>
        <Image
          src={"./subHeroOneIcon.svg"}
          alt="Icon"
          width={203.51}
          height={183.31}
          className="hidden absolute md:w-[203px] md:h-[183px] md:bottom-1 md:block"
        />
        <Image
          src={"./subHeroOneIconMobile.svg"}
          alt="Icon"
          width={203.51}
          height={183.31}
          className="absolute w-[59px] h-[57px] top-36 right-2 md:hidden"
        />
      </div>
    </div>
  );
};

export default SubHeroOne;
