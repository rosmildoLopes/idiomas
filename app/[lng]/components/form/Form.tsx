'use client';
import React, {
	useState,
	useEffect,
	useCallback,
} from 'react';
import { TbCaretDown } from 'react-icons/tb';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import Marketing from '../marketing/page';

interface FormData {
	curso: string;
	name: string;
	mail: string;
	message: string;
}

const Form: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		mode: 'onChange',
	});

	const onSubmit = (data: FormData) => {
		console.log('payload', data);
	};

	return (
		<div className='flex flex-col gap-6  w-11/12 lg:w-1/2 mx-auto'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col gap-6 text-firstBlue font-semibold'
			>
				<div className='border-violet-container rounded-3xl '>
					<select
						{...register('curso')}
						className='w-full border-violet text-firstBlue font-black rounded-2xl  outline-none appearance-none'
					>
						<option
							value=''
							className='bg-firstBackground text-firstBlue font-semibold  text-md flex'
						>
							Seleccioná la diplomatura o curso de tu
							interés
						</option>
						<option
							value=''
							className='bg-firstBackground font-semibold text-md'
						>
							Marketing
						</option>
						<option
							value=''
							className='bg-firstBackground font-semibold text-md'
						>
							Ciberseguridad
						</option>
						<option
							value=''
							className='bg-firstBackground font-semibold text-md'
						>
							Fullstack
						</option>
						<option
							value=''
							className='bg-firstBackground font-semibold text-md'
						>
							Project Management
						</option>
					</select>
				</div>
				<div className='w-full flex flex-col gap-6 '>
					<div className='border-violet-container rounded-3xl'>
						<input
							type='text'
							className='border-violet rounded-3xl placeholder:text-firstBlue placeholder:font-extrabold outline-none'
							placeholder='Nombre completo *'
						></input>
					</div>
					<div className='border-violet-container rounded-3xl '>
						<input
							type='email'
							className='border-violet rounded-3xl placeholder:text-firstBlue placeholder:font-extrabold outline-none'
							placeholder='Email *'
						></input>
					</div>
					<div className='border-violet-container rounded-3xl'>
						<textarea
							className='pl-3 pt-2 resize-none bg-transparent w-full border-violet rounded-3xl placeholder:text-firstBlue placeholder:font-extrabold outline-none h-32'
							placeholder='Escribí tu mensaje...'
						></textarea>
					</div>
				</div>
				<div className='w-full flex justify-center lg:justify-end'>
					<button
						type='submit'
						className=' flex justify-center items-center bg-firstBlue hover:scale-125 transition duration-500 font-black text-black rounded-full px-16 lg:px-16 py-3 w-auto lg:w-1/2'
					>
						Enviar mensaje
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
