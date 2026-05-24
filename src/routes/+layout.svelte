<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Sofyan RS — Mobile & Frontend Developer</title>
	<meta
		name="description"
		content="Portfolio of Sofyan Rudiana Syamsi, a Mobile and Frontend Developer focused on building modern, scalable, and user-friendly digital experiences for mobile and web platforms."
	/>
	<meta
		name="keywords"
		content="Sofyan RS, Sofyan Rudiana Syamsi, Mobile Developer, Frontend Developer, React Native Developer, Flutter Developer, ReactJS, Next.js, Svelte, Vue.js, Nuxt, Web Developer, Indonesia Developer"
	/>
	<meta name="author" content="Sofyan Rudiana Syamsi" />
	<meta name="robots" content="index, follow" />
	<!-- Open Graph -->
	<meta property="og:title" content="Sofyan RS — Mobile & Frontend Developer" />
	<meta
		property="og:description"
		content="Portfolio of Sofyan Rudiana Syamsi, a Mobile and Frontend Developer focused on building modern, scalable, and user-friendly digital experiences for mobile and web platforms."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sofyan.id" />
	<meta property="og:image" content="https://sofyan.id/img/og/og-image.png" />
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Sofyan RS — Mobile & Frontend Developer" />
	<meta
		name="twitter:description"
		content="Portfolio of Sofyan Rudiana Syamsi, a Mobile and Frontend Developer focused on building modern, scalable, and user-friendly digital experiences for mobile and web platforms."
	/>
	<meta name="twitter:image" content="https://sofyan.id/img/og/og-image.png" />
	<link rel="canonical" href="https://sofyan.id" />
</svelte:head>

<ModeWatcher defaultMode="light" />
{@render children()}
