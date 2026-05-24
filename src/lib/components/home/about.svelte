<script lang="ts">
	// Typewriter is non-critical — dynamically imported on mount to defer JS
	import { onMount } from 'svelte';
	import type { SvelteComponentTyped } from 'svelte';
	import type { IOptions, RecursivePartial, Engine } from '@tsparticles/engine';
	import { loadSlim } from '@tsparticles/slim';
	import { particlesConfig } from '$lib/data/particles';
	import { aboutMe, myInfo } from '$lib/data/info-data';

	const roles = myInfo.roles;
	const typedParticlesConfig = particlesConfig as RecursivePartial<IOptions>;

	let ParticlesComponent: typeof SvelteComponentTyped | null = null;
	let showParticles = false;
	let TypewriterComponent: typeof SvelteComponentTyped | null = null;

	type ParticlesModule = {
		default?: typeof SvelteComponentTyped;
		particlesInit?: (initFn: (engine: Engine) => Promise<void> | void) => Promise<void> | void;
	};

	onMount(async () => {
		if (typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches) {
			const mod = (await import('@tsparticles/svelte')) as ParticlesModule;
			ParticlesComponent = mod.default ?? null;
			const init =
				mod.particlesInit ??
				(async (fn: (engine: Engine) => Promise<void> | void) =>
					fn(undefined as unknown as Engine));
			await init(async (engine: Engine) => {
				await loadSlim(engine);
			});
			showParticles = true;
		}
		// Dynamically load the typewriter component after mount (defers its JS)
		try {
			const tw = await import('svelte-typewriter');
			TypewriterComponent = (tw.default ?? null) as unknown as typeof SvelteComponentTyped;
		} catch {
			TypewriterComponent = null;
		}
	});
</script>

<section id="about" class="relative bg-gradient-to-r from-neutral-900 to-blue-950 text-neutral-300">
	<div class="relative container mx-auto flex min-h-[100dvh] items-center overflow-hidden px-5">
		<div class="z-20 flex items-center justify-between lg:gap-20">
			<div class="">
				<h1 class="mb-1 text-lg font-medium text-blue-500 lg:text-2xl">Hi, I am {myInfo.name}</h1>
				{#if TypewriterComponent}
					<svelte:component this={TypewriterComponent} mode="loop" wordInterval={2000}>
						{#each roles as role (role)}
							<h2 class="mb-3 text-3xl font-semibold lg:text-5xl">{role}</h2>
						{/each}
					</svelte:component>
				{:else}
					{#each roles as role (role)}
						<h2 class="mb-3 text-3xl font-semibold lg:text-5xl">{role}</h2>
					{/each}
				{/if}
				<p class="text-base text-neutral-400 lg:text-lg">{aboutMe}</p>
			</div>
			<div class="flex-none animate-pulse">
				<img
					src="/img/pp/tanaka-kun.jpg"
					alt="Tanaka Kun"
					class="pointer-events-none hidden h-56 w-56 rounded-full object-cover object-top md:block lg:h-96 lg:w-96"
				/>
			</div>
		</div>
		{#if showParticles && ParticlesComponent}
			<svelte:component
				this={ParticlesComponent}
				id="tsparticles"
				class="absolute top-0 left-0 h-[100dvh] w-full"
				options={typedParticlesConfig}
			/>
		{/if}
	</div>
	<div class="absolute right-0 bottom-10 left-0 flex justify-center">
		<div class="flex h-10 w-7 justify-center rounded-full border-2 border-white/40 pt-1">
			<div class="scrolling"></div>
		</div>
	</div>
</section>
