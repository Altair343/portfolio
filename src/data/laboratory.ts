export interface LaboratoryEntry {
	id: string;
	title: string;
	description: string;
	thumbnail: string;
	images?: string[];
	technologies: string[];
	githubUrl?: string;
	liveUrl?: string;
	downloadUrl?: string;
	videoEmbedUrl?: string;
	year: string;
}

export const laboratoryEntries: LaboratoryEntry[] = [
	{
		id: 'lab-1',
		title: 'World-Jump',
		description:
			'Proyecto realizado en Unity del curso Creación de videojuegos de plataformas con Unity.',
		thumbnail:
			'https://imgproxy.domestika.org/unsafe/rs:fill/plain/src://content-items/005/263/683/Sem_t%C3%ADtulo-original.png?1595275390',
		images: [
			'https://imgproxy.domestika.org/unsafe/rs:fill/plain/src://content-items/005/263/683/Sem_t%C3%ADtulo-original.png?1595275390'
		],
		technologies: ['Unity', 'C#', 'Game Development'],
		liveUrl: 'https://altair343.github.io/World-Jump',
		year: '2021',
	},
];