<script lang="ts">
	import { skills } from '$lib/data/skill.data';
	import { CodeXml } from 'lucide-svelte';

	let { selectedTech = $bindable() }: { selectedTech: string | null } = $props();

	const toggle = (tech: string) => {
		selectedTech = selectedTech === tech ? null : tech;
	};
</script>

<section
	class="mb-10 rounded-xl border border-[#262626] bg-[#111113] p-5 transition-all duration-300 md:p-6"
>
	<div class="mb-4 flex items-center gap-2">
		<CodeXml class="h-4 w-4 text-blue-400" />

		<h3 class="font-mono text-xs font-bold tracking-wider text-white uppercase">
			ENGINEERING_STACK_EXPLORER
		</h3>
	</div>

	<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
		<!-- Languages -->
		<div>
			<span class="mb-2 block font-mono text-[9.5px] text-[#838383] uppercase">Languages</span>
			<div class="flex flex-wrap gap-1.5">
				{#each skills.languages as tech (tech)}
					<button
						onclick={() => toggle(tech)}
						class={`cursor-pointer rounded border px-2 py-1 font-mono text-[11px] transition-all ${
							selectedTech === tech
								? 'border-purple-700/60 bg-purple-950/40 text-purple-300'
								: 'border-[#2d3139] bg-[#1a1c23] text-[#94a3b8] hover:border-zinc-700'
						}`}
					>
						{tech}
					</button>
				{/each}
			</div>
		</div>

		<!-- Mobile -->
		<div>
			<span class="mb-2 block font-mono text-[9.5px] text-[#838383] uppercase"
				>Mobile Development</span
			>
			<div class="flex flex-wrap gap-1.5">
				{#each skills.mobile as tech (tech)}
					<button
						onclick={() => toggle(tech)}
						class={`cursor-pointer rounded border px-2 py-1 font-mono text-[11px] transition-all ${
							selectedTech === tech
								? 'border-blue-700/60 bg-blue-950/40 text-blue-400'
								: 'border-[#2d3139] bg-[#1a1c23] text-[#94a3b8] hover:border-zinc-700'
						}`}
					>
						{tech}
					</button>
				{/each}
			</div>
		</div>

		<!-- Frontend -->
		<div>
			<span class="mb-2 block font-mono text-[9.5px] text-[#838383] uppercase"
				>Frontend Development</span
			>
			<div class="flex flex-wrap gap-1.5">
				{#each skills.frontend as tech (tech)}
					<button
						onclick={() => toggle(tech)}
						class={`cursor-pointer rounded border px-2 py-1 font-mono text-[11px] transition-all ${
							selectedTech === tech
								? 'border-emerald-700/60 bg-emerald-950/40 text-emerald-300'
								: 'border-[#2d3139] bg-[#1a1c23] text-[#94a3b8] hover:border-zinc-700'
						}`}
					>
						{tech}
					</button>
				{/each}
			</div>
		</div>

		<!-- Backend -->
		<div>
			<span class="mb-2 block font-mono text-[9.5px] text-[#838383] uppercase"
				>Backend & Database</span
			>
			<div class="flex flex-wrap gap-1.5">
				{#each skills.backend as tech (tech)}
					<button
						onclick={() => toggle(tech)}
						class={`cursor-pointer rounded border px-2 py-1 font-mono text-[11px] transition-all ${
							selectedTech === tech
								? 'border-rose-700/60 bg-rose-950/40 text-rose-300'
								: 'border-[#2d3139] bg-[#1a1c23] text-[#94a3b8] hover:border-zinc-700'
						}`}
					>
						{tech}
					</button>
				{/each}
			</div>
		</div>
	</div>
</section>
