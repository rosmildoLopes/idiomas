'use client';

import Image from 'next/image';
import React from 'react';
import { agba } from '../font/font';
import { titan } from '../font/font';

const BeneficiosAlumnos = () => {
	return (
		<div className='relative'>
			<div className=''>
				<Image
					src='/box.svg'
					alt=''
					width={140}
					height={140}
					className='absolute w-[60px] h-[60px] left-10 -top-2 md:w-[140px] md:h-[140px] md:left-80 md:bottom-24 md:-top-12 z-10'
				/>
			</div>
			<div className='w-72 ml-12 text-center md:w-full'>
				{/* Desktop */}
				<h2
					className={`${titan.className} hidden md:block font-bold text-4xl text-white`}
				>
					BENEFICIOS PARA NUESTROS{' '}
					<span
						className={`${agba.className} text-firstBlue text-2xl md:text-4xl`}
					>
						ESTUDIANTES
					</span>
				</h2>
				{/* Mobile */}
				<h2
					className={`${titan.className} ml-12 font-bold text-2xl md:hidden text-white`}
				>
					BENEFICIOS PARA NUESTROS
					<span
						className={`${agba.className} text-firstBlue text-2xl md:text-4xl`}
					>
						ESTUDIANTES
					</span>
				</h2>
			</div>
			<div className='logos bg-secondBlue md:p-16 mt-6 overflow-hidden p-3 flex flex-row justify-center items-center lg:h-28'>
				<div className='logos-slide flex flex-row'>
					<div className='flex flex-row items-center mr-40'>
						<Image
							src='/comisionesReducidasIcon.svg'
							alt=''
							width={75}
							height={75}
							priority
							className='w-[50px] h-[50px] md:w-[75px] md:h-[75px]'
						/>
						<p className='pl-2 md:text-3xl text-lg text-white font-bold'>
							Comisiones <br />
							reducidas
						</p>
					</div>
					<div className='flex flex-row items-center mr-40'>
						<Image
							src='/bolsaDeTrabajoIcon.svg'
							alt=''
							width={75}
							height={75}
							priority
							className='w-[50px] h-[50px] md:w-[75px] md:h-[75px]'
						/>
						<p className='pl-2 md:text-3xl text-lg text-white font-bold'>
							Bolsa de <br />
							trabajo
						</p>
					</div>
					<div className='flex flex-row items-center mr-40'>
						<Image
							src='/certificacionOficialIcon.svg'
							alt=''
							width={75}
							height={75}
							priority
							className='w-[50px] h-[50px] md:w-[75px] md:h-[75px]'
						/>
						<p className='pl-2 md:text-3xl text-lg text-white font-bold'>
							Certificación <br /> oficial
						</p>
					</div>
					<div className='flex flex-row items-center mr-40'>
						<Image
							src='/comunidadNumenIcon.svg'
							alt=''
							width={75}
							height={75}
							priority
							className='w-[50px] h-[50px] md:w-[75px] md:h-[75px]'
						/>
						<p className='pl-2 md:text-3xl text-lg text-white font-bold'>
							Comunidad <br />{' '}
							<span
								className={`${agba.className} text-firstBlue`}
							>
								Numen
							</span>
						</p>
					</div>
				</div>
				<div className='logos-slide flex flex-row '>
					<div className='flex flex-row items-center mr-40'>
						<Image
							src='/comisionesReducidasIcon.svg'
							alt=''
							width={75}
							height={75}
							priority
							className='w-[50px] h-[50px] md:w-[75px] md:h-[75px]'
						/>
						<p className='pl-2 md:text-3xl text-lg text-white font-bold'>
							Comisiones <br />
							reducidas
						</p>
					</div>
					<div className='flex flex-row items-center mr-40'>
						<Image
							src='/bolsaDeTrabajoIcon.svg'
							alt=''
							width={75}
							height={75}
							priority
							className='w-[50px] h-[50px] md:w-[75px] md:h-[75px]'
						/>
						<p className='pl-2 md:text-3xl text-lg text-white font-bold'>
							Bolsa de <br />
							trabajo
						</p>
					</div>
					<div className='flex flex-row items-center mr-40'>
						<Image
							src='/certificacionOficialIcon.svg'
							alt=''
							width={75}
							height={75}
							priority
							className='w-[50px] h-[50px] md:w-[75px] md:h-[75px]'
						/>
						<p className='pl-2 md:text-3xl text-lg text-white font-bold'>
							Certificación <br /> oficial
						</p>
					</div>
					<div className='flex flex-row items-center mr-40'>
						<Image
							src='/comunidadNumenIcon.svg'
							alt=''
							width={75}
							height={75}
							priority
							className='w-[50px] h-[50px] md:w-[75px] md:h-[75px]'
						/>
						<p className='pl-2 md:text-3xl text-lg text-white font-bold'>
							Comunidad <br />{' '}
							<span
								className={`${agba.className} text-firstBlue`}
							>
								Numen
							</span>
						</p>
					</div>
				</div>
				<div className='logos-slide flex flex-row'>
					<div className='flex flex-row items-center mr-40'>
						<Image
							src='comisionesReducidasIcon.svg'
							alt=''
							width={75}
							height={75}
							priority
							className='w-[50px] h-[50px] md:w-[75px] md:h-[75px]'
						/>
						<p className='pl-2 md:text-3xl text-lg text-white font-bold'>
							Comisiones <br />
							reducidas
						</p>
					</div>
					<div className='flex flex-row items-center mr-40'>
						<Image
							src='/bolsaDeTrabajoIcon.svg'
							alt=''
							width={75}
							height={75}
							priority
							className='w-[50px] h-[50px] md:w-[75px] md:h-[75px]'
						/>
						<p className='pl-2 md:text-3xl text-lg text-white font-bold'>
							Bolsa de <br />
							trabajo
						</p>
					</div>
					<div className='flex flex-row items-center mr-40'>
						<Image
							src='/certificacionOficialIcon.svg'
							alt=''
							width={75}
							height={75}
							priority
							className='w-[50px] h-[50px] md:w-[75px] md:h-[75px]'
						/>
						<p className='pl-2 md:text-3xl text-lg text-white font-bold'>
							Certificación <br /> oficial
						</p>
					</div>
					<div className='flex flex-row items-center mr-40'>
						<Image
							src='/comunidadNumenIcon.svg'
							alt=''
							width={75}
							height={75}
							priority
							className='w-[50px] h-[50px] md:w-[75px] md:h-[75px]'
						/>
						<p className='pl-2 md:text-3xl text-lg text-white font-bold'>
							Comunidad <br />{' '}
							<span
								className={`${agba.className} text-firstBlue`}
							>
								Numen
							</span>
						</p>
					</div>
				</div>
				i
			</div>
		</div>
	);
};

export default BeneficiosAlumnos;