'use client';
import React, { useState } from 'react';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { GiNotebook, GiPathDistance } from 'react-icons/gi';
import { agba } from '../../font/font';
import { useTranslation } from '../../../i18n/client';

interface TabsProps {
  lng: string;
}

const Tabs: React.FC<TabsProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'tabs');
  const [toggleModalidad, setToggleModalidad] = useState<number>(1);

  const modalidadesInfo: {
    [key: string]: {
      tab: string;
      title: string;
      contentIcon: React.ReactElement;
      sideIcon: React.ReactElement;
      content: string;
    };
  } = {
    '1': {
      tab: t('modalidad_virtual_tab'),
      title: t('modalidad_virtual_title'),
      contentIcon: <HiOutlineDesktopComputer />,
      sideIcon: <HiOutlineDesktopComputer />,
      content: t('modalidad_virtual_content'),
    },
    '2': {
      tab: t('modalidad_hibrida_tab'),
      title: t('modalidad_hibrida_title'),
      contentIcon: <GiNotebook />,
      sideIcon: <HiOutlineDesktopComputer />,
      content: t('modalidad_hibrida_content'),
    },
    '3': {
      tab: t('modalidad_online_tab'),
      title: t('modalidad_online_title'),
      contentIcon: <GiPathDistance />,
      sideIcon: <HiOutlineDesktopComputer />,
      content: t('modalidad_online_content'),
    },
  };

  const toggleTab = (index: number) => {
    setToggleModalidad(index);
  };

  return (
    <section className='h-auto w-full text-black'>
      <div className='text-xl bloc-tabs flex w-full md:w-5/6'>
        <button
          className={`tabs ${toggleModalidad === 1 ? 'active-tabs' : ''} bg-secondGreen ${agba.className} text-sm md:text-lg md:px-6 md:py-3 px-4 py-2 text-nowrap flex justify-center items-center rounded-2xl rounded-b-none w-1/3`}
          onClick={() => toggleTab(1)}
        >
          {modalidadesInfo['1'].tab}
        </button>
        <button
          className={`tabs ${toggleModalidad === 2 ? 'active-tabs' : ''} bg-white ${agba.className} text-sm md:text-lg md:px-6 md:py-3 px-4 py-2 text-nowrap flex justify-center items-center rounded-2xl rounded-b-none w-1/3`}
          onClick={() => toggleTab(2)}
        >
          {modalidadesInfo['2'].tab}
        </button>
        <button
          className={`tabs ${toggleModalidad === 3 ? 'active-tabs' : ''} bg-thirdGreen ${agba.className} text-sm md:text-lg md:px-6 md:py-3 px-4 py-2 text-nowrap flex justify-center items-center rounded-2xl rounded-b-none w-1/3`}
          onClick={() => toggleTab(3)}
        >
          {modalidadesInfo['3'].tab}
        </button>
      </div>

      <div className='content-tabs h-auto'>
        <div className={`content ${toggleModalidad === 1 ? 'active-content' : 'hidden'} bg-secondGreen p-6 w-full h-full block rounded-3xl rounded-t-none md:rounded-tr-3xl  md:px-10 pt-8 relative`}>
          <div className='flex gap-2 items-center border-b border-black pb-3 font-black '>
            <p className=' text-2xl md:text-4xl'>{modalidadesInfo['1'].contentIcon}</p>
            <h2 className='text-2xl md:text-4xl '>{modalidadesInfo['1'].title}</h2>
          </div>
          <p className='py-6 font-semibold md:leading-loose '>{modalidadesInfo['1'].content}</p>
          <p className='absolute bottom-6 right-6 text-4xl'>{modalidadesInfo['1'].sideIcon}</p>
        </div>
        <div className={`content ${toggleModalidad === 2 ? 'active-content' : 'hidden'} bg-white p-6 w-full h-full block rounded-3xl rounded-t-none md:rounded-tr-3xl md:px-10 pt-8 relative`}>
          <div className='flex gap-3 items-center border-b border-black pb-3 font-black '>
            <p className=' text-2xl md:text-4xl'>{modalidadesInfo['2'].contentIcon}</p>
            <h2 className='text-2xl md:text-4xl '>{modalidadesInfo['2'].title}</h2>
          </div>
          <p className='py-6 font-semibold md:leading-loose '>{modalidadesInfo['2'].content}</p>
          <p className='absolute bottom-6 right-6 text-4xl'>{modalidadesInfo['1'].sideIcon}</p>
        </div>
        <div className={`content ${toggleModalidad === 3 ? 'active-content' : 'hidden'} bg-thirdGreen p-6 w-full h-full block rounded-3xl rounded-t-none md:rounded-tr-3xl md:px-10 pt-8 relative`}>
          <div className='flex gap-2 items-center border-b border-black pb-3 font-black '>
            <p className='font-bold  text-2xl md:text-4xl'>{modalidadesInfo['3'].contentIcon}</p>
            <h2 className='text-2xl md:text-4xl'>{modalidadesInfo['3'].title}</h2>
          </div>
          <p className='py-6 font-semibold md:leading-loose '>{modalidadesInfo['3'].content}</p>
          <p className='absolute bottom-6 right-6 text-4xl'>{modalidadesInfo['1'].sideIcon}</p>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
