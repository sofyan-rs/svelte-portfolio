<script lang="ts">
	import { projects } from '$lib/data/project.data';
	import { skills } from '$lib/data/skill.data';
	import { experiences } from '$lib/data/experience.data';

	import ProjectCard from '$lib/components/project-card.svelte';

	import {
		Github,
		Linkedin,
		Mail,
		FileCode2,
		Briefcase,
		Code2,
		Search,
		MapPin,
		X,
		Sparkles,
		Download
	} from 'lucide-svelte';

	let searchQuery = '';
	let selectedType: 'All' | 'Mobile' | 'Web' | 'Backend' = 'All';
	let selectedTech: string | null = null;

	// Unique tech list
	$: allUniqueTech = [...new Set(projects.flatMap((p) => p.techUsed))].sort();

	// Filtered projects
	$: filteredProjects = projects.filter((project) => {
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
	});

	// Stats
	$: totalProjectsCount = projects.length;

	$: mobileProjectsCount = projects.filter((p) => p.type === 'Mobile Application').length;

	$: webProjectsCount = projects.filter(
		(p) => p.type === 'Web Development' || p.type === 'Website Development'
	).length;

	$: backendProjectsCount = projects.filter((p) => p.type === 'Backend Development').length;

	const handleClearFilters = () => {
		searchQuery = '';
		selectedType = 'All';
		selectedTech = null;
	};

	const downloadResume = () => {
		const text = `SOFYAN R. S.
Mobile & Frontend Architect
Bandung, Indonesia

Experience:
- Mobile Developer, Sasana Digital (2024)
- Frontend Developer, Sasana Digital (2023)

Skills:
- Languages: TypeScript, JavaScript, Dart, Swift, PHP, Python, SQL
- Mobile: React Native, Flutter, SwiftUI, Expo, Nativewind
- Frontend: ReactJS, NextJS, SvelteKit, VueJS, NuxtJS, TailwindCSS, Shadcn UI, Ant Design, WordPress, Elementor
- Backend & Database: HonoJS, Firebase, PostgreSQL, MySQL, MongoDB, Bun`;

		const blob = new Blob([text], { type: 'text/plain' });

		const url = URL.createObjectURL(blob);

		const a = document.createElement('a');

		a.href = url;
		a.download = 'Sofyan_Rudiana_Syamsi_Resume.txt';

		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);

		URL.revokeObjectURL(url);
	};
</script>

<div
	class="flex min-h-screen flex-col bg-[#0a0a0b] font-sans text-[#e2e8f0] selection:bg-zinc-800 selection:text-white lg:flex-row"
