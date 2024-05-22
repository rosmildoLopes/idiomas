import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Docente {
	id: number;
	src: string;
	alt: string;
	linkedIn?: string;
	mail?: string;
	twitter?: string;
	name?: string;
	profession?: string;
	course?: string;
	extraImages?: {
		src: string;
		alt: string;
		href: string;
	}[];
}

interface DocentesProps {
	dataDocentes: Docente[];
}

const Docentes: React.FC<DocentesProps> = ({
	dataDocentes,
}) => {
	return (
		<section className='w-11/12 mx-auto'>
			<div className='flex items-start w-full justify-between flex-wrap'>
				{dataDocentes.map(docente => (
					<div
						key={docente.id}
						className='mb-8 flex flex-col justify-center items-center w-1/2 md:w-1/4'
					>
						<div className='relative rounded-full md:h-48 md:w-48 w-24 h-24 flex justify-center items-center'>
							<Image
								src={docente.src}
								width={600}
								height={600}
								alt={docente.alt}
								className='w-full h-full object-cover '
							/>
							{docente.extraImages &&
								docente.extraImages.map((image, index) => (
									<Link
										key={index}
										href={image.href || '#'}
										target='_blank'
									>
										<Image
											src={image.src}
											width={55}
											height={55}
											alt={image.alt}
											className={`w-6 h-6 lg:w-12 lg:h-12 rounded-full absolute ${
												index === 0
													? 'top-3 right-0'
													: index === 1
													? 'right-0 transform translate-x-1/2 -translate-y-1/2'
													: 'right-0 bottom-3'
											}`}
										/>
									</Link>
								))}
						</div>
						<div className='mt-4 text-firstBlue flex flex-col justify-center items-center text-center'>
							<p className='font-black text-xl lg:text-2xl uppercase'>
								{docente.name}
							</p>
							<p className='font-medium text-md lg:text-base'>
								{docente.profession}
							</p>
							<p className='font-medium text-md lg:text-lg'>
								{docente.course}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Docentes;
