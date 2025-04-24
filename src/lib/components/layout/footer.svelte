<script lang="ts">
	import { myContacts } from '$lib/data/info-data';
	import { HeartIcon } from 'lucide-svelte';

	const email = myContacts.email;
	const discord = myContacts.discord;
	const linkedin = myContacts.linkedin;
	const github = myContacts.github;
</script>

<footer id="contact" class="bg-neutral-200/70 dark:bg-neutral-900/70">
	<div class="container mx-auto p-5 text-neutral-600 dark:text-neutral-300">
		<div class="my-14">
			<h2 class="mb-3 text-2xl font-semibold text-blue-900 lg:text-3xl dark:text-blue-500">
				Contact Me
			</h2>
			<p class="mb-5 xl:max-w-[750px]">
				Open to collaboration on frontend or mobile development projects. Reach out via email or
				message for inquiries. Let's create something amazing together!
			</p>
			<a
				href="mailto:{email}"
				class="inline-block bg-blue-900 px-4 py-2 font-medium text-neutral-200 dark:text-white"
			>
				{email}
			</a>
			<div class="mt-7 flex flex-wrap gap-5">
				<a
					href={discord}
					class="text-blue-900 transition-all hover:font-semibold hover:text-blue-950 dark:text-blue-500 dark:hover:text-blue-400"
				>
					Discord
				</a>
				<a
					href={linkedin}
					class="text-blue-900 transition-all hover:font-semibold hover:text-blue-950 dark:text-blue-500 dark:hover:text-blue-400"
				>
					LinkedIn
				</a>
				<a
					href={github}
					class="text-blue-900 transition-all hover:font-semibold hover:text-blue-950 dark:text-blue-500 dark:hover:text-blue-400"
				>
					Github
				</a>
			</div>
		</div>
		<div
			class="flex items-center justify-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"
		>
			Created with <HeartIcon class="h-4 w-4 fill-red-400 text-red-400" /> by Me
		</div>
	</div>
</footer>
