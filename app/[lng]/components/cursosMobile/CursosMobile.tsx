// CursosMobile.tsx
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface Curso {
	id: number;
	nombre: string;
	action: Categoria;
}

type Categoria =
	| 'desarrollo'
	| 'marketing'
	| 'projectManagement'
	| 'seguridadYData'
	| 'idiomas';

interface Props {
	onCategoriaClick: (categoria: Categoria) => void;
}

const botonesCursos: Curso[] = [
	{
		id: 1,
		nombre: 'Desarrollo',
		action: 'desarrollo',
	},
	{
		id: 2,
		nombre: 'Marketing',
		action: 'marketing',
	},
	{
		id: 3,
		nombre: 'Project Management',
		action: 'projectManagement',
	},
	{
		id: 4,
		nombre: 'Seguridad y Data',
		action: 'seguridadYData',
	},
	{
		id: 5,
		nombre: 'Idiomas',
		action: 'idiomas',
	},
];

const CursosMobile: React.FC<Props> = ({
	onCategoriaClick,
}) => {
	const [emblaRef] = useEmblaCarousel({ loop: false });

	return (
		<div className='embla__viewport pl-3' ref={emblaRef}>
			<div className='embla__container space-x-5 md:hidden'>
				{botonesCursos.map(curso => (
					<div key={curso.id} className='embla__slide'>
						<button
							className='embla__slide__number px-7 py-2 font-black rounded-3xl text-firstBlue border-2 border-firstBlue active:bg-firstBlue active:text-black'
							onClick={() => onCategoriaClick(curso.action)}
						>
							{curso.nombre}
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default CursosMobile;
