<script lang="ts">
  import { ChevronsDown } from 'lucide-svelte';

  export let title: string, data: string[];

  let showSkills = false;
</script>

<div class='skill-card'>
  <div class='bg-gray-100 rounded-lg overflow-hidden'>
    <button class='title p-4 w-full flex justify-between' class:active={showSkills === true} on:click={() => showSkills = !showSkills}>
      <h3 class='font-semibold'>{title}</h3>
      <ChevronsDown size={24} class={`text-gray-400 transition-all duration-300 ${showSkills && 'transform rotate-180'}`} />
    </button>
    <div class="list" class:active={showSkills === true}>
      <ul class='p-4 text-sm flex flex-wrap gap-2'>
        {#each data as item}
        <li class='bg-gray-200/50 px-2 py-0.5'>{item}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style lang="postcss">
  .skill-card .list {
    @apply max-h-0 overflow-hidden transition-all duration-300;
  }
  .skill-card .list.active {
    @apply max-h-96;
  }
  .skill-card .title.active, .skill-card:hover .title {
    @apply bg-blue-950 text-white transition-all;
  }
</style>