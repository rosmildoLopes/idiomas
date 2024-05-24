'use client';
import React from 'react';
import { useTranslation } from '../../../i18n/client';
import { agba, titan } from '../../font/font';
import Image from 'next/image';
import Link from 'next/link';

interface ConsultaProps {
  lng: string;
}

const Consulta: React.FC<ConsultaProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'consulta');

  return (
    <div className='flex flex-col gap-7 w-11/12 lg:w-1/2 mx-auto text-white h-auto relative'>
      <h2 className={`${titan.className} text-xl lg:text-3xl text-center lg:text-start`}>
        {t('envianos_tu_consulta')}
      </h2>
      <p>
        <span className='font-black text-sm lg:text-md'></span>{t('envianos_tu_consulta_desc')}
      </p>
      <div className='flex flex-col'>
        <p>{t('visitar_oficinas')}</p>
        <p className={`${agba.className} text-firstBlue`}>
          {t('direccion_oficinas')}
        </p>
      </div>
      <div className='flex flex-col'>
        <p>
          {t('enviar_whatsapp_parte1')} <span className='font-black'>{t('enviar_whatsapp_parte2')}</span> {t('enviar_whatsapp_parte3')}
        </p>
        <Link
          className={`${agba.className} text-firstBlue hover:text-firstGreen`}
          href={`https://wa.me/${t('whatsapp_numero')}`}
        >
          {t('whatsapp_numero')}
        </Link>
      </div>
      <Image
        src='/consultaIcon.svg'
        alt='iconos de consulta'
        width={100}
        height={100}
        className='w-24 lg:w-44 absolute right-12 bottom-0 lg:bottom-16'
      />
    </div>
  );
};

export default Consulta;
