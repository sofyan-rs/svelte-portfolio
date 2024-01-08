<script lang="ts">
	import { ExternalLink, FolderGit2 } from 'lucide-svelte';
	import { Drawer } from 'vaul-svelte';
  import Lazy from 'svelte-lazy';

  export let project: {
    title: string;
    type: string;
    description: string;
    image: string;
    link: string | null;
    git: string | null;
    techUsed: string[];
  }
</script>

<Drawer.Root>
	<Drawer.Trigger class="rounded-md text-sm text-white drop-shadow-lg border px-5 py-2 transition-all hover:bg-white hover:text-gray-600">Show Detail</Drawer.Trigger>
	<Drawer.Portal>
		<Drawer.Overlay class="z-[50] fixed inset-0 bg-black/80 backdrop-blur-sm" />
		<Drawer.Content
			class="bg-white z-[52] flex flex-col overflow-hidden mt-24 fixed pb-10 -bottom-10 left-0 right-0"
		>
			<div class="p-4 flex-1">
				<div class="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-200 mb-5" />
				<div class="container max-w-4xl mx-auto max-h-[calc(100dvh-150px)] overflow-y-auto">
          <div class="mb-5">
            <strong class="block text-xl font-semibold">{project.title}</strong>
            <span class="text-sm text-gray-500">{project.type}</span>
          </div>
          <div class="flex flex-col xl:flex-row gap-4">
            <div class="w-full xl:w-[600px] overflow-y-auto">
              <Lazy height={400}>
                <img src={'/ss-project/' + project.image} alt={project.title} class="w-full rounded-md" />
              </Lazy>
            </div>
            <div class="xl:w-[200px] border-l-2 border-gray-100 border-dashed pl-4">
              <span class="block mb-3 font-semibold">Tech Used</span>
              <ul class="flex flex-wrap gap-1 text-sm mr-5 xl:mr-0">
                {#each project.techUsed as tech}
                  <li class="px-2 py-1 rounded-sm bg-gray-100">{tech}</li>
                {/each}
              </ul>
              {#if project.git || project.link}
                <div class="mt-5 flex gap-3">
                  {#if project.git}
                    <a href={project.git} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 border px-3 py-1 rounded-md transition-all text-blue-900 font-medium hover:bg-blue-900 hover:text-gray-100">
                      <FolderGit2 class="w-4 h-4" />
                      <span>Git</span>
                    </a>
                  {/if}
                  {#if project.link}
                    <a href={project.link} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 border px-3 py-1 rounded-md transition-all text-blue-900 font-medium hover:bg-blue-900 hover:text-gray-100">
                      <ExternalLink class="w-4 h-4" />
                      <span>Link</span>
                    </a>
                  {/if}
                </div>
              {/if}
            </div>
          </div>
          <p class="my-5">{project.description}</p>
        </div>
			</div>
		</Drawer.Content>
	</Drawer.Portal>
</Drawer.Root>
