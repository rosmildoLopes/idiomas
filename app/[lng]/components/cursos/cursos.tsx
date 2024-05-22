'use client';
import { Titan_One } from 'next/font/google';
import React, { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import cursosData, {
	CursosData,
	Curso,
} from '../constants/cursosData';
import Image from 'next/image';
import { titan } from '../font/font';
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';
import CursosMobile from './CursosMobile';

type Categoria =
	| 'desarrollo'
	| 'marketing'
	| 'projectManagement'
	| 'seguridadYData'
	| 'idiomas';

const Cursos = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{ loop: false },
		[],
	);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	const [categoriaSeleccionada, setCategoriaSeleccionada] =
		useState<Categoria>('desarrollo');

	const handleCategoriaClick = (categoria: Categoria) => {
		setCategoriaSeleccionada(categoria);
	};

	const renderCursos = () => {
		const cursosCategoria =
			cursosData[categoriaSeleccionada];

		if (!cursosCategoria) {
			return (
				<p>
					No hay cursos disponibles para esta categoría.
				</p>
			);
		}

		return (
			<div className='embla relative overflow-x-hidden'>
				<button
					className='embla__prev'
					onClick={scrollPrev}
				>
					<GrPrevious className='w-10 h-10 md:w-14 md:h-14 absolute top-[250px] -left-2 md:top-64 md:left-2 z-50 hover:text-white' />
				</button>
				<div className='embla__viewport' ref={emblaRef}>
					<div className='embla__container w-full space-x-6 pt-10'>
						{cursosCategoria.map(
							(curso: {
								id: React.Key | null | undefined;
								name:
									| string
									| number
									| boolean
									| React.ReactElement<
											any,
											| string
											| React.JSXElementConstructor<any>
									  >
									| Iterable<React.ReactNode>
									| React.ReactPortal
									| React.PromiseLikeOfReactNode
									| null
									| undefined;
								modality:
									| string
									| number
									| boolean
									| React.ReactElement<
											any,
											| string
											| React.JSXElementConstructor<any>
									  >
									| Iterable<React.ReactNode>
									| React.ReactPortal
									| React.PromiseLikeOfReactNode
									| null
									| undefined;
								time:
									| string
									| number
									| boolean
									| React.ReactElement<
											any,
											| string
											| React.JSXElementConstructor<any>
									  >
									| Iterable<React.ReactNode>
									| React.ReactPortal
									| React.PromiseLikeOfReactNode
									| null
									| undefined;
								modules:
									| string
									| number
									| boolean
									| React.ReactElement<
											any,
											| string
											| React.JSXElementConstructor<any>
									  >
									| Iterable<React.ReactNode>
									| React.ReactPortal
									| React.PromiseLikeOfReactNode
									| null
									| undefined;
								support:
									| string
									| number
									| boolean
									| React.ReactElement<
											any,
											| string
											| React.JSXElementConstructor<any>
									  >
									| Iterable<React.ReactNode>
									| React.ReactPortal
									| React.PromiseLikeOfReactNode
									| null
									| undefined;
								info: string | undefined;
							}) => (
								<div
									key={curso.id}
									className='w-[88%] md:w-[29%] md:h-auto bg-firstBlue border-transparent rounded-3xl transition duration-500 embla__slide'
								>
									<div className='embla__slide__number md:p-10 px-6 py-7 text-black text-left space-y-7'>
										<h4 className='font-black text-2xl md:text-3xl'>
											{curso.name}
										</h4>
										<div className='flex'>
											<Image
												src={'modalidadIcon.svg'}
												alt='modalidad icon'
												width={29.92}
												height={29.92}
												className='mr-3'
											/>
											<p className='text-xs md:text-lg'>
												Modalidad{' '}
												<span className='font-extrabold'>
													{curso.modality}
												</span>
											</p>
										</div>
										<div className='flex'>
											<Image
												src={'duracionIcon.svg'}
												alt='duracion icon'
												width={29.92}
												height={29.92}
												className='mr-3'
											/>
											<p className='text-xs md:text-lg'>
												Duración de{' '}
												<span className='font-extrabold'>
													{curso.time}
												</span>
											</p>
										</div>
										<div className='flex'>
											<Image
												src={'modulosIcon.svg'}
												alt='Modulos Icon'
												width={23.27}
												height={29.92}
												className='mr-3'
											/>
											<p className='font-extrabold text-xs md:text-lg'>
												{curso.modules}
											</p>
										</div>
										<div className='flex'>
											<Image
												src={'apoyoIcon.svg'}
												alt='Apoyo Icon'
												width={28.22}
												height={26.6}
												className='mr-3'
											/>
											<p className='text-xs md:text-lg'>
												Apoyo{' '}
												<span className='font-extrabold'>
													{curso.support}
												</span>
											</p>
										</div>
										<div className='flex justify-center'>
											<a
												href={curso.info}
												target='_blank'
												rel='noopener noreferrer'
												className='px-8 py-3 border border-black rounded-full bg-black text-white font-black md:text-[18px] text-[11px]'
											>
												Más información
											</a>
										</div>
									</div>
								</div>
							),
						)}
					</div>
				</div>
				<button
					className='embla__next'
					onClick={scrollNext}
				>
					<GrNext className='w-10 h-10 md:w-14 md:h-14 absolute top-[249px] right-8 md:top-64 md:right-16 hover:text-white' />
				</button>
			</div>
		);
	};

	return (
		<div className='text-center'>
			<div className='relative'>
				<h3
					className={`${titan.className} text-white pb-5 lg:text-[32px]`}
				>
					CURSOS Y DIPLOMATURAS
				</h3>
				<Image
					src={'./starIconCursos.svg'}
					alt='Icono de estrella'
					width={67.3}
					height={69.14}
					className='absolute md:top-0 md:right-20 -top-5 right-2'
				/>
			</div>
			<div className='hidden md:block'>
				<div className='flex col space-x-10 justify-center'>
					<button
						className={`px-7 py-2 font-black rounded-3xl text-firstBlue border-2 border-firstBlue active:bg-firstBlue active:text-black`}
						onClick={() =>
							handleCategoriaClick('desarrollo')
						}
					>
						Desarrollo
					</button>
					<button
						className={`px-7 py-2 font-black rounded-3xl text-firstBlue border-2 border-firstBlue active:bg-firstBlue active:text-black`}
						onClick={() =>
							handleCategoriaClick('marketing')
						}
					>
						Marketing
					</button>
					<button
						className={`px-7 py-2 font-black rounded-3xl text-firstBlue border-2 border-firstBlue active:bg-firstBlue active:text-black`}
						onClick={() =>
							handleCategoriaClick('projectManagement')
						}
					>
						Project Management
					</button>
					<button
						className={`px-7 py-2 font-black rounded-3xl text-firstBlue border-2 border-firstBlue active:bg-firstBlue active:text-black`}
						onClick={() =>
							handleCategoriaClick('seguridadYData')
						}
					>
						Seguridad y Data
					</button>
					<button
						className={`px-7 py-2 font-black rounded-3xl text-firstBlue border-2 border-firstBlue active:bg-firstBlue active:text-black`}
						onClick={() => handleCategoriaClick('idiomas')}
					>
						Idiomas
					</button>
				</div>
			</div>
			<CursosMobile
				onCategoriaClick={handleCategoriaClick}
			/>
			<div className='flex justify-center ml-12 mb-10'>
				{renderCursos()}
			</div>
		</div>
	);
};

export default Cursos;