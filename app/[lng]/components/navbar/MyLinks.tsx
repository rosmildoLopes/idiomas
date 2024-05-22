const links = [
	{
			name: 'CURSOS',
			submenu: true,
			sublinks: [
					{
							Head: 'Marketing',
							sublink: [
									{ name: 'Marketing Digital', link: '/marketing' },
									{ name: 'Marketing Político', link: '/marketingPolitico' },
									{ name: 'Community Management', link: '/communityManagement' },
									{ name: 'Google Ads', link: '/googleAds' },
							],
					},
					{
							Head: 'Project Management',
							sublink: [
									{ name: 'Project Management', link: '/projectManagement' },
									{ name: 'Project Management Asicrónico', link: '/projectManagementAsincronico' },
									{ name: 'Certificaciones PMI', link: '/certificacionesPmi' },
							],
					},
					{
							Head: 'Desarrollo',
							sublink: [
									{ name: 'Fullstack', link: '/fullstack' },
									{ name: 'Frontend', link: '/frontend' },
									{ name: 'Backend', link: '/backend' },
							],
					},
					{
							Head: 'Seguridad',
							sublink: [
									{ name: 'Ciberseguridad', link: '/ciberseguridad' },
							],
					},
			],
	},
];

export default links;
