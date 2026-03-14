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
		id: 'lab-2',
		title: 'Programación creativa con JavaScript',
		description:
			'Proyecto realizado en JavaScript del curso Programación creativa con JavaScript, se trata de piezas visuales generadas con código, utilizando la etiqueta canvas de HTML5, se pueden encontrar diferentes piezas visuales con diferentes técnicas y estilos, el objetivo es experimentar con el código para crear piezas visuales interesantes.',
		thumbnail:
			'https://res.cloudinary.com/denebv283c/image/upload/v1773450837/piezas_visuales/468607_hnyktw.png',
		images: [
            'https://res.cloudinary.com/denebv283c/image/upload/v1773450837/piezas_visuales/468607_hnyktw.png',
			'https://res.cloudinary.com/denebv283c/image/upload/v1773450836/piezas_visuales/468601_rgx4ih.png',
            'https://res.cloudinary.com/denebv283c/image/upload/v1773450836/piezas_visuales/468602_oxfxbt.png',
            'https://res.cloudinary.com/denebv283c/image/upload/v1773450837/piezas_visuales/468606_d7uqmq.png',
            'https://res.cloudinary.com/denebv283c/image/upload/v1773450837/piezas_visuales/468603_vynoku.png',
            'https://res.cloudinary.com/denebv283c/image/upload/v1773450837/piezas_visuales/468604_viaiky.png',
            'https://res.cloudinary.com/denebv283c/image/upload/v1773450837/piezas_visuales/468605_dx5kxa.png',
            'https://res.cloudinary.com/denebv283c/image/upload/v1773450837/piezas_visuales/468608_xfjxb9.png',
            'https://res.cloudinary.com/denebv283c/image/upload/v1773450838/piezas_visuales/468609_lcw2v5.png',
		],
		technologies: ['JavaScript', 'Canvas', 'HTML5','Nodejs'],
		githubUrl: 'https://github.com/Altair343/piezas_visuales',
		year: '2026',
	},

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