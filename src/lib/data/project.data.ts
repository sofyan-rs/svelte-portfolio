import type { IProject } from '../types/project.type';

export const projects: IProject[] = [
	{
		title: 'Yoru',
		type: 'Mobile Application',
		description:
			'A comic reader for manga, manhwa, and manhua on Android, iOS, and desktop. Formerly BacaKomik.',
		image: 'yoru.webp',
		link: 'https://yoru.kurodev.org',
		git: 'https://github.com/sofyan-rs/yoru-comic-app',
		techUsed: ['Flutter']
	},
	{
		title: 'Dotnote',
		type: 'Desktop Application',
		description: 'A minimal markdown notes app for desktop that keeps your notes as plain files.',
		image: 'dotnote.webp',
		link: 'https://github.com/sofyan-rs/dotnote-gpui/releases/latest',
		git: 'https://github.com/sofyan-rs/dotnote-gpui',
		techUsed: ['Rust', 'GPUI']
	},
	{
		title: 'Dotnote for Android',
		type: 'Mobile Application',
		description: 'The Android version of Dotnote for writing and editing markdown notes on the go.',
		image: 'dotnote-android.webp',
		link: 'https://github.com/sofyan-rs/dotnote/releases/latest',
		git: 'https://github.com/sofyan-rs/dotnote',
		techUsed: ['Kotlin', 'Jetpack Compose']
	},
	{
		title: 'KuVault',
		type: 'Desktop Application',
		description: 'A game library and launcher for Windows that keeps all your games in one place.',
		image: 'kuvault.webp',
		link: 'https://github.com/sofyan-rs/kuvault/releases/latest',
		git: 'https://github.com/sofyan-rs/kuvault',
		techUsed: ['Tauri', 'ReactJS', 'Rust']
	},
	{
		title: 'Moestream',
		type: 'Mobile Application',
		description: 'An anime streaming app for Android.',
		image: 'moestream.webp',
		link: 'https://github.com/sofyan-rs/moestream/releases',
		git: 'https://github.com/sofyan-rs/moestream',
		techUsed: ['React Native', 'Expo', 'Uniwind']
	},
	{
		title: 'KanaChat',
		type: 'Mobile Application',
		description: 'An open-source AI chatbot app powered by Google Vertex AI.',
		image: 'kanachat.webp',
		link: 'https://github.com/sofyan-rs/kanachat/releases',
		git: 'https://github.com/sofyan-rs/kanachat',
		techUsed: ['Flutter', 'Firebase']
	},
	{
		title: 'MyCalculator',
		type: 'Mobile Application',
		description: 'A simple, open-source calculator app.',
		image: 'mycalculator.webp',
		link: 'https://github.com/sofyan-rs/mycalculator/releases',
		git: 'https://github.com/sofyan-rs/mycalculator',
		techUsed: ['Flutter']
	},
	{
		title: 'Tantri POS - Mobile App',
		type: 'Mobile Application',
		description:
			'A point-of-sale app for restaurants and cafes to take and manage orders on the go.',
		image: 'tantri-pos-mobile-app.webp',
		link: 'https://play.google.com/store/apps/details?id=com.tantriapp',
		git: null,
		techUsed: ['React Native', 'Uniwind']
	},
	{
		title: 'Tantri Inventory Scanner - Mobile App',
		type: 'Mobile Application',
		description: 'A scanner app for checking incoming stock by scanning invoice QR codes.',
		image: 'tantri-scanner.webp',
		link: 'https://play.google.com/store/apps/details?id=com.tantri.scanner',
		git: null,
		techUsed: ['React Native', 'Uniwind']
	},
	{
		title: 'Tantri Kitchen Display System',
		type: 'Web Development',
		description:
			'A kitchen screen that shows incoming orders in real time so staff can track what to cook next.',
		image: 'tantri-kitchen-display.webp',
		link: null,
		git: null,
		techUsed: ['SvelteKit', 'TailwindCSS']
	},
	{
		title: 'Tantri POS - Web App',
		type: 'Web Development',
		description:
			'A web-based point-of-sale system for restaurants and cafes to manage orders and sales.',
		image: 'tantri-pos-web-app.webp',
		link: 'https://kasir.tantri.id/',
		git: null,
		techUsed: ['ReactJS', 'TailwindCSS']
	},
	{
		title: 'Tantri QR Menu - Online Order',
		type: 'Web Development',
		description:
			'A digital menu where customers scan a QR code to browse and order from their table.',
		image: 'tantri-menu.webp',
		link: 'https://menu.tantri.id/',
		git: null,
		techUsed: ['ReactJS', 'TailwindCSS']
	}
];
