import React from 'react';
import Image from 'next/image';
import { titan, agba } from '../../font/font';
import { Clase } from '../constants/clasesHibridasData'; // Importa el tipo Clase aquí

interface ListadoClasesHibridasProps {
  data: Clase[]; // Asegúrate de que la propiedad 'data' coincida con el tipo Clase[]
  className?: string;
}

const ListadoClasesHibridas: React.FC<
	ListadoClasesHibridasProps
> = ({ data, className }) => {
	return (
		<section className={`w-full md:w-1/3 mx-auto `}>
			{' '}
			{/* Aplicamos el className a la sección */}
			<div className='flex flex-col md:flex-row text-black w-5/6 md:w-11/12 justify-center items-center gap-5 mx-auto my-8'>
				{data.map((clase, index) => (
					<div
						key={index}
						className={`flex flex-col w-full mx-auto mt-4 md:mt-0 h-[26rem] rounded-3xl rounded-b-none`}
					>
						<h2

							className={`text-md font-bold ${agba.className} ${className} md:w-4/6 w-1/3 text-center md:text-left md:pl-6 rounded-3xl rounded-b-none p-2 pl-4`}

						>
							{clase.tab}
						</h2>
						<div

							className={`flex-1 ${className} border-none rounded-3xl rounded-tl-none p-6 flex flex-col`}

						>
							<p className='font-black text-2xl'>
								{clase.title}
							</p>
							<div className='items-container flex-1'>
								{clase.items.map((item, itemIndex) => (
									<div
										key={itemIndex}
										className='text-black py-3 flex justify-start items-center'
									>
										<span className='icon text-lg'>
											{item.icon}
										</span>
										<span className=' ml-2 font-semibold'>
											{item.item}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ListadoClasesHibridas;
