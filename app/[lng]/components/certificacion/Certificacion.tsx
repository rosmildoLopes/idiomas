'use client';
import Image from 'next/image';
import { titan, agba } from "../../font/font"
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useTranslation } from "../../../i18n/client";

type PropType = {
	options?: EmblaOptionsType;
  lng:string;
};

const images = [
	{
		src: './UAA-logoBLANCO.svg',
		alt: 'Universidad Atlántida Argentina',
		width: 162,
		height: 81,
	},
	{
		src: './ProjectManagement1.svg',
		alt: 'Project Management Institute',
		width: 176,
		height: 54,
	},
	{
		src: './ProjectManagement2.svg',
		alt: 'Project Management Training Partner',
		width: 70,
		height: 81,
	},
	{
		src: './MetaBusinessLOGO.svg',
		alt: 'Meta Business Logo',
		width: 400,
		height: 50,
	},
	{
		src: './PartnerX.svg',
		alt: 'Partner Official X',
		width: 53,
		height: 81,
	},
];

const Certificacion = ({ options, lng }: PropType) => {
  const { t } = useTranslation(lng, "certificacion");
	const autoplayOptions = {
		delay: 4000,
		stopOnInteraction: false,
	};
	const carouselOptions = {
		loop: true,
		...options,
	};

	const [emblaRef, emblaApi] = useEmblaCarousel(
		carouselOptions,
		[Autoplay(autoplayOptions)],
	);

	return (
		<div className='flex flex-col lg:flex-row w-11/12 justify-center items-center mx-auto my-8'>
			<div className='text-white text-center w-full lg:w-3/6 flex flex-col'>
				<h2
					className={`${titan.className} text-4xl lg:text-3xl lg:text-end`}
				>
					{t("title")}
				</h2>
				<h3
					className={`${agba.className} text-violet-to-green-gradient text-2xl lg:text-xl lg:text-end`}
				>
					{t("subtitle")}
				</h3>
				<p className='py-4 justify-center text-md lg:text-xs lg:text-end'>
        {t("description_part1")}{' '}
					<strong>
          {t("description_part2")}
					</strong>{' '}
					{t("and")}
					<strong>
						{' '}
						{t("description_part4")} <br /> {t("description_part5")}
					</strong>
					{t("description_part6")}
				</p>

				<div className='lg:w-full lg:flex lg:flex-row hidden items-center justify-center'>
					<div className='pb-4 gap-1 w-full hidden lg:flex lg:flex-row items-center justify-center flex-wrap'>
						{images.map((image, index) => (
							<div
								className={`flex mx-auto justify-center items-center w-44 h-44 ${
									index === 1 ? 'mr-10' : ''
								}`}
								key={index}
							>
								<Image
									src={image.src}
									alt={image.alt}
									width={image.width}
									height={image.height}
									className=''
								/>
							</div>
						))}
					</div>
				</div>

				<div
					className='embla__viewport lg:hidden overflow-x-hidden'
					ref={emblaRef}
				>
					<div className='embla__container pb-4 gap-16 flex '>
						{images.map((image, index) => (
							<div
								className='embla__slide flex mx-auto'
								key={index}
							>
								<Image
									src={image.src}
									alt={image.alt}
									width={image.width}
									height={image.height}
									className='w-full  embla__slide__number'
								/>
							</div>
						))}
					</div>
				</div>
				<div className='w-full hidden lg:flex lg:justify-end justify-center items-center mb-6'>
					<button className='bg-firstBlue text-black font-black w-6/12 md:px-7 md:py-4 px-6 py-2 my-3 rounded-full'>
          {t("validate")}
					</button>
				</div>
			</div>

			<div className='w-3/5 lg:w-1/2 flex mx-auto lg:h-[550px] '>
				<Image
					src='/certificado.svg'
					width={400}
					height={400}
					alt='certificado oficial'
					className='lg:h-[550px] w-full'
				/>
			</div>
			<div className='w-full flex lg:hidden lg:justify-end justify-center items-center mb-6'>
				<button className='bg-firstBlue text-xs text-black font-black w-7/12 md:px-7 md:py-4 px-8 py-4 my-3 rounded-full'>
					Validar Certificado
				</button>
			</div>
		</div>
	);
};

export default Certificacion;