<script lang="ts">
	import type { IProject } from '$lib/types/project.type';
	import { Github, ExternalLink } from 'lucide-svelte';

	let { project }: { project: IProject } = $props();

	let imageError = $state(false);

	// Determine tag-specific styles based on technology
	const getTechTagStyle = (tech: string) => {
		const t = tech.toLowerCase();

		if (t.includes('react native')) return 'bg-[#1a1c23] text-blue-400 border-[#2d3139]';

		if (t.includes('flutter')) return 'bg-[#1a1c23] text-cyan-400 border-[#2d3139]';

		if (t.includes('sveltekit') || t.includes('svelte'))
			return 'bg-[#1a1c23] text-orange-400 border-[#2d3139]';

		if (t.includes('nextjs') || t.includes('next.js'))
			return 'bg-[#1a1c23] text-[#3b82f6] border-[#2d3139]';

		if (t.includes('firebase')) return 'bg-[#1a1c23] text-yellow-500/80 border-[#2d3139]';

		if (t.includes('bun') || t.includes('hono'))
			return 'bg-[#1a1c23] text-rose-400 border-[#2d3139]';

		if (t.includes('wordpress')) return 'bg-[#1a1c23] text-sky-400 border-[#2d3139]';

		if (t.includes('postgresql')) return 'bg-[#1a1c23] text-indigo-400 border-[#2d3139]';

		return 'bg-[#13141a] text-[#94a3b8] border-[#262628]';
	};

	const getProjectTypeStyle = (type: string) => {
		if (type.includes('Mobile')) {
			return 'bg-purple-950/40 text-purple-300 border-purple-900/60';
		}
		if (type.includes('Backend')) {
			return 'bg-[#1a1c23] text-rose-300 border-[#2d3139]';
		}
		return 'bg-emerald-950/40 text-emerald-300 border-emerald-900/60';
	};

	const getProjectTypeLabel = (type: string) => {
		if (type === 'Mobile Application') return 'Mobile';
		if (type === 'Backend Development') return 'Backend';
		return 'Web';
	};
</script>

<article
	class="group flex flex-col justify-between rounded-xl border border-[#262626] bg-[#111113] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#333336] hover:bg-[#161618] hover:shadow-xl hover:shadow-black/70"
>
	<div>
		<!-- Cover Image -->
		<div
			class="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-lg border border-[#262626] bg-zinc-950 shadow-inner transition-all duration-300"
		>
			{#if !imageError}
				<img
					src={`/img/ss-project/${project.image}`}
					alt={project.title}
					class="h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.02]"
					referrerpolicy="no-referrer"
					onerror={() => (imageError = true)}
				/>
			{:else}
				<div
					class="flex h-full w-full flex-col justify-between bg-[#0d0d0f] p-4 transition-colors duration-300 select-none group-hover:bg-[#121214]"
				>
					<div class="flex items-center justify-between">
						<span class="font-mono text-[9px] tracking-wider text-[#525252] uppercase">
							Cover Placeholder
						</span>

						<span
							class="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-800 transition-colors duration-300 group-hover:bg-blue-500/80"
						></span>
					</div>

					<div class="my-auto px-4 text-center">
						<p
							class="font-display line-clamp-1 text-xs font-bold tracking-wider text-zinc-300 uppercase"
						>
							{project.title}
						</p>

						<p class="mt-1.5 font-mono text-[9px] text-[#525252]">
							{project.type}
						</p>
					</div>

					<div class="flex justify-between font-mono text-[8.5px] text-[#525252]/80">
						<span>[IMAGE_OFFLINE]</span>
						<span class="text-zinc-600">/src/images/projects/</span>
					</div>
				</div>
			{/if}
		</div>

		<!-- Header -->
		<div class="mb-2.5 flex items-start justify-between gap-2">
			<h3
				class="line-clamp-1 text-base font-bold text-white transition-colors group-hover:text-blue-400"
			>
				{project.title}
			</h3>

			<span
				class={`shrink-0 rounded-sm border px-2 py-0.5 font-mono text-[9px] tracking-wide uppercase transition-colors duration-300 ${getProjectTypeStyle(project.type)}`}
			>
				{getProjectTypeLabel(project.type)}
			</span>
		</div>

		<!-- Description -->
		<p
			class="mb-5 line-clamp-3 text-xs leading-relaxed text-[#94a3b8] transition-colors group-hover:text-zinc-200"
		>
			{project.description}
		</p>
	</div>

	<!-- Footer -->
	<div>
		<!-- Tech Stack -->
		<div class="mb-5 flex flex-wrap gap-1.5 opacity-90 transition-opacity group-hover:opacity-100">
			{#each project.techUsed as tech, index (index)}
				<span
					class={`rounded-xs border px-2 py-0.5 font-mono text-[9.5px] font-medium ${getTechTagStyle(tech)}`}
				>
					{tech}
				</span>
			{/each}
		</div>

		<!-- Links -->
		<div class="flex items-center gap-3.5 border-t border-[#262626] pt-3.5 font-mono text-xs">
			{#if project.link}
				<a
					href={project.link}
					target="_blank"
					rel="noopener noreferrer"
					referrerpolicy="no-referrer"
					class="flex items-center gap-1.5 text-[#94a3b8] transition-colors hover:text-white"
				>
					<span>Demo</span>
					<ExternalLink class="h-3.5 w-3.5" />
				</a>
			{/if}

			{#if project.git}
				<a
					href={project.git}
					target="_blank"
					rel="noopener noreferrer"
					referrerpolicy="no-referrer"
					class="flex items-center gap-1.5 text-[#94a3b8] transition-colors hover:text-white"
				>
					<span>Repo</span>
					<Github class="h-3.5 w-3.5" />
				</a>
			{/if}

			{#if !project.link && !project.git}
				<span class="text-[10px] text-zinc-600 italic"> Corporate IP </span>
			{/if}
		</div>
	</div>
</article>
