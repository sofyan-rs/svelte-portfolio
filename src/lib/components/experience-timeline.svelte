<script lang="ts">
	import { experiences } from '$lib/data/experience.data';
	import { Briefcase } from 'lucide-svelte';
	import { reveal } from '$lib/utils/reveal';
</script>

<section class="mb-14 border-t border-[#262626] pt-8">
	<h2
		use:reveal
		class="mb-8 flex items-center gap-2 font-mono text-[10px] font-bold tracking-[0.2em] text-[#838383] uppercase"
	>
		<Briefcase class="h-4 w-4 text-zinc-400" />
		PROFESSIONAL_TIMELINE_DETAILS
	</h2>

	<div class="relative ml-2 space-y-10 border-l border-[#262626] pl-6">
		{#each experiences as exp, i (exp.role)}
			<div use:reveal={{ delay: i * 100, direction: 'left', distance: 16 }} class="group relative">
				<span
					class="absolute top-[7px] -left-[29px] h-2.5 w-2.5 rounded-full border border-[#262626] bg-[#111113] transition-all group-hover:border-blue-400 group-hover:bg-blue-500"
				></span>

				<div
					class="mb-2.5 flex flex-col items-start gap-1.5 md:flex-row md:items-center md:justify-between"
				>
					<div>
						<h3 class="text-base font-bold text-white transition-colors group-hover:text-blue-400">
							{exp.role}
						</h3>

						<span class="mt-0.5 block text-xs font-medium text-[#94a3b8]">
							{exp.company}
						</span>
					</div>

					<span
						class="rounded-sm border border-[#262626] bg-[#111113] px-2 py-0.5 font-mono text-[10px] text-zinc-400"
					>
						{exp.period}
					</span>
				</div>

				<p class="max-w-3xl text-xs leading-relaxed text-[#94a3b8]">
					{exp.description}
				</p>
			</div>
		{/each}
	</div>
</section>
