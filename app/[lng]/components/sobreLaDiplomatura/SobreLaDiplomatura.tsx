'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TbCaretDown } from 'react-icons/tb';
import { faqs } from '../constants/faqs';
import { agba, titan } from '../../font/font';

interface FAQItem {
	question: string;
	answer: string;
}

interface FAQProps {
	faqs: FAQItem[];
}

const Faq: React.FC<FAQProps> = ({ faqs }) => {
	const [openIndex, setOpenIndex] = useState<number | null>(
		null,
	);

	const handleToggle = (index: number) => {
		setOpenIndex(prevIndex =>
			prevIndex === index ? null : index,
		);
	};

	return (
		<div className='text-white flex flex-col w-full justify-center items-center'>
			{faqs.map((faq, index) => (
				<div
					key={index}
					className={`faq-item w-11/12 md:w-7/12 my-4 md:my-0`}
				>
					<div
						className={`faq-question ${
							agba.className
						} hover:text-pink-500 w-11/12 mx-auto transition duration-300 cursor-pointer border-b mb- lg:mb- md:p-5 flex justify-start gap-5 items-center  ${
							openIndex === index
								? 'open text-violet-gradient'
								: ''
						}`}
						onClick={() => handleToggle(index)}
					>
						<motion.p
							initial={false}
							animate={{
								rotate: openIndex === index ? 180 : 0,
							}}
							transition={{ duration: 1 }}
							className='text-2xl'
						>
							<TbCaretDown />
						</motion.p>
						<p className='text-xl'>{faq.question}</p>
					</div>
					<AnimatePresence>
						{openIndex === index && (
							<motion.div
								initial={{ opacity: 0, height: 'auto' }}
								animate={{ opacity: 1, height: 'auto' }}
								transition={{ duration: 0.5 }}
								exit={{ opacity: 0, height: 'auto' }}
								className='faq-answer p-12 shadow-md h-auto text-white text-center w-11/12 mx-auto leading-loose font-bold bg-firstBackgroundBackground/80 shadow-violet-800 rounded-2xl'
							>
								{faq.answer}
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			))}
		</div>
	);
};

export default Faq;
