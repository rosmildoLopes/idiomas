import React from 'react';
import blogData from '../constants/blogData';
import Link from 'next/link';
import { agba } from '../font/font';
import Image from 'next/image';

const BlogCards = () => {
	return (
		<div className='w-11/12 mx-auto py-8 relative'>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-12'>
				{blogData.map(blog => (
					<div
						key={blog.id}
						className='p-4 rounded-2xl bg-thirdBlue relative hover:scale-110 transition duration-500'
					>
						<p className='text-sm text-black font-medium mb-2 px-3 text-end italic'>
							{blog.date}
						</p>
						<img
							src={blog.image}
							alt={blog.title}
							className='mb-2 p-2'
						/>
						<h2
							className={`${agba.className} text-center text-2xl text-firstGreen  pb-2 font-bold mb-2`}
						>
							{blog.title}
						</h2>
						<div className='bg-firstGreen h-0.5 w-8/12 mx-auto mb-4' />
						<p className='text-xs mb-12 text-center text-white px-3'>
							{blog.content}
						</p>
						<Link
							href={blog.link}
							className='absolute translate-x-1 md:translate-x-4 md:-bottom-5 text-black text-center bg-firstBlue font-black w-10/12 mx-auto px-7 py-3 rounded-full hover:underline'
						>
							Ver nota completa
						</Link>
					</div>
				))}
			</div>
			<Image
				src={'./greenStar.svg'}
				alt='Icon'
				width={150.36}
				height={163.7}
				className='absolute w-12 -left-6 top-20 md:w-20  md:-left-12 md:bottom-96'
			/>
			<Image
				src={'./violetStar.svg'}
				alt='Icon'
				width={150.36}
				height={163.7}
				className='absolute w-12 -right-8 bottom-96 md:w-20  md:-right-16 md:top-96'
			/>
		</div>
	);
};

export default BlogCards;
