<script lang="ts">
	import About from '$lib/components/home/about.svelte';
	import Projects from '$lib/components/home/projects.svelte';
	import Skills from '$lib/components/home/skills.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import Header from '$lib/components/layout/header.svelte';
</script>

<Header />
<About />
<div class="absolute top-0 right-0 left-0">
	<div class="mt-[100dvh]">
		<Skills />
		<Projects />
		<Footer />
	</div>
</div>
