'use client';

import React, { useEffect, useRef } from 'react';
import { Agbalumo, Titan_One } from 'next/font/google';
import Image from 'next/image';
import {
	useInView,
	useMotionValue,
	useSpring,
} from 'framer-motion';

const agba = Agbalumo({
	weight: '400',
	subsets: ['latin'],
});

const titan = Titan_One({
	weight: '400',
	subsets: ['latin'],
});

interface AnimatedNumbersProps {
	value: number;
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

const Comunidad = () => {
	return (
		<div
			className={`${titan.className} flex flex-col text-white`}
		>
			<div className='flex lg:flex-row items-center justify-center relative text-center mb-5'>
				<div className='flex items-center justify-center'>
					<Image
						src='/stars.svg'
						alt='stars  icon'
						width={125.32}
						height={99.91}
						className='absolute left-14 lg:left-36 w-12 md:w-32 '
					/>
				</div>
				<h2 className='text-xl md:text-3xl text-center w-7/12 md:w-full mx-auto'>
					SÉ PARTE DE LA{' '}
					<span
						className={`${agba.className} text-[#29A9FF]`}
					>
						COMUNIDAD NUMEN
					</span>
				</h2>
			</div>

			<div className='flex flex-wrap flex-row justify-center gap-8 md:gap-16 items-center mb-5 text-center w-8/12 md:w-10/12 mx-auto'>
				<div className='flex flex-col text-center'>
					<p className='lg:text-[35px]'>
						<AnimatedNumbers value={28} />
					</p>
					<p className='lg:text-[25px]'>CURSOS</p>
				</div>
				<div className='flex flex-col text-center'>
					<p className='lg:text-[35px]'>
						<AnimatedNumbers value={30} />
					</p>
					<p className='lg:text-[25px]'>DOCENTES</p>
				</div>
				<div className='flex flex-col text-center'>
					<p className=' lg:text-[35px]'>
						<AnimatedNumbers value={100} /> K
					</p>
					<p className='lg:text-[25px]'>ALUMNOS</p>
				</div>
				<div className='flex flex-col text-center '>
					<p className=' lg:text-[35px]'>
						<AnimatedNumbers value={100} /> K
					</p>
					<p className='lg:text-[25px]'>GRADUADOS</p>
				</div>
				<div className='flex flex-col text-center '>
					<p className=' lg:text-[35px]'>
						<AnimatedNumbers value={100} /> K
					</p>
					<p className='lg:text-[25px]'>INSCRIPTOS</p>
				</div>
			</div>

			<div className=' items-center mb-16 text-center'>
				<div className='flex flex-col justify-center items-center relative'>
					<p className=' lg:text-[35px]'>
						<AnimatedNumbers value={100} /> K
					</p>
					<p className='lg:text-[25px] '>
						<span
							className={`${agba.className} text-[#29A9FF] ml-3`}
						>
							NUMENCITOS{' '}
						</span>{' '}
						TRABAJANDO
					</p>
				</div>

				<div className='flex items-center justify-center relative'>
					<Image
						src='/star.svg'
						alt='star  icon'
						width={69.07}
						height={69.59}
						className='absolute right-8 bottom-6 lg:right-80 lg:bottom-0 w-8 md:w-16'
					/>
				</div>
			</div>
		</div>
	);
};

export default Comunidad;
