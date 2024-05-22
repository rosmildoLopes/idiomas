import { agba, titan } from '../../font/font';
import Image from 'next/image';

const SubHeroOne = () => {
	return (
		<div className='relative flex justify-center'>
			<div className='grid text-center text-white'>
				<h2
					className={`${titan.className} md:text-4xl text-2xl`}
				>
					TITULOTITULOTITULO
				</h2>
				<h4
					className={`${agba.className} md:text-2xl text-base`}
				>
					SubtituloSubtituloSubtituloSubtitulo
				</h4>
				<p className='md:text-base py-6 text-xs px-3'>
					(ACÁ UN TEXTO DIFERENTE) Nuestros cursos cuentan
					con{' '}
					<strong>
						certificado de extensión <br /> universitaria
					</strong>
					y <strong> título de Diplomatura </strong>,
					cumpliendo con todos los estándares y <br />{' '}
					requisitos oficiales. También nos acompañan las
					principales plataformas.
				</p>
			</div>
			<div>
				<Image
					src={'./subHeroOneIcon.svg'}
					alt='Icon'
					width={203.51}
					height={183.31}
					className='hidden absolute md:w-[203px] md:h-[183px] md:bottom-1 md:block'
				/>
				<Image
					src={'./subHeroOneIconMobile.svg'}
					alt='Icon'
					width={203.51}
					height={183.31}
					className='absolute w-[59px] h-[57px] top-36 right-2 md:hidden'
				/>
			</div>
		</div>
	);
};

export default SubHeroOne;
