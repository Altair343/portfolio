export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	images?: string[];
	technologies: string[];
	githubUrl?: string;
	liveUrl?: string;
	featured?: boolean;
}

export const projects: Project[] = [
    {
        id: 'project-1',
        title: 'Skip required fields Odoo',
        description: 'Módulo desarrollado para Odoo, permite omitir la validación de campos obligatorios al hacer clic en el botón de acción.',
        image: 'https://res.cloudinary.com/denebv283c/image/upload/v1772292963/imgPortafolio/odoo/skip_required_fields_ip6qzf.png',
        images: ['https://res.cloudinary.com/denebv283c/image/upload/v1772292963/imgPortafolio/odoo/skip_required_fields_ip6qzf.png'],
        technologies: ['Python', 'JavaScript', 'XML','Odoo 13','Odoo 19'],
        githubUrl: 'https://github.com/Altair343/skip_required_fields',
        // liveUrl: 'https://project2.example.com',
        featured: true,
    },
	{
		id: 'project-2',
		title: 'Binary file reset Odoo',
		description: 'Módulo desarrollado para Odoo 13, permite que se active el método onchange cuando se vuelve a cargar un archivo con el mismo nombre y su contenido ha cambiado después de hacer clic en Seleccionar en un campo binario.',
		image: 'https://res.cloudinary.com/denebv283c/image/upload/v1772292678/imgPortafolio/odoo/binary_file_reset_vxrzk7.png',
		images: ['https://res.cloudinary.com/denebv283c/image/upload/v1772292678/imgPortafolio/odoo/binary_file_reset_vxrzk7.png','https://raw.githubusercontent.com/Altair343/binary_file_reset/refs/heads/13/static/src/img/img.PNG'],
		technologies: ['Python', 'JavaScript', 'XML','Odoo 13'],
		githubUrl: 'https://github.com/Altair343/binary_file_reset',
		featured: true,
	},



	{
		id: 'project-798',
		title: 'Sistema web Vazztec',
		description: 'Vazztec es una empresa Campechana que ofrece soporte, mantenimiento y reparación de equipos de cómputo y móviles. Se le desarrolló un sistema web, para el control del registro de sus servicios y clientes',
		image: 'https://res.cloudinary.com/denebv283c/image/upload/v1618341372/imgPortafolio/Vazztec/vazztec-min_lpe9fo.png',
		images: ['https://res.cloudinary.com/denebv283c/image/upload/v1618340725/imgPortafolio/Vazztec/Vacctec-img1_xpqedg.png', 'https://res.cloudinary.com/denebv283c/image/upload/v1618340726/imgPortafolio/Vazztec/Vacctec-img2_dzkseo.png', 'https://res.cloudinary.com/denebv283c/image/upload/v1618340727/imgPortafolio/Vazztec/Vacctec-img3_sgqkbj.png'],
		technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap','SCSS'],
		featured: false,
	},
	{
		id: 'project-799',
		title: 'CRUD de notas con Laravel',
		description: 'Proyecto para guardar notas, se pueden crear, editar, archivar y eliminar las notas, las notas se pueden filtrar por dos tipos o mostrar todas.',
		image: 'https://res.cloudinary.com/denebv283c/image/upload/v1612547834/imgPortafolio/CRUd-Notes-Laravel/Notes-min_fczfkz.png',
		images: ['https://res.cloudinary.com/denebv283c/image/upload/v1612547841/imgPortafolio/CRUd-Notes-Laravel/Notes-img1_aitxwm.png', 'https://res.cloudinary.com/denebv283c/image/upload/v1612547846/imgPortafolio/CRUd-Notes-Laravel/Notes-img2_geyeq7.png','https://res.cloudinary.com/denebv283c/image/upload/v1612547852/imgPortafolio/CRUd-Notes-Laravel/Notes-img3_njgecy.png'],
		technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap','SCSS'],
		githubUrl: 'https://github.com/Altair343/CRUD-Laravel',
		featured: false,
	},
	{
		id: 'project-800',
		title: 'Sistema Web Catazajá',
		description: 'Sistema web desarrollado como proyecto de residencia profesional para el municipio de Catazajá Chiapas. Siguiendo el patrón MVC.',
		image: 'https://res.cloudinary.com/denebv283c/image/upload/v1612421435/imgPortafolio/Catazaja/catazaja-min_w3iphl.png',
		images: ['https://res.cloudinary.com/denebv283c/image/upload/v1612545176/imgPortafolio/Catazaja/catazaja-img1_wbbjfb.png'],
		technologies: ['PHP', 'HTML', 'JavaScript', 'Axios', 'SCSS'],
		featured: false,
	},
];
