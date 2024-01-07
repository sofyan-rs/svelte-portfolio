<script lang="ts">
	import ProjectDetail from "./ProjectDetail.svelte";

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

<div>
  <div class="project-card bg-white shadow-sm rounded-md overflow-hidden transition-all hover:shadow-lg">
    <div class="h-56 md:h-44 lg:h-56 xl:h-48 2xl:h-56 overflow-hidden border-b border-gray-100 relative">
      <img src={'/ss-project/' + project.image} alt={project.title} class="w-full object-cover object-top transition-all duration-500 h-56 md:h-44 lg:h-56 xl:h-48 2xl:h-56" width={640} height={400} />
      <div class="show-detail absolute top-0 h-full w-full bg-blue-950/40 z-2 backdrop-blur-sm opacity-0 transition-all flex justify-center items-center">
        <ProjectDetail bind:project={project} />
      </div>
    </div>
    <div class="p-4">
      <strong class="block font-semibold">{project.title}</strong>
      <span class="text-sm text-gray-500">{project.type}</span>
    </div>
  </div>
  
</div>

<style lang="postcss">
  .project-card:hover img {
    @apply scale-110;
  }
  .project-card:hover .show-detail {
    @apply opacity-100;
  }
</style>