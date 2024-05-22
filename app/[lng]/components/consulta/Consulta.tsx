import React from 'react';
import { agba, titan } from '../../font/font';
import Image from 'next/image';
import Link from 'next/link';

const Consulta = () => {
	return (
		<div className='flex flex-col gap-7 w-11/12 lg:w-1/2 mx-auto text-white h-auto relative'>
			<h2
				className={`${titan.className} text-xl lg:text-3xl text-center lg:text-start`}
			>
				ENVIANOS TU CONSULTA
			</h2>
			<p>
				<span className='font-black text-sm lg:text-md'>
					Envianos tu consulta
				</span>
				, y un asesor de admisiones se pondrá en contacto
				para aclarar todas tus dudas.
			</p>
			<div className='flex flex-col'>
				<p>
					También podés visitar{' '}
					<span className='font-black'>
						nuestras oficinas
					</span>{' '}
					en:
				</p>
				<p className={`${agba.className} text-firstBlue`}>
					Av. Ing. Huergo 949 Piso 4 - Buenos Aires
				</p>
			</div>
			<div className='flex flex-col'>
				<p>
					O envianos un{' '}
					<span className='font-black'>Whatsapp:</span> en:
				</p>
				<Link
					className={`${agba.className} text-firstBlue hover:text-firstGreen`}
					href={'https://wa.me/5491131262388'}
				>
					5491131262388
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
