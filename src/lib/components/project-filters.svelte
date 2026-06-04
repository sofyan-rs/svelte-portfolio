<script lang="ts">
	import { Search, X } from 'lucide-svelte';

	let {
		selectedType = $bindable(),
		searchQuery = $bindable(),
		totalProjectsCount,
		mobileProjectsCount,
		webProjectsCount,
		backendProjectsCount
	}: {
		selectedType: 'All' | 'Mobile' | 'Web' | 'Backend';
		searchQuery: string;
		totalProjectsCount: number;
		mobileProjectsCount: number;
		webProjectsCount: number;
		backendProjectsCount: number;
	} = $props();

	const counts: Record<string, number> = $derived({
		All: totalProjectsCount,
		Mobile: mobileProjectsCount,
		Web: webProjectsCount,
		Backend: backendProjectsCount
	});
</script>

<section class="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
	<div class="flex flex-wrap gap-1.5 self-start sm:self-auto">
		{#each ['All', 'Mobile', 'Web', 'Backend'] as type (type)}
			<button
				onclick={() => (selectedType = type as typeof selectedType)}
				class={`cursor-pointer rounded border px-3 py-1.5 font-mono text-[11px] uppercase transition-all ${
					selectedType === type
						? 'border-white bg-white font-bold text-zinc-950'
						: 'border-[#262626] bg-[#111113] text-[#94a3b8] hover:border-zinc-700 hover:text-white'
				}`}
			>
				{type} ({counts[type]})
			</button>
		{/each}
	</div>

	<div class="relative w-full sm:max-w-xs">
		<Search class="absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-[#838383]" />

		<input
			bind:value={searchQuery}
			type="text"
			placeholder="SEARCH PROJECTS"
			class="w-full rounded border border-[#262626] bg-[#111113] py-2 pr-3.5 pl-9 font-mono text-xs text-zinc-200 uppercase placeholder-zinc-400 transition-all hover:border-zinc-800 focus:border-zinc-700 focus:outline-hidden"
		/>

		{#if searchQuery}
			<button
				onclick={() => (searchQuery = '')}
				class="absolute top-1/2 right-3 -translate-y-1/2 text-zinc-400 hover:text-white"
			>
				<X class="h-3.5 w-3.5" />
			</button>
		{/if}
	</div>
</section>
