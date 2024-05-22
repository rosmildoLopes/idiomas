import Image from 'next/image';
import React from 'react';
import Tabs from './Tabs';
import { agba, titan } from '../../font/font';

const ModalidadCursada = () => {
	return (
		<section className='flex flex-col md:flex-row md:justify-between w-5/6 mx-auto gap-8 my-16 overflow-hidden'>
			<div className='flex flex-row-reverse md:flex-col justify-between items-center md:items-end md:justify-center md:w-2/6 w-full'>
				<div className='w-1/3 md:w-3/4 flex justify-end'>
					<Image
						src='/iconosModalidadCursada.svg'
						alt='iconos modalidades de cursada'
						width={500}
						height={500}
						className=' w-56'
					/>
				</div>

				<div className='flex flex-col text-white text-left px-4 md:text-right w-2/3 md:w-full'>
					<h2
						className={`${titan.className} text-2xl md:text-4xl`}
					>
						MODALIDADES DE CURSADA
					</h2>
					<h4
						className={`${agba.className} text-green-gradient2 text-md md:text-2xl`}
					>
						Elegí la modalidad que mejor se adapte a vos
					</h4>
				</div>
			</div>
			<div className='md:w-4/6 w-5/6 mx-auto'>
				<Tabs />
			</div>
		</section>
	);
};

export default ModalidadCursada;
