import React from 'react';
import Image from 'next/image';
import { useTranslation } from '../../../i18n';
import { bagel, shrikhand, luckiest, titan, ultra } from '../../font/font';

interface HeroOneProps {
  lng: string;
}

const HeroOne: React.FC<HeroOneProps> = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'heroOne');

  return (
    <section className='mt-36 mb-10 h-auto w-full overflow-hidden'>
      <div className='text-white flex flex-col justify-center items-center relative'>
        <h1 className={`${titan.className} text-green-gradient text-5xl md:text-9xl w-[80%] text-center`}>
          {t('preparate')}{' '}
        </h1>
        <div className='flex '>
          <div className='absolute xl:left-48 w-10 h-10 md:w-16 md:h-16 lg:w-36 lg:h-16 flex items-center lg:mt-28'>
            <Image src='/like.svg' width={200} height={200} alt='like icon' className='' />
          </div>
          <p className={`${ultra.className} text-white text-5xl  md:text-9xl  w-full text-center `}>
            {t('para_el')}{' '}
          </p>
          <div className='absolute right-8 w-12 h-12 lg:right-[19rem] lg:w-24 lg:-mr-3 '>
            <Image src='/target.svg' width={100} height={100} alt='target icon' className='' />
          </div>
        </div>

        <div className='flex items-center w-full justify-center'>
          <div className='text-3xl md:text-9xl text-nowrap w-[70%] lg:ml-16 text-violet-gradient flex items-center justify-center'>
            <p className={`${ultra.className}`}>P</p>
            <p className={`${bagel.className} lg:mb-3`}>r</p>
            <p className={`${ultra.className}  lg:mt-2`}>e</p>
            <p className={`${shrikhand.className}  lg:mt-6`}>s</p>
            <p className={`${bagel.className}  lg:mb-2`}>e</p>
            <p className={`${luckiest.className}  lg:mt-3`}>n</p>
            <p className={`${shrikhand.className}  lg:mt-5`}>t</p>
            <p className={`${luckiest.className}  lg:mt-2`}>{t('e')}</p>
            <Image src='/arrow.svg' width={100} height={100} alt='target icon' className='w-11 lg:ml-6 lg:mt-2 text-violet-gradient' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroOne;
