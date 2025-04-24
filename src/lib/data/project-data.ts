import type { ProjectType } from '$lib/types/project.type';

export const myProjects: ProjectType[] = [
	{
		title: 'Kana Quest',
		type: 'Web Development',
		description:
			'Kana Quest is a web to test your knowledge in Japanese Hiragana, Katakana, and Kanji.',
		image: 'kana-quest.webp',
		link: 'https://kana-quest.netlify.app/',
		git: 'https://github.com/sofyan-rs/kana-quest',
		techUsed: ['Sveltekit', 'TailwindCSS']
	},
	{
		title: 'BacaKomik V2 - Mobile Apps',
		type: 'Mobile Application',
		description:
			'BacaKomik is a mobile application for reading manga that I create after learning Dart & Flutter.',
		image: 'bacakomik-app-v2.webp',
		link: 'https://github.com/sofyan-rs/bacakomik-app-release/releases',
		git: 'https://github.com/sofyan-rs/bacakomik-app-release',
		techUsed: ['Flutter', 'Firebase']
	},
	{
		title: 'Tantri Inventory Scanner - Mobile Apps',
		type: 'Mobile Application',
		description:
			'Mobile App for QR Scanner Invoice that used in inventory in BackOffice. Created using React Native',
		image: 'tantri-scanner-app.webp',
		link: 'https://play.google.com/store/apps/details?id=com.tantri.scanner',
		git: null,
		techUsed: ['React Native', 'Nativewind']
	},
	{
		title: 'Tantri POS - Mobile Apps',
		type: 'Mobile Application',
		description:
			'Mobile App Version of Tantri POS System for managing Online Order for restaurants, cafes, and other culinary businesses. Created using React Native.',
		image: 'tantri-mobile-app.webp',
		link: 'https://play.google.com/store/apps/details?id=com.tantriapp',
		git: null,
		techUsed: ['React Native', 'Nativewind']
	},
	{
		title: 'BacaKomik - Mobile Apps',
		type: 'Mobile Application',
		description:
			'BacaKomik is a mobile application for reading manga which I create when I am bored and want to learn about React Native Features.',
		image: 'bacakomik-app.webp',
		link: 'https://drive.google.com/drive/u/0/folders/1fI_wmyeoz70qmBxqN3ruha-yblToVmQ0',
		git: null,
		techUsed: ['React Native', 'Nativewind', 'Firebase']
	},
	{
		title: 'Tantri - QR Menu Online Order',
		type: 'Web Development',
		description:
			'Tantri QR Menu is a QR Menu Online Order for restaurants, cafes, and other culinary businesses. Created using using React.js and TailwindCSS.',
		image: 'menu-tantri.webp',
		link: 'https://menu.tantri.id/',
		git: null,
		techUsed: ['ReactJS', 'TailwindCSS']
	},
	{
		title: 'Tantri Kitchen Display System',
		type: 'Web Development',
		description:
			'Tantri Kitchen Display is a website designed for kitchen management, displaying real-time lists of orders currently being processed. It serves as an efficient tool for monitoring and coordinating kitchen activities during food preparation.',
		image: 'tantri-kitchen-display.webp',
		link: null,
		git: null,
		techUsed: ['Sveltekit', 'TailwindCSS']
	},
	{
		title: 'SSD Finance',
		type: 'Web Development',
		description:
			'SSD Finance is a website for managing financial and cashflow reports for the Sasana Digital Company. Created using ReactJS and AntDesign.',
		image: 'sasana-finance.webp',
		link: null,
		git: null,
		techUsed: ['ReactJS', 'TailwindCSS', 'Ant Design']
	},
	{
		title: 'Tantri - Company Profile',
		type: 'Web Development',
		description:
			'Tantri is a sub business of Sasana Digital which operates in the field of online order management system for restaurants, cafes, and other culinary businesses. Created using Next.js and TailwindCSS.',
		image: 'tantri-id.webp',
		link: 'https://tantri.id/',
		git: null,
		techUsed: ['Next.js', 'TailwindCSS']
	},
	{
		title: 'Tantri - Super Admin Dashboard',
		type: 'Web Development',
		description:
			'Tantri Super Admin is a Dashboard for manage all restaurants or cafes who registered in Tantri. Created using React.js and TailwindCSS.',
		image: 'super-admin-tantri.webp',
		link: null,
		git: null,
		techUsed: ['Next.js', 'TailwindCSS', 'Ant Design']
	},
	{
		title: 'Tantri - POS System',
		type: 'Web Development',
		description:
			'Tantri POS is a POS System for managing Online Order for restaurants, cafes, and other culinary businesses. Created using React.js and TailwindCSS.',
		image: 'kasir-tantri.webp',
		link: 'https://kasir.tantri.id/',
		git: null,
		techUsed: ['ReactJS', 'TailwindCSS']
	},
	{
		title: 'Pokedex App',
		type: 'Web Development',
		description: 'Simple Pokedex website created using ReactJS and PokeAPI.',
		image: 'react-pokedex-app.webp',
		link: 'https://pokedex-kdevz.netlify.app/',
		git: 'https://github.com/sofyan-rs/pokedex-react',
		techUsed: ['ReactJS', 'TailwindCSS']
	},
	{
		title: 'Z-Stream',
		type: 'Web Development',
		description: 'Theme Wordpress for Streaming & Download Anime Website.',
		image: 'z-stream.webp',
		link: null,
		git: null,
		techUsed: ['Wordpress']
	},
	{
		title: 'Z-Manga',
		type: 'Web Development',
		description: 'Theme Wordpress for Reading Manga Website.',
		image: 'z-manga.webp',
		link: null,
		git: null,
		techUsed: ['Wordpress']
	},
	{
		title: 'Z-Novel',
		type: 'Web Development',
		description: 'Theme Wordpress for Reading Novel Website.',
		image: 'z-novel.webp',
		link: null,
		git: null,
		techUsed: ['Wordpress']
	}
];
