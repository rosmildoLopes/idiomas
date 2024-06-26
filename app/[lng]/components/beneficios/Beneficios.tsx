"use client";
import { useTranslation } from "../../../i18n/client";
import Image from "next/image";
import React from "react";
import { agba, titan } from "../../font/font";

interface BeneficiosProps {
  lng: string;
}

const Beneficios: React.FC<BeneficiosProps> = ({ lng }) => {
  const { t } = useTranslation(lng, "beneficios");

  return (
    <div className="relative">
      <div className="">
        <Image
          src="/box.svg"
          alt=""
          width={140}
          height={140}
          className="absolute w-[60px] h-[60px] left-10 md:w-[140px] md:h-[140px] md:left-60 md:bottom-24 z-10"
        />
      </div>
      <div className="w-72 ml-12 text-center md:w-full">
        <h2
          className={`${titan.className} font-bold text-2xl md:text-4xl text-white`}
        >
          {t("title")}{" "}
          <span
            className={`${agba.className} text-firstBlue text-2xl md:text-4xl`}
          >
            {t("academia")}
          </span>
        </h2>
      </div>
      <div className="logos bg-secondBlue md:p-16 mt-6 overflow-hidden p-3 flex flex-row justify-center items-center lg:h-28">
        <div className="logos-slide flex flex-row">
          <div className="flex flex-row items-center mr-40">
            <Image
              src="/comisionesReducidasIcon.svg"
              alt=""
              width={75}
              height={75}
              priority
              className="w-[50px] h-[50px] md:w-[75px] md:h-[75px]"
            />
            <p className="pl-2 md:text-3xl text-lg text-white font-bold">
              {t("comisiones")} <br />
              {t("sub-comisiones")}
            </p>
          </div>
          <div className="flex flex-row items-center mr-40">
            <Image
              src="/bolsaDeTrabajoIcon.svg"
              alt=""
              width={75}
              height={75}
              priority
              className="w-[50px] h-[50px] md:w-[75px] md:h-[75px]"
            />
            <p className="pl-2 md:text-3xl text-lg text-white font-bold">
              {t("bolsas-de-trabajo")}
              <br />
              {t("sub-bolsas-de-trabajo")}
            </p>
          </div>
          <div className="flex flex-row items-center mr-40">
            <Image
              src="/certificacionOficialIcon.svg"
              alt=""
              width={75}
              height={75}
              priority
              className="w-[50px] h-[50px] md:w-[75px] md:h-[75px]"
            />
            <p className="pl-2 md:text-3xl text-lg text-white font-bold">
              {t("certificacion")}
              <br />
              {t("sub-certificacion")}
            </p>
          </div>
          <div className="flex flex-row items-center mr-40">
            <Image
              src="/comunidadNumenIcon.svg"
              alt=""
              width={75}
              height={75}
              priority
              className="w-[50px] h-[50px] md:w-[75px] md:h-[75px]"
            />
            <p className="pl-2 md:text-3xl text-lg text-white font-bold">
            {t("comunidad")}
              <span className={`${agba.className} text-firstBlue`}> {t("sub-comunidad")}</span>
            </p>
          </div>
        </div>
        <div className="logos-slide flex flex-row ">
          <div className="flex flex-row items-center mr-40">
            <Image
              src="/comisionesReducidasIcon.svg"
              alt=""
              width={75}
              height={75}
              priority
              className="w-[50px] h-[50px] md:w-[75px] md:h-[75px]"
            />
            <p className="pl-2 md:text-3xl text-lg text-white font-bold">
              {t("comisiones")} <br />
              {t("sub-comisiones")}
            </p>
          </div>
          <div className="flex flex-row items-center mr-40">
            <Image
              src="/bolsaDeTrabajoIcon.svg"
              alt=""
              width={75}
              height={75}
              priority
              className="w-[50px] h-[50px] md:w-[75px] md:h-[75px]"
            />
            <p className="pl-2 md:text-3xl text-lg text-white font-bold">
              {t("bolsas-de-trabajo")}
              <br />
              {t("sub-bolsas-de-trabajo")}
            </p>
          </div>
          <div className="flex flex-row items-center mr-40">
            <Image
              src="/certificacionOficialIcon.svg"
              alt=""
              width={75}
              height={75}
              priority
              className="w-[50px] h-[50px] md:w-[75px] md:h-[75px]"
            />
            <p className="pl-2 md:text-3xl text-lg text-white font-bold">
              {t("certificacion")}
              <br />
              {t("sub-certificacion")}
            </p>
          </div>
          <div className="flex flex-row items-center mr-40">
            <Image
              src="/comunidadNumenIcon.svg"
              alt=""
              width={75}
              height={75}
              priority
              className="w-[50px] h-[50px] md:w-[75px] md:h-[75px]"
            />
            <p className="pl-2 md:text-3xl text-lg text-white font-bold">
              {t("comunidad")} <br />{" "}
              <span className={`${agba.className} text-firstBlue`}>
                {t("sub-comunidad")}
              </span>
            </p>
          </div>
        </div>
        <div className="logos-slide flex flex-row">
          <div className="flex flex-row items-center mr-40">
            <Image
              src="comisionesReducidasIcon.svg"
              alt="icon de comisiones reducidas"
              width={75}
              height={75}
              priority
              className="w-[50px] h-[50px] md:w-[75px] md:h-[75px]"
            />
            <p className="pl-2 md:text-3xl text-lg text-white font-bold">
              {t("comisiones")} <br />
              {t("sub-comisiones")}
            </p>
          </div>
          <div className="flex flex-row items-center mr-40">
            <Image
              src="/bolsaDeTrabajoIcon.svg"
              alt=""
              width={75}
              height={75}
              priority
              className="w-[50px] h-[50px] md:w-[75px] md:h-[75px]"
            />
            <p className="pl-2 md:text-3xl text-lg text-white font-bold">
              {t("bolsas-de-trabajo")}
              <br />
              {t("sub-bolsas-de-trabajo")}
            </p>
          </div>
          <div className="flex flex-row items-center mr-40">
            <Image
              src="/certificacionOficialIcon.svg"
              alt=""
              width={75}
              height={75}
              priority
              className="w-[50px] h-[50px] md:w-[75px] md:h-[75px]"
            />
            <p className="pl-2 md:text-3xl text-lg text-white font-bold">
              {t("certificacion")}
              <br />
              {t("sub-certificacion")}
            </p>
          </div>
          <div className="flex flex-row items-center mr-40">
            <Image
              src="/comunidadNumenIcon.svg"
              alt=""
              width={75}
              height={75}
              priority
              className="w-[50px] h-[50px] md:w-[75px] md:h-[75px]"
            />
            <p className="pl-2 md:text-3xl text-lg text-white font-bold">
              {t("comunidad")} <br />{" "}
              <span className={`${agba.className} text-firstBlue`}>
                {t("sub-comunidad")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beneficios;
