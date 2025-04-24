<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Sofyan RS - My Portfolio</title>
	<meta name="description" content="Sofyan Rudiana Syamsi - Portfolio" />
</svelte:head>

<ModeWatcher />
{@render children()}
