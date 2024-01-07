<script lang="ts">
	import { myProjects } from "$lib/data/data";
	import { ChevronsDown } from "lucide-svelte";
	import ProjectCard from "./ProjectCard.svelte";

  const projects = myProjects;
  const totalProjectPerPages = 6;

  let currentPage = 1;
  let currentProjects = projects.slice(0, totalProjectPerPages);

</script>

<section id='projects' class='bg-gray-100'>
  <div class='container mx-auto px-5 py-24'>
    <h2 class='text-3xl lg:text-4xl font-semibold text-blue-900'>My Projects</h2>
    <p class='text-lg mb-10'>Here are some of my projects</p>
    <div class='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
      {#each currentProjects as project}
        <ProjectCard project={project} />
      {/each}
    </div>
    {#if projects.length > totalProjectPerPages && currentProjects.length < projects.length}
      <div class='flex justify-center mt-10'>
        <button class='load-more flex gap-1 items-center px-4 py-2 rounded-md transition-all bg-white text-blue-900 font-medium hover:font-semibold hover:bg-blue-900 hover:text-white' on:click={() => {
          currentPage++;
          currentProjects = projects.slice(0, currentPage * totalProjectPerPages);
        }}>
          Load More
          <div class="icon">
            <ChevronsDown class='w-5 h-5 text-gray-300' />
          </div>
        </button>
      </div>
    {/if}
  </div>
</section>

<style lang="postcss">
  .load-more .icon {
    @apply transition-all animate-pulse max-w-0 overflow-hidden -rotate-90;
  }
  .load-more:hover .icon {
    @apply max-w-5 rotate-0;
  }
</style>