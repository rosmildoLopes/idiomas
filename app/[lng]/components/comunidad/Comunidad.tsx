'use client';
import React, { useEffect, useRef } from 'react';
import { agba, titan } from '../../font/font';
import Image from 'next/image';
import {
	useInView,
	useMotionValue,
	useSpring,
} from 'framer-motion';
import { useTranslation } from '@/app/i18n/client';
interface AnimatedNumbersProps {
	value: number;
}
interface ComunidadProps {
	lng: string;
}

const AnimatedNumbers: React.FC<AnimatedNumbersProps> = ({
	value,
}) => {
	const ref = useRef<HTMLSpanElement>(null);

	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, {
		duration: 3000,
	});
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			motionValue.set(value);
		}
	}, [isInView, value, motionValue]);

	useEffect(() => {
		springValue.on('change', latest => {
			if (ref.current && latest.toFixed(0) <= value) {
				ref.current.textContent = latest.toFixed(0);
			}
		});
	}, [springValue, value]);

	return <span ref={ref}></span>;
};

const Comunidad: React.FC<ComunidadProps> = ({lng}) => {
	const { t } =  useTranslation(lng, "comunidad");
	return (
		<div
			className={`${titan.className} flex flex-col text-white`}
		>
			<div className='flex lg:flex-row items-center justify-center relative text-center mb-5'>
				<div className='flex items-center justify-center absolute left-3 lg:left-3 w-12 md:w-32'>
					<Image
						src='/stars.svg'
						alt='stars  icon'
						width={125.32}
						height={99.91}
						className=''
					/>
				</div>
				<h2 className='text-xl md:text-3xl text-center w-7/12 md:w-full mx-auto'>
				{t("se_parte")}{' '}
					<span
						className={`${agba.className} text-[#29A9FF]`}
					>
						{t("academia")}
					</span>
				</h2>
			</div>

			<div className='flex flex-wrap flex-row justify-center gap-8 md:gap-16 items-center mb-5 text-center w-8/12 md:w-10/12 mx-auto'>
				<div className='flex flex-col text-center'>
					<p className='lg:text-[35px]'>
						<AnimatedNumbers value={28} />
					</p>
					<p className='lg:text-[25px]'>{t("cursos")}</p>
				</div>
				<div className='flex flex-col text-center'>
					<p className='lg:text-[35px]'>
						<AnimatedNumbers value={30} />
					</p>
					<p className='lg:text-[25px]'>{t("docentes")}</p>
				</div>
				<div className='flex flex-col text-center'>
					<p className=' lg:text-[35px]'>
						<AnimatedNumbers value={100} /> K
					</p>
					<p className='lg:text-[25px]'>{t("alumnos")}</p>
				</div>
				<div className='flex flex-col text-center '>
					<p className=' lg:text-[35px]'>
						<AnimatedNumbers value={100} /> K
					</p>
					<p className='lg:text-[25px]'>{t("graduados")}</p>
				</div>
				<div className='flex flex-col text-center '>
					<p className=' lg:text-[35px]'>
						<AnimatedNumbers value={100} /> K
					</p>
					<p className='lg:text-[25px]'>{t("inscriptos")}</p>
				</div>
			</div>

			<div className=' items-center mb-16 text-center relative'>
				<div className='flex flex-col justify-center items-center relative'>
					<p className=' lg:text-[35px]'>
						<AnimatedNumbers value={100} /> K
					</p>
					<p className='lg:text-[25px] '>
						<span
							className={`${agba.className} text-[#29A9FF] ml-3`}
						>
							{t("numencitos")}{' '}
						</span>{' '}
						{t("trabajando")}
					</p>
				</div>

				<div className='flex items-center justify-center absolute right-4 bottom-6 lg:right-8 lg:bottom-0 w-8 md:w-16'>
					<Image
						src='/star.svg'
						alt='star  icon'
						width={69.07}
						height={69.59}
						className=''
					/>
				</div>
			</div>
		</div>
	);
};

export default Comunidad;
