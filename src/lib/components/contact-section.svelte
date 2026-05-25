<script lang="ts">
	import { Sparkles } from 'lucide-svelte';
	import { reveal } from '$lib/utils/reveal';
</script>

<section
	use:reveal
	class="relative mb-10 overflow-hidden rounded-xl border border-[#262626] bg-[#111113] p-6 md:p-8"
>
	<div
		class="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-full bg-blue-500/5 blur-3xl"
	></div>

	<div class="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
		<div>
			<h3 class="font-display mb-2 flex items-start gap-2 text-base font-bold text-white">
				<Sparkles class="mt-1 h-4 w-4 shrink-0 text-blue-400" />
				<span>Open to Work — Let's Talk</span>
			</h3>

			<p class="mb-1 text-xs leading-relaxed text-[#94a3b8]">
				Looking for a developer to bring your idea to life? I take on select projects in mobile and
				web — from quick prototypes to long-term builds.
			</p>
		</div>

		<div
			class="space-y-2 rounded-lg border border-[#262626] bg-[#0a0a0b] p-4 font-mono text-[11px]"
		>
			<div
				class="flex items-center justify-between border-b border-[#262626] pb-1.5 text-[#838383]"
			>
				<span>COMM_PROTOCOL</span>
				<span>SECURE</span>
			</div>

			<div class="space-y-1">
				<div class="flex justify-between">
					<span class="text-[#838383]">EMAIL:</span>
					<a
						href="mailto:sofyan423@gmail.com"
						class="text-white underline decoration-blue-500/20 hover:text-blue-400"
					>
						sofyan423@gmail.com
					</a>
				</div>

				<div class="flex justify-between">
					<span class="text-[#838383]">LOCATION:</span>
					<span class="text-zinc-300">Remote / ID</span>
				</div>
			</div>
		</div>
	</div>
</section>
