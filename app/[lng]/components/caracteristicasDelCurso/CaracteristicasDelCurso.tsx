import React, { ReactNode } from 'react';
import Image from 'next/image';
import { titan } from '../font/font';

interface CursoItem {
	id: number;
	text: string;
	boldStart: number;
	icon: ReactNode;
}

interface CaracteristicasDelCursoProps {
	config: {
		cursoData: CursoItem[];
		videoSource: string;
	};
}

const CursoItemComponent: React.FC<CursoItem> = ({
	icon,
	text,
	boldStart,
}) => (
	<div className='flex items-center justify-center md:justify-start gap-2 text-firstGreen '>
		<div className='lg:w-10 lg:h-10 w-6 h-6'>{icon}</div>
		<p className='ml-2 lg:leading-loose text-sm lg:text-md'>
			{text.substring(0, boldStart)}
			{boldStart <= text.length && (
				<span className='font-bold'>
					{text.substring(boldStart)}
				</span>
			)}
		</p>
	</div>
);

const CaracteristicasDelCurso: React.FC<
	CaracteristicasDelCursoProps
> = ({ config }) => {
	const { cursoData, videoSource } = config;

	return (
		<div className='flex flex-col'>
			<div className='flex items-center mb-4 h-auto overflow-hidden'>
				<div className='hidden md:w-2/12 md:flex justify-between '>
					<Image
						src='/pen.svg'
						alt='pen icon'
						width={100}
						height={100}
						className='absolute z-20 left-24 -translate-y-10'
					/>
				</div>
				<div
					className={`${titan.className} text-white text-center w-full md:w-8/12 text-3xl mb-3 md:text-4xl flex-wrap`}
				>
					CARACTERÍSTICAS DEL CURSO
				</div>
			</div>
			<div className='flex flex-col md:flex-row w-11/12 mx-auto md:justify-between gap-4'>
				<div className=' w-full md:w-3/5 h-auto relative z-0'>
					{/* Video tag */}
					<video width='100%' height='100%' controls>
						<source src={videoSource} type='video/mp4' />
						You have no internet conection.
					</video>
				</div>
				<div className='w-full md:w-2/5 h-auto flex flex-col items-center md:items-start gap-8 justify-center py-2 '>
					{cursoData.map(item => (
						<CursoItemComponent key={item.id} {...item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default CaracteristicasDelCurso;
