<script lang="ts">
	import type { ProjectType } from '$lib/types/project.type';
	import { ExternalLink, FolderGit2 } from 'lucide-svelte';

	let {
		project
	}: {
		project: ProjectType;
	} = $props();
</script>

<div>
	<div
		class="project-card overflow-hidden rounded-md bg-white shadow-sm transition-all hover:shadow-lg dark:bg-zinc-900"
	>
		<div
			class="relative h-56 overflow-hidden border-b border-zinc-100 md:h-44 lg:h-56 xl:h-48 2xl:h-56 dark:border-zinc-800"
		>
			<!-- <Lazy height={250}> -->
			<img
				src={'/img/ss-project/' + project.image}
				alt={project.title}
				class="h-56 w-full object-cover object-top transition-all duration-500 md:h-44 lg:h-56 xl:h-48 2xl:h-56"
				loading="lazy"
				decoding="async"
				fetchpriority="low"
				width={640}
				height={400}
			/>
			<!-- </Lazy> -->
		</div>
		<div class="p-4">
			<div class="flex items-start justify-between gap-4">
				<div>
					<span class="text-sm font-semibold text-zinc-500 dark:text-zinc-400">{project.type}</span>
					<strong class="block font-semibold">{project.title}</strong>
				</div>
				{#if project.git || project.link}
					<div class="flex gap-2">
						{#if project.git}
							<a
								href={project.git}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="View project on Git"
								class="flex items-center gap-2 rounded-sm border px-3 py-2 font-medium text-blue-900 transition-all hover:border-blue-900 hover:bg-blue-900 hover:text-zinc-100"
							>
								<FolderGit2 class="h-4 w-4" />
								<!-- <span>Git</span> -->
							</a>
						{/if}
						{#if project.link}
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Visit project link"
								class="flex items-center gap-2 rounded-sm border px-3 py-2 font-medium text-blue-900 transition-all hover:border-blue-900 hover:bg-blue-900 hover:text-zinc-100"
							>
								<ExternalLink class="h-4 w-4" />
								<!-- <span>Link</span> -->
							</a>
						{/if}
					</div>
				{/if}
			</div>
			<p class="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{project.description}</p>
			<ul class="mt-3 flex flex-wrap gap-2 text-sm xl:mr-0">
				{#each project.techUsed as tech (tech)}
					<li class="rounded-sm bg-zinc-100 px-2 py-1 dark:bg-zinc-800">{tech}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
