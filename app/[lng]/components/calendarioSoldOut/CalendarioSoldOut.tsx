'use client';
import Image from 'next/image';
import React from 'react';
import { BiMoviePlay } from 'react-icons/bi';
import { MdScreenSearchDesktop } from 'react-icons/md';
import { PiBackpackBold } from 'react-icons/pi';
import { motion } from 'framer-motion';

interface CalendarioSoldOutProps {
	startDate: string;
	endDate: string;
	meetingDate: string;
	buttonText: string;
}
const buttonVariants = {
	hidden: {
		opacity: 1,
		backgroundColor: '#56AAFF',
	},
	visible: {
		opacity: 1,
		backgroundColor: '#324B5B',
	},
};
const imageVariants = {
	hidden: { opacity: 0, x: -1200, rotate: -360 },
	visible: { opacity: 1, x: 0, rotate: 0 },
};
const boxVariants = {
	hidden: {
		opacity: 1,
		backgroundColor: '#FFFFFF',
	},
	visible: {
		opacity: 1,
		backgroundColor: '#9CA3AF',
	},
};

const CalendarioMobileSoldOut: React.FC<
	CalendarioSoldOutProps
> = ({ startDate, endDate, meetingDate, buttonText }) => {
	return (
		<section className='w-11/12 mx-auto relative'>
			<div className='flex flex-col'>
				<motion.div
					variants={boxVariants}
					initial='hidden'
					whileInView='visible'
					transition={{ duration: 1.5 }}
					className='bg-gray-400 rounded-2xl flex flex-row justify-between items-center p-4 w-full'
				>
					<div className='w-1/4'>
						<div className='relative'>
							<div className='absolute flex -top-10 left-7'>
								<div className='flex gap-2 justify-center items-center'>
									<motion.div
										variants={buttonVariants}
										initial='hidden'
										whileInView='visible'
										transition={{ duration: 1.5 }}
										className='text-2xl bg-firstBlue rounded-full h-9 w-9 flex items-center justify-center shadow-lg shadow-slate-900'
									>
										<BiMoviePlay />
									</motion.div>
									<motion.div
										variants={buttonVariants}
										initial='hidden'
										whileInView='visible'
										transition={{ duration: 1.5 }}
										className='text-2xl bg-firstBlue rounded-full h-9 w-9 flex items-center justify-center shadow-lg shadow-slate-900'
									>
										<MdScreenSearchDesktop />
									</motion.div>
									<motion.div
										variants={buttonVariants}
										initial='hidden'
										whileInView='visible'
										transition={{ duration: 1.5 }}
										className='text-2xl bg-firstBlue rounded-full h-9 w-9 flex items-center justify-center shadow-lg shadow-slate-900'
									>
										<PiBackpackBold />
									</motion.div>
								</div>
							</div>
						</div>
						<div className='p-4 border-r-2 border-black w-full flex flex-col items-start pl-10'>
							<p className='font-extrabold'>Desde el:</p>
							<p className='font-black text-4xl'>
								{startDate}
							</p>
						</div>
					</div>
					<div className='flex w-3/4'>
						<div className='p-4 border-r-2 border-black w-1/3 flex flex-col items-start pl-12'>
							<p className='text-start font-extrabold'>
								Hasta el:
							</p>
							<p className='text-start font-black text-4xl'>
								{endDate}
							</p>
						</div>
						<div className='p-4 w-2/3 flex items-center justify-between'>
							<p className='ml-4 font-medium text-lg'>
								{meetingDate}
							</p>
							<button className='bg-[#324B5B] text-black font-black rounded-full px-10 py-3 flex items-center gap-4'>
								<p>{buttonText}</p>
								<Image
									src='down.svg'
									height={50}
									width={50}
									alt='flecha hacia inferior'
									className='w-5'
								/>
								<motion.div
									initial='hidden'
									variants={imageVariants}
									transition={{ duration: 1.5 }}
									whileInView='visible'
									viewport={{once:true}}
									className='w-56 absolute right-8'
								>
									<Image
										src='soldOut.svg'
										height={200}
										width={200}
										alt='cartel de Sold Out'
									/>
								</motion.div>
							</button>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default CalendarioMobileSoldOut;