>
	<!-- SIDEBAR -->
	<aside
		class="w-full shrink-0 overflow-y-auto border-b border-[#262626] bg-[#0a0a0b] p-8 md:p-10 lg:sticky lg:top-0 lg:h-screen lg:w-[360px] lg:border-r lg:border-b-0"
	>
		<div class="flex h-full flex-col justify-between">
			<div>
				<!-- Header -->
				<div class="mb-8">
					<h1
						class="font-display mb-2 text-3xl leading-tight font-extrabold tracking-tight text-white uppercase"
					>
						Sofyan R. S.
					</h1>

					<p class="mb-1 block font-mono text-[11px] tracking-widest text-blue-400 uppercase">
						Mobile & Frontend Architect
					</p>

					<span class="inline-flex items-center gap-1.5 font-mono text-[10px] text-zinc-500">
						<MapPin class="h-3 w-3 text-[#525252]" />
						Bandung, Indonesia (UTC+7)
					</span>
				</div>

				<!-- Profile -->
				<section class="mb-10">
					<h2
						class="mb-4 font-mono text-[10px] font-bold tracking-[0.2em] text-[#525252] uppercase"
					>
						Profile
					</h2>

					<p class="text-sm leading-relaxed text-[#94a3b8]">
						2+ years of expertise in crafting high-performance, cross-platform applications.
						Specializing in
						<span class="font-medium text-white">React Native</span>,
						<span class="font-medium text-white">Flutter</span>, and modern web frameworks like
						<span class="font-medium text-white">Next.js</span>
						and
						<span class="font-medium text-white">SvelteKit</span>. Currently scaling solutions at
						Sasana Digital.
					</p>
				</section>

				<!-- Core Stack -->
				<section class="mb-10">
					<h2
						class="mb-4 font-mono text-[10px] font-bold tracking-[0.2em] text-[#525252] uppercase"
					>
						Core Stack
					</h2>

					<div class="flex flex-wrap gap-1.5">
						{#each ['React Native', 'Flutter', 'NextJS', 'SvelteKit', 'HonoJS'] as tech}
							<span
								class="rounded-sm border border-[#2d3139] bg-[#1a1c23] px-2 py-1 font-mono text-[10px] text-[#94a3b8]"
							>
								{tech}
							</span>
						{/each}
					</div>
				</section>

				<!-- Experience -->
				<section class="mb-8">
					<h2
						class="mb-4 font-mono text-[10px] font-bold tracking-[0.2em] text-[#525252] uppercase"
					>
						Experience
					</h2>

					<div class="mb-6 space-y-4">
						<div class="border-l border-blue-500/30 py-0.5 pl-4">
							<p class="font-display text-xs font-bold text-white uppercase">Sasana Digital</p>

							<p class="mt-0.5 font-mono text-[11px] text-[#94a3b8]">Mobile Developer • 2024</p>
						</div>

						<div class="border-l border-[#2d3139] py-0.5 pl-4">
							<p class="font-display text-xs font-bold text-[#94a3b8] uppercase">Sasana Digital</p>

							<p class="mt-0.5 font-mono text-[11px] text-[#525252]">Frontend Developer • 2023</p>
						</div>
					</div>

					<!-- Download Resume -->
					<button
						on:click={downloadResume}
						class="flex w-full cursor-pointer items-center justify-center gap-2 rounded bg-white py-2.5 font-mono text-[10.5px] font-bold tracking-wider text-zinc-950 uppercase transition-all duration-200 select-none hover:bg-zinc-200 active:bg-zinc-300"
					>
						<Download class="h-3.5 w-3.5" />

						<span>Download Resume</span>
					</button>
				</section>
			</div>

			<!-- Status -->
			<div class="mt-4 flex items-center gap-3 border-t border-[#262626] pt-6 lg:pt-8">
				<div class="h-2 w-2 animate-[pulse_1.5s_infinite] rounded-full bg-green-500"></div>

				<p class="font-mono text-[10.5px] tracking-wider text-[#525252] uppercase">
					AVAILABLE FOR WORK
				</p>
			</div>
		</div>
	</aside>

	<!-- MAIN CONTENT -->
	<main class="flex max-w-7xl flex-1 flex-col bg-[#0a0a0b] p-6 md:p-10">
		<!-- Header -->
		<div
			class="mb-10 flex flex-col items-start justify-between gap-3 border-b border-[#262626] pb-6 sm:flex-row sm:items-end"
		>
			<div>
				<h2 class="font-mono text-[10px] font-bold tracking-[0.2em] text-[#525252] uppercase">
					Featured Works
				</h2>

				<p class="mt-1 font-mono text-xs text-zinc-500">
					Filter and search full stacked catalogs live below
				</p>
			</div>

			<p class="shrink-0 font-mono text-[10.5px] tracking-widest text-[#525252] uppercase">
				/ PROJECTS.01-{projects.length.toString().padStart(2, '0')}
			</p>
		</div>

		<!-- Explorer -->
		<section
			class="mb-10 rounded-xl border border-[#262626] bg-[#111113] p-5 transition-all duration-300 md:p-6"
		>
			<div class="mb-4 flex items-center gap-2">
				<Code2 class="h-4 w-4 text-blue-400" />

				<h3 class="font-mono text-xs font-bold tracking-wider text-white uppercase">
					ENGINEERING_STACK_EXPLORER
				</h3>
			</div>

			<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
				<!-- Languages -->
				<div>
					<span class="mb-2 block font-mono text-[9.5px] text-[#525252] uppercase">
						Languages
					</span>

					<div class="flex flex-wrap gap-1.5">
						{#each skills.languages as tech}
							<button
								on:click={() => (selectedTech = selectedTech === tech ? null : tech)}
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
					<span class="mb-2 block font-mono text-[9.5px] text-[#525252] uppercase">
						Mobile Development
					</span>

					<div class="flex flex-wrap gap-1.5">
						{#each skills.mobile as tech}
							<button
								on:click={() => (selectedTech = selectedTech === tech ? null : tech)}
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
					<span class="mb-2 block font-mono text-[9.5px] text-[#525252] uppercase">
						Frontend Development
					</span>

					<div class="flex flex-wrap gap-1.5">
						{#each skills.frontend as tech}
							<button
								on:click={() => (selectedTech = selectedTech === tech ? null : tech)}
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
					<span class="mb-2 block font-mono text-[9.5px] text-[#525252] uppercase">
						Backend & Database
					</span>

					<div class="flex flex-wrap gap-1.5">
						{#each skills.backend as tech}
							<button
								on:click={() => (selectedTech = selectedTech === tech ? null : tech)}
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

		<!-- Tabs + Search -->
		<section class="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
			<div class="flex flex-wrap gap-1.5 self-start sm:self-auto">
				{#each ['All', 'Mobile', 'Web', 'Backend'] as type}
					{@const count =
						type === 'All'
							? totalProjectsCount
							: type === 'Mobile'
								? mobileProjectsCount
								: type === 'Web'
									? webProjectsCount
									: backendProjectsCount}

					<button
						on:click={() => (selectedType = type as typeof selectedType)}
						class={`cursor-pointer rounded border px-3 py-1.5 font-mono text-[11px] uppercase transition-all ${
							selectedType === type
								? 'border-white bg-white font-bold text-zinc-950'
								: 'border-[#262626] bg-[#111113] text-[#94a3b8] hover:border-zinc-700 hover:text-white'
						}`}
					>
						{type} ({count})
					</button>
				{/each}
			</div>

			<!-- Search -->
			<div class="relative w-full sm:max-w-xs">
				<Search class="absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-[#525252]" />

				<input
					bind:value={searchQuery}
					type="text"
					placeholder="SEARCH CATALOGS..."
					class="w-full rounded border border-[#262626] bg-[#111113] py-2 pr-3.5 pl-9 font-mono text-xs text-zinc-200 uppercase placeholder-zinc-600 transition-all hover:border-zinc-800 focus:border-zinc-700 focus:outline-hidden"
				/>

				{#if searchQuery}
					<button
						on:click={() => (searchQuery = '')}
						class="absolute top-1/2 right-3 -translate-y-1/2 text-zinc-500 hover:text-white"
					>
						<X class="h-3.5 w-3.5" />
					</button>
				{/if}
			</div>
		</section>

		<!-- Projects -->
		<section class="mb-14 flex-1">
			{#if filteredProjects.length > 0}
				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					{#each filteredProjects as project}
						<ProjectCard {project} />
					{/each}
				</div>
			{:else}
				<div
					class="flex h-48 flex-col items-center justify-center rounded-xl border border-dashed border-[#262626] bg-[#111113]/30 p-6 text-center"
				>
					<FileCode2 class="mb-3 h-8 w-8 text-[#525252]" />

					<span class="font-mono text-xs text-[#94a3b8]"> No projects found. </span>

					<button
						on:click={handleClearFilters}
						class="mt-2 cursor-pointer font-mono text-[11px] text-zinc-500 underline hover:text-[#94a3b8]"
					>
						Reset active parameters / stack categories
					</button>
				</div>
			{/if}
		</section>

		<!-- Experience Timeline -->
		<section class="mb-14 border-t border-[#262626] pt-8">
			<h2
				class="mb-8 flex items-center gap-2 font-mono text-[10px] font-bold tracking-[0.2em] text-[#525252] uppercase"
			>
				<Briefcase class="h-4 w-4 text-zinc-600" />
				PROFESSIONAL_TIMELINE_DETAILS
			</h2>

			<div class="relative ml-2 space-y-10 border-l border-[#262626] pl-6">
				{#each experiences as exp, idx}
					<div class="group relative">
						<span
							class="absolute top-[7px] -left-[29px] h-2.5 w-2.5 rounded-full border border-[#262626] bg-[#111113] transition-all group-hover:border-blue-400 group-hover:bg-blue-500"
						/>

						<div
							class="mb-2.5 flex flex-col items-start gap-1.5 md:flex-row md:items-center md:justify-between"
						>
							<div>
								<h4
									class="text-base font-bold text-white transition-colors group-hover:text-blue-400"
								>
									{exp.role}
								</h4>

								<span class="mt-0.5 block text-xs font-medium text-[#94a3b8]">
									{exp.company}
								</span>
							</div>

							<span
								class="rounded-sm border border-[#262626] bg-[#111113] px-2 py-0.5 font-mono text-[10px] text-zinc-500"
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

		<!-- Contact Section -->
		<section
			class="relative mb-10 overflow-hidden rounded-xl border border-[#262626] bg-[#111113] p-6 md:p-8"
		>
			<div
				class="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-full bg-blue-500/5 blur-3xl"
			/>

			<div class="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
				<div>
					<h3 class="font-display mb-2 flex items-start gap-2 text-base font-bold text-white">
						<Sparkles class="mt-1 h-4 w-4 shrink-0 text-blue-400" />

						<span>Discussion & Contract Engagements</span>
					</h3>

					<p class="mb-1 text-xs leading-relaxed text-[#94a3b8]">
						Open to remote contracts, robust systems engineering, and custom mobile consulting.
					</p>
				</div>

				<div
					class="space-y-2 rounded-lg border border-[#262626] bg-[#0a0a0b] p-4 font-mono text-[11px]"
				>
					<div
						class="flex items-center justify-between border-b border-[#262626] pb-1.5 text-[#525252]"
					>
						<span>COMM_PROTOCOL</span>
						<span>SECURE</span>
					</div>

					<div class="space-y-1">
						<div class="flex justify-between">
							<span class="text-[#525252]">EMAIL:</span>

							<a
								href="mailto:sofyan423@gmail.com"
								class="text-white underline decoration-blue-500/20 hover:text-blue-400"
							>
								sofyan423@gmail.com
							</a>
						</div>

						<div class="flex justify-between">
							<span class="text-[#525252]">LOCATION:</span>

							<span class="text-zinc-300">Remote / ID</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Footer -->
		<footer
			class="mt-auto flex flex-col items-center justify-between gap-4 border-t border-[#262626] pt-6 font-mono text-[9px] tracking-widest text-[#525252] uppercase md:flex-row"
		>
			<div>
				© {new Date().getFullYear()} PORTFOLIO — SOFYAN R. S.
			</div>

			<div class="flex flex-wrap justify-center gap-6">
				<a
					href="https://github.com/sofyan-rs"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-zinc-300"
				>
					GITHUB / sofyan-rs
				</a>

				<a
					href="https://linkedin.com/in/sofyan-rudiana-syamsi"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-zinc-300"
				>
					LINKEDIN / in/sofyan
				</a>

				<a href="mailto:sofyan423@gmail.com" class="hover:text-zinc-300">
					EMAIL / sofyan423@gmail.com
				</a>
			</div>
		</footer>
	</main>
</div>
