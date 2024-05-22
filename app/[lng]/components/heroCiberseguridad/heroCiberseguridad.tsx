import React from 'react';
import Image from 'next/image';
import {
	bagel,
	shrikhand,
	luckiest,
	titan,
	ultra,
} from '../../font/font';

export const HeroCiberseguridad = () => {
	return (
		<div className='relative w-full'>
			<div className='flex flex-col-reverse md:flex-row items-center justify-between mx-28 relative'>
				<div className='w-52 h-52 hidden lg:block absolute'>
					<Image
						src={'./heroCiberIcon.svg'}
						alt='Cursada Virtual'
						width={141}
						height={57}
						className='lg:w-full lg:h-full'
					/>
				</div>
				<div className='flex lg:mt-10 gap-6 w-full justify-center lg:justify-end'>
					<Image
						src={'./CursadaVirtualIcon.svg'}
						alt='Cursada Virtual'
						width={141}
						height={57}
						className='w-24  lg:w-36'
					/>
					<Image
						src={'./CursadaRemotaIcon.svg'}
						alt='Cursada Remota'
						width={141}
						height={57}
						className='w-24 lg:w-36'
					/>
					<Image
						src={'./CursadaHibridaIcon.svg'}
						alt='Cursada Híbrida'
						width={141}
						height={57}
						className='w-24  lg:w-36'
					/>
				</div>
			</div>
			<h2
				className={`${titan.className} text-green-violet-gradient text-4xl md:text-4xl lg:text-9xl text-center mb-4`}
			>
				CIBERSEGURIDAD
			</h2>
			<div className='w-full lg:hidden flex justify-center items-center'>
				<Image
					src={'./heroCiberIcon.svg'}
					alt='Cursada Virtual'
					width={141}
					height={57}
					className='w-24'
				/>
			</div>
			<div className='flex flex-col pt-4 w-[70%] space-y-3 mx-auto font-black text-xs text-firstBlue md:flex-row md:space-x-5 md:w-full md:space-y-0 md:justify-center'>
				<button className='px-3 py-2 border-2 border-firstBlue rounded-3xl hover:bg-firstBlue hover:text-black md:text-lg md:px-16 md:py-3 md:text-black md:bg-firstBlue md:rounded-full md:hover:bg-transparent md:hover:text-firstBlue'>
					Descargar Programa
				</button>
				<button className='px-3 py-2 border-2 border-firstBlue rounded-3xl hover:bg-firstBlue hover:text-black md:text-lg md:px-16 md:py-3 md:text-black md:bg-firstBlue md:rounded-full md:hover:bg-transparent md:hover:text-firstBlue'>
					Quiero hablar con alguien
				</button>
				<button className='px-3 py-2 border-2 border-firstBlue rounded-3xl hover:bg-firstBlue hover:text-black md:text-lg md:px-16 md:py-3 md:text-black md:bg-firstBlue md:rounded-full md:hover:bg-transparent md:hover:text-firstBlue'>
					Inscribirme
				</button>
			</div>
		</div>
	);
};
