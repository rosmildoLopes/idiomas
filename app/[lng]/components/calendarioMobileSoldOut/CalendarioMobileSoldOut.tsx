"use client";
import React, { useState, useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { PiBackpackBold } from "react-icons/pi";
import { BiMoviePlay } from "react-icons/bi";
import { MdScreenSearchDesktop } from "react-icons/md";
import { TbCaretDown } from "react-icons/tb";
import { motion } from "framer-motion";
import { useTranslation } from "../../../i18n/client";

interface Evento {
  startDate: string;
  endDate: string;
  meetingDate: string;
  buttonText: string;
  additionalInfo?: string;
}

interface CalendarioProps {
  eventos: Evento[];
  eventosSoldOut: Evento[];
  lng: string;
}

const CalendarioMobile: React.FC<CalendarioProps> = ({
  eventos,
  eventosSoldOut,
  lng,
}) => {
  const { t } = useTranslation(lng, "calendario");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<string | null>(null);

  const openModal = (content: string) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setShowModal(false);
  };

  const [viewportRef, embla] = useEmblaCarousel({
    loop: false,
  });

  const boxVariants = {
    hidden: {
      opacity: 1,
      backgroundColor: "#FFFFFF",
    },
    visible: {
      opacity: 1,
      backgroundColor: "#9CA3AF",
    },
  };
  return (
    <div className="embla__viewport" ref={viewportRef}>
      <div className="embla__container flex w-10/12 mx-auto gap-4">
        {/* Renderizar eventos normales */}
        {eventos.map((evento, index) => (
          <div
            key={`normal-${index}`}
            className="embla__slide w-auto bg-white border rounded-3xl transition duration-500 p-6 px-8 "
          >
            {/* Contenido del slide */}
            <div className="embla__slide__number text-lg text-black">
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 justify-center items-center">
                  <BiMoviePlay className="text-2xl bg-firstBlue rounded-full h-12  w-12 p-1 flex items-center justify-center shadow-lg shadow-slate-12 00" />
                  <MdScreenSearchDesktop className="text-2xl bg-firstBlue rounded-full h-12 p-1 w-12  flex items-center justify-center shadow-lg shadow-slate-12 00" />
                  <PiBackpackBold className="text-2xl bg-firstBlue rounded-full h-12  w-12 p-1 flex items-center justify-center shadow-lg shadow-slate-900" />
                  <button
                    className="flex items-center font-black text-4xl"
                    onClick={() => openModal(evento.additionalInfo || "")}
                  >
                    <TbCaretDown />
                  </button>
                </div>
                <div className="border-black w-full flex flex-col items-start">
                  <p className="font-extrabold mb-2">{t("desde_el")} </p>
                  <p className="font-black text-4xl">{evento.startDate}</p>
                </div>
                <div className="border-black flex flex-row  items-center border-b-2 pb-4 gap-2">
                  <p className="text-start font-extrabold">{t("hasta_el")} </p>
                  <p className="text-start font-black text-lg">
                    {evento.endDate}
                  </p>
                </div>
                <div className="py-4  flex items-center justify-between ">
                  <p className="font-medium text-lg">{evento.meetingDate}</p>
                </div>
              </div>
            </div>
            {/* Fin del contenido del slide */}
          </div>
        ))}

        {/* Render eventos sold out */}
        {eventosSoldOut.map((evento, index) => (
          <motion.div
            key={`soldOut-${index}`}
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.5 }}
            className="embla__slide w-auto border rounded-3xl transition duration-500 p-6 px-8 relative"
          >
            <div className="embla__slide__number text-lg text-black ">
              <div className="flex flex-col gap-4 ">
                <div className="flex gap-2 justify-center items-center ">
                  <BiMoviePlay className="text-2xl bg-gray-600 rounded-full h-16 w-16 flex items-center justify-center shadow-lg shadow-slate-900" />
                  <MdScreenSearchDesktop className="text-2xl bg-gray-600 rounded-full h-16 w-16 flex items-center justify-center shadow-lg shadow-slate-900" />
                  <PiBackpackBold className="text-2xl bg-gray-600 rounded-full h-16 w-16 flex items-center justify-center shadow-lg shadow-slate-900" />
                  <button className="flex items-center">
                    <TbCaretDown />
                  </button>
                </div>
                <div className="border-black w-full flex flex-col items-start">
                  <p className="font-extrabold mb-2">Desde el </p>
                  <p className="font-black text-4xl">{evento.startDate}</p>
                </div>
                <div className="border-black flex flex-row  items-center border-b-2 pb-4 gap-2">
                  <p className="text-start font-extrabold">Hasta el </p>
                  <p className="text-start font-black text-lg">
                    {evento.endDate}
                  </p>
                </div>
                <div className="py-4  flex items-center justify-between ">
                  <p className="font-medium text-lg">{evento.meetingDate}</p>
                </div>
              </div>
            </div>
            {/* Imagen de "Sold Out" */}
            <div className="w-56 absolute top-2">
              <Image
                src="soldOut.svg"
                height={200}
                width={200}
                alt="cartel de Sold Out"
                className="w-96"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal para mostrar información adicional */}
      {showModal && (
        <div className="modal ">
          <div className="modal-content flex flex-col gap-11 justify-start items-center text-firstBackground bg-firstBlue  w-11/12 mx-auto h-[77%] rounded-2xl absolute z-50 -translate-y-3/4 translate-x-9">
            <span
              className="text-red-500 font-black absolute right-8 top-6 h text-xl"
              onClick={closeModal}
            >
              X
            </span>
            <div
              dangerouslySetInnerHTML={{
                __html: modalContent || "",
              }}
            />
            <div className="flex flex-col w-full items-center rounded-b-2xl transition-all duration-1000 p-4 mt-2">
              <div className="flex flex-col justify-center text-center gap-4">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-row">
                    <Image
                      src={"./contactoIconCalendar.svg"}
                      alt="Contacto"
                      height={60}
                      width={60}
                    />
                    <p>
                      {t("quiero")}
                      <strong>{t("contactarme")}</strong>
                      {t("asesor")}
                      {t("mas_info")}
                    </p>
                  </div>
                  <button className="text-white text-sm font-extrabold py-5">
                    {t("ver_mas")}
                  </button>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-row">
                    <Image
                      src={"./preinscripcionIconCalendar.svg"}
                      alt="Contacto"
                      height={60}
                      width={60}
                    />
                    <p>
                      {t("quiero_preinscribirme")}
                      <strong>{t("preinscribirme")}</strong> {t("pagar")}
                    </p>
                  </div>
                  <button className="text-white text-sm font-extrabold py-5">
                    {t("ver_mas")}
                  </button>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-row">
                    <Image
                      src={"./inscripcionIconCalendar.svg"}
                      alt="Contacto"
                      height={60}
                      width={60}
                    />
                    <p className="text-center">
                      {t("quiero_inscripcion")}
                      <strong> {t("inscribirme")}</strong>
                      {t("pagar_online")}
                    </p>
                  </div>
                  <button className="text-white text-sm font-extrabold py-5">
                    {t("ver_mas")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarioMobile;
