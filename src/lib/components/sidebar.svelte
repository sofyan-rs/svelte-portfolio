<script lang="ts">
	import { experiences } from '$lib/data/experience.data';
	import { MapPin, Download } from 'lucide-svelte';

	const downloadResume = () => {
		const a = document.createElement('a');
		a.href = '/pdf/resume.pdf';
		a.download = 'Sofyan_Rudiana_Syamsi_Resume.pdf';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	};
</script>

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
					Mobile & Frontend Developer
				</p>

				<span class="inline-flex items-center gap-1.5 font-mono text-[10px] text-zinc-400">
					<MapPin class="h-3 w-3 text-[#838383]" />
					Bandung, Indonesia (UTC+7)
				</span>
			</div>

			<!-- Profile -->
			<section class="mb-10">
				<h2
					class="mb-4 font-mono text-[10px] font-bold tracking-[0.2em] text-[#838383] uppercase"
				>
					Profile
				</h2>

				<p class="text-sm leading-relaxed text-[#94a3b8]">
					3+ years of expertise in crafting high-performance, cross-platform applications.
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
					class="mb-4 font-mono text-[10px] font-bold tracking-[0.2em] text-[#838383] uppercase"
				>
					Core Stack
				</h2>

				<div class="flex flex-wrap gap-1.5">
					{#each ['React Native', 'Flutter', 'NextJS', 'SvelteKit', 'HonoJS'] as tech (tech)}
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
					class="mb-4 font-mono text-[10px] font-bold tracking-[0.2em] text-[#838383] uppercase"
				>
					Experience
				</h2>

				<div class="mb-6 space-y-4">
					{#each experiences as exp, i (exp.role)}
						<div
							class={`py-0.5 pl-4 ${i === 0 ? 'border-l border-blue-500/30' : 'border-l border-[#2d3139]'}`}
						>
							<p
								class={`font-display text-xs font-bold uppercase ${i === 0 ? 'text-white' : 'text-[#94a3b8]'}`}
							>
								{exp.company}
							</p>

							<p
								class={`mt-0.5 font-mono text-[11px] ${i === 0 ? 'text-[#94a3b8]' : 'text-[#838383]'}`}
							>
								{exp.role} • {exp.period}
							</p>
						</div>
					{/each}
				</div>

				<button
					onclick={downloadResume}
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

			<p class="font-mono text-[10.5px] tracking-wider text-[#838383] uppercase">
				AVAILABLE FOR WORK
			</p>
		</div>
	</div>
</aside>
