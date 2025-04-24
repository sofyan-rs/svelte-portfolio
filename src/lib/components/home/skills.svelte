<script lang="ts">
	import { mySkills, toolsIUse } from '$lib/data/info-data';
	import SkillCard from './skill-card.svelte';

	const programming = mySkills.programmingLanguages;
	const frontend = mySkills.frontend;
	const backend = mySkills.backend;
	const mobile = mySkills.mobile;
	const tools = toolsIUse;
</script>

<section id="skills" class="bg-white/70 dark:bg-neutral-900/70">
	<div class="container mx-auto px-5 py-24">
		<h2 class="text-3xl font-semibold text-blue-900 lg:text-4xl dark:text-blue-500">Skills</h2>
		<p class="mb-7 text-lg text-neutral-700 dark:text-neutral-300">Here are some of my skills</p>
		<div class="grid grid-cols-1 gap-5 text-base md:grid-cols-2 xl:grid-cols-4">
			<SkillCard title="Programming Languages" data={programming} />
			<SkillCard title="Frontend" data={frontend} />
			<SkillCard title="Backend" data={backend} />
			<SkillCard title="Mobile Dev" data={mobile} />
		</div>
		<div class="mt-5 border-t-4 border-dashed border-neutral-100 dark:border-neutral-700">
			<h3 class="mt-5 text-xl font-semibold text-blue-900 lg:text-2xl dark:text-blue-500">
				Tools I Use
			</h3>
			<ul class="mt-3 flex flex-wrap gap-x-5 gap-y-2">
				{#each tools as tool}
					<li class="font-medium text-neutral-500 dark:text-neutral-300">{tool}</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
