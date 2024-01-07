<script lang="ts">
  import Typewriter from 'svelte-typewriter';
  import { aboutMe, myInfo } from "$lib/data/data";

  let roles = myInfo.roles;
</script>

<section id='home' class='relative bg-gradient-to-r from-gray-900 to-blue-950 text-gray-300'>
  <div class='container mx-auto px-5 min-h-[100dvh] flex items-center'>
    <div>
      <h1 class='text-blue-400 text-lg lg:text-2xl font-medium mb-1'>Hi, I am {myInfo.name}</h1>
      <Typewriter mode='loop' wordInterval={2000}>
        {#each roles as role}
          <h2 class='font-semibold text-3xl lg:text-5xl mb-3'>{role}</h2>
        {/each}
      </Typewriter>
      <p class='text-base lg:text-lg text-gray-400 lg:max-w-3xl'>{aboutMe}</p>
    </div>
  </div>
  <div class="absolute bottom-10 left-0 right-0 flex justify-center">
    <div class="w-7 h-10 border-2 border-white/40 rounded-full flex justify-center pt-1">
      <div class="scrolling"></div>
    </div>
  </div>
</section>

<style lang="postcss">
  :root {
    --cursor-color: #fff;
    --cursor-width: 2px;
  }
  .scrolling {
    @apply w-[3px] h-2 bg-white/80 rounded-full;
    animation-name: scroll;
    animation-duration: 1.5s;
    animation-timing-function: cubic-bezier(.15,.41,.69,.94);
    animation-iteration-count: infinite;
  }
</style>