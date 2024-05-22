import React from 'react';
import Image from 'next/image';
import {
	bagel,
	shrikhand,
	luckiest,
	titan,
	ultra,
} from '../../font/font';

export const HeroPM = () => {
	return (
		<div className='md:pl-24 pl-6 relative w-full'>
			<div className='flex flex-col-reverse md:flex-row'>
				<h2
					className={`${titan.className} text-green-gradient text-4xl md:pb-2 md:text-9xl text-start`}
				>
					PROJECT
				</h2>
				<div className='flex md:mt-10 md:ml-16 md:pace-x-5'>
					<ol>
						<Image
							src={'./CursadaVirtualIcon.svg'}
							alt='Cursada Virtual'
							width={141}
							height={57}
							className='w-24 h-10 md:w-36 md:h-14'
						/>
					</ol>
					<ol>
						<Image
							src={'./CursadaRemotaIcon.svg'}
							alt='Cursada Remota'
							width={141}
							height={57}
							className='w-24 h-10 md:w-36 md:h-14'
						/>
					</ol>
					<ol>
						<Image
							src={'./CursadaHibridaIcon.svg'}
							alt='Cursada Híbrida'
							width={141}
							height={57}
							className='w-24 h-10 md:w-36 md:h-14'
						/>
					</ol>
				</div>
			</div>
			<div className='text-violet-gradient text-4xl md:text-9xl md:pb-2'>
				<Image
					src={'./heroPMIcon.svg'}
					alt='Icon'
					width={150.36}
					height={163.7}
					className='absolute w-20 h-16 right-28 top-8 md:right-20 md:top-32 md:w-36 md:h-40'
				/>
				<span className={`${ultra.className}`}>Ma</span>
				<span className={`${bagel.className}`}>n</span>
				<span className={`${luckiest.className}`}>A</span>
				<span className={`${ultra.className}`}>g</span>
				<span className={`${shrikhand.className}`}>e</span>
				<span className={`${ultra.className}`}>m</span>
				<span className={`${bagel.className}`}>e</span>
				<span className={`${shrikhand.className}`}>n</span>
				<span className={`${luckiest.className}`}>T</span>
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
