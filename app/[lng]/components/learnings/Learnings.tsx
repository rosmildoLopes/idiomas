import React from 'react';
import { titan } from '../../font/font';
import Image from 'next/image';

interface LearningItem {
	id: number;
	message: string;
	boldStart: number;
}

const learningData: LearningItem[] = [
	{
		id: 1,
		message:
			'Nuestros cursos cuentan con certificado de extensión universitaria',
		boldStart: 27,
	},
	{
		id: 2,
		message:
			'Nuestros cursos cuentan con certificado de extensión universitaria',
		boldStart: 27,
	},
	{
		id: 3,
		message:
			'Nuestros cursos cuentan con certificado de extensión universitaria',
		boldStart: 27,
	},
	{
		id: 4,
		message:
			'Nuestros cursos cuentan con certificado de extensión universitaria',
		boldStart: 27,
	},
	{
		id: 5,
		message:
			'Nuestros cursos cuentan con certificado de extensión universitaria',
		boldStart: 27,
	},
	{
		id: 6,
		message:
			'Nuestros cursos cuentan con certificado de extensión universitaria',
		boldStart: 27,
	},
];

const Learnings: React.FC = () => {
	return (
		<section className='flex flex-col h-auto items-center text-white mx-auto  my-4'>
			<div>
				<h2
					className={`${titan.className} text-2xl md:text-4xl md:mb-8`}
				>
					¿QUÉ VAS A APRENDER?
				</h2>
			</div>
			<div className='flex flex-wrap justify-center w-full lg:w-11/12 '>
				{learningData.map(item => (
					<div
						key={item.id}
						className='w-full md:w-1/2 p-2'
					>
						<div className='flex flex-row items-center rounded px-2 justify-center lg:w-11/12 mx-auto '>
							<div className='bg-firstGreen w-1 h-1 md:w-3 md:h-3 rounded-full' />
							<p className='text-white ml-2 leading-none text-sm lg:text-md'>
								{item.message.substring(0, item.boldStart)}
								<span className='font-bold'>
									{item.message.substring(item.boldStart)}
								</span>
							</p>
						</div>
					</div>
				))}
			</div>
			<div className='flex justify-center items-center gap-12 mt-8'>
				<Image
					src='/learningsIcons1.svg'
					alt='conjunto de imagenes de Partners'
					width={700}
					height={500}
					className='w-96'
				/>
				<Image
					src='/learningsIcons2.svg'
					alt='stickers de lentes'
					width={203}
					height={155}
					className='hidden w-32 md:block'
				/>
			</div>
		</section>
	);
};

export default Learnings;
