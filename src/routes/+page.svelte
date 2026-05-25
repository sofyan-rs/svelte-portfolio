<script lang="ts">
	import { projects } from '$lib/data/project.data';

	import Sidebar from '$lib/components/sidebar.svelte';
	import StackExplorer from '$lib/components/stack-explorer.svelte';
	import ProjectFilters from '$lib/components/project-filters.svelte';
	import ProjectCard from '$lib/components/project-card.svelte';
	import ExperienceTimeline from '$lib/components/experience-timeline.svelte';
	import ContactSection from '$lib/components/contact-section.svelte';
	import PageFooter from '$lib/components/page-footer.svelte';

	import { FileCode2 } from 'lucide-svelte';
	import { reveal } from '$lib/utils/reveal';

	let searchQuery = $state('');
	let selectedType = $state<'All' | 'Mobile' | 'Web' | 'Backend'>('All');
	let selectedTech = $state<string | null>(null);
	let visibleCount = $state(6);

	const filteredProjects = $derived(
		projects.filter((project) => {
			const matchesSearch =
				project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.techUsed.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

			const matchesType =
				selectedType === 'All' ||
				(selectedType === 'Mobile' && project.type === 'Mobile Application') ||
				(selectedType === 'Web' &&
					(project.type === 'Web Development' || project.type === 'Website Development')) ||
				(selectedType === 'Backend' && project.type === 'Backend Development');

			const matchesTech = !selectedTech || project.techUsed.includes(selectedTech);

			return matchesSearch && matchesType && matchesTech;
		})
	);

	const totalProjectsCount = $derived(projects.length);
	const mobileProjectsCount = $derived(
		projects.filter((p) => p.type === 'Mobile Application').length
	);
	const webProjectsCount = $derived(
		projects.filter((p) => p.type === 'Web Development' || p.type === 'Website Development').length
	);
	const backendProjectsCount = $derived(
		projects.filter((p) => p.type === 'Backend Development').length
	);

	const visibleProjects = $derived(filteredProjects.slice(0, visibleCount));
	const hasMore = $derived(visibleCount < filteredProjects.length);

	$effect(() => {
		void [searchQuery, selectedType, selectedTech]; // track filter deps
		visibleCount = 6;
	});

	const handleClearFilters = () => {
		searchQuery = '';
		selectedType = 'All';
		selectedTech = null;
	};
</script>

<div
	class="flex min-h-screen flex-col bg-[#0a0a0b] font-sans text-[#e2e8f0] selection:bg-zinc-800 selection:text-white lg:flex-row"
>
	<Sidebar />

	<main class="flex max-w-7xl flex-1 flex-col bg-[#0a0a0b] p-6 md:p-10">
		<!-- Header -->
		<div
			use:reveal
			class="mb-10 flex flex-col items-start justify-between gap-3 border-b border-[#262626] pb-6 sm:flex-row sm:items-end"
		>
			<div>
				<h2 class="font-mono text-[10px] font-bold tracking-[0.2em] text-[#838383] uppercase">
					Featured Projects
				</h2>

				<p class="mt-1 font-mono text-xs text-zinc-400">
					Explore projects by stack, type, or keyword
				</p>
			</div>

			<p class="shrink-0 font-mono text-[10.5px] tracking-widest text-[#838383] uppercase">
				/ PROJECTS.01-{projects.length.toString().padStart(2, '0')}
			</p>
		</div>

		<div use:reveal={{ delay: 60 }}>
			<StackExplorer bind:selectedTech />
		</div>

		<div use:reveal={{ delay: 120 }}>
			<ProjectFilters
				bind:selectedType
				bind:searchQuery
				{totalProjectsCount}
				{mobileProjectsCount}
				{webProjectsCount}
				{backendProjectsCount}
			/>
		</div>

		<!-- Projects -->
		<section class="mb-14 flex-1">
			{#if filteredProjects.length > 0}
				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					{#each visibleProjects as project, i (project.title)}
						<div use:reveal={{ delay: i * 80, threshold: 0.05 }}>
							<ProjectCard {project} />
						</div>
					{/each}
				</div>

				{#if hasMore}
					<div class="mt-8 flex justify-center">
						<button
							onclick={() => (visibleCount += 6)}
							class="cursor-pointer rounded-lg border border-[#262626] bg-[#111113] px-6 py-2.5 font-mono text-xs tracking-widest text-[#838383] uppercase transition-colors hover:border-zinc-600 hover:text-[#e2e8f0]"
						>
							Load More — {filteredProjects.length - visibleCount} remaining
						</button>
					</div>
				{/if}
			{:else}
				<div
					class="flex h-48 flex-col items-center justify-center rounded-xl border border-dashed border-[#262626] bg-[#111113]/30 p-6 text-center"
				>
					<FileCode2 class="mb-3 h-8 w-8 text-[#838383]" />

					<span class="font-mono text-xs text-[#94a3b8]"> No projects found. </span>

					<button
						onclick={handleClearFilters}
						class="mt-2 cursor-pointer font-mono text-[11px] text-zinc-400 underline hover:text-[#94a3b8]"
					>
						Reset active parameters / stack categories
					</button>
				</div>
			{/if}
		</section>

		<ExperienceTimeline />
		<ContactSection />
		<PageFooter />
	</main>
</div>
