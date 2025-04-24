<script lang="ts">
	import { ChevronsDown } from 'lucide-svelte';
	import ProjectCard from './project-card.svelte';
	import { myProjects } from '$lib/data/project-data';

	const projects = myProjects;
	const totalProjectPerPages = 6;

	let currentPage = $state(1);
	let currentProjects = $state(projects.slice(0, totalProjectPerPages));
</script>

<section id="projects" class="bg-neutral-100/70 dark:bg-neutral-800/70">
	<div class="container mx-auto px-5 py-24 text-neutral-800 dark:text-neutral-200">
		<h2 class="text-3xl font-semibold text-blue-900 lg:text-4xl dark:text-blue-500">
			My Projects <span class="text-xl">[プロジェクト]</span>
		</h2>
		<p class="mb-10 text-lg">Here are some of my projects</p>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
			{#each currentProjects as project}
				<ProjectCard {project} />
			{/each}
		</div>
		{#if projects.length > totalProjectPerPages && currentProjects.length < projects.length}
			<div class="mt-10 flex justify-center">
				<button
					class="load-more flex items-center gap-1 rounded-md bg-white px-4 py-2 font-medium text-blue-900 shadow transition-all hover:bg-blue-900 hover:font-semibold hover:text-white dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-blue-900 dark:hover:text-white"
					onclick={() => {
						currentPage++;
						currentProjects = projects.slice(0, currentPage * totalProjectPerPages);
					}}
				>
					Load More
					<div class="icon">
						<ChevronsDown class="h-5 w-5 text-neutral-300" />
					</div>
				</button>
			</div>
		{/if}
	</div>
</section>
