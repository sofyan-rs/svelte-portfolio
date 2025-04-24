<script lang="ts">
	import { ChevronsDown } from 'lucide-svelte';

	let {
		title,
		data
	}: {
		title: string;
		data: string[];
	} = $props();

	let showSkills = $state(false);
</script>

<div class="skill-card">
	<div class="overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800">
		<button
			class="title flex w-full cursor-pointer justify-between p-4 dark:hover:bg-neutral-800"
			class:active={showSkills === true}
			onclick={() => (showSkills = !showSkills)}
		>
			<h3 class="font-semibold">{title}</h3>
			<ChevronsDown
				size={24}
				class={`text-neutral-400 transition-all duration-300 dark:text-neutral-300 ${showSkills && 'rotate-180 transform'}`}
			/>
		</button>
		<div class="list" class:active={showSkills === true}>
			<ul class="flex flex-wrap gap-2 p-4 text-sm">
				{#each data as item}
					<li
						class="rounded bg-neutral-200/50 px-2 py-0.5 text-neutral-800 dark:bg-neutral-700/50 dark:text-neutral-200"
					>
						{item}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
