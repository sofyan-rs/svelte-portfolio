<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import Particles, { particlesInit } from '@tsparticles/svelte';
	import { loadSlim } from '@tsparticles/slim';
	import { particlesConfig } from '$lib/data/particles';
	import { aboutMe, myInfo } from '$lib/data/info-data';

	const roles = myInfo.roles;

	let onParticlesLoaded = (event: any) => {
		const particlesContainer = event.detail.particles;
	};

	void particlesInit(async (engine) => {
		await loadSlim(engine);
	});
</script>

<section id="home" class="relative bg-gradient-to-r from-neutral-900 to-blue-950 text-neutral-300">
	<div class="relative container mx-auto flex min-h-[100dvh] items-center overflow-hidden px-5">
		<div class="z-20">
			<h1 class="mb-1 text-lg font-medium text-blue-500 lg:text-2xl">Hi, I am {myInfo.name}</h1>
			<Typewriter mode="loop" wordInterval={2000}>
				{#each roles as role}
					<h2 class="mb-3 text-3xl font-semibold lg:text-5xl">{role}</h2>
				{/each}
			</Typewriter>
			<p class="text-base text-neutral-400 lg:max-w-3xl lg:text-lg">{aboutMe}</p>
		</div>
		<Particles
			id="tsparticles"
			class="absolute top-0 left-0 h-[100dvh] w-full"
			options={particlesConfig}
			on:particlesLoaded={onParticlesLoaded}
		/>
	</div>
	<div class="absolute right-0 bottom-10 left-0 flex justify-center">
		<div class="flex h-10 w-7 justify-center rounded-full border-2 border-white/40 pt-1">
			<div class="scrolling"></div>
		</div>
	</div>
</section>
