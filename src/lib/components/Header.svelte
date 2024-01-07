<script lang="ts">
  import CarBatteryIcon from "$lib/components/Icons/CarBatteryIcon.svelte";
	import scrollElementToIdMinusHeight from "$lib/utils/scrollToElement";
  import { onMount } from "svelte";
	import AnimatedHamburger from "./AnimatedHamburger.svelte";

  let isScrolled = false;
  let showMenu = false;

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  function handleScroll() {
    isScrolled = window.scrollY > 0;
  }

  function scrollElement(id: string) {
    scrollElementToIdMinusHeight(id, 62);
    showMenu = false;
  }

  const menus = [
    {
      name: "Home",
      id: "home",
    },
    {
      name: "Skills",
      id: "skills",
    },
    {
      name: "Projects",
      id: "projects",
    },
    {
      name: "Contact Me",
      id: "contact",
    },
  ];
</script>

<header class:scroll={isScrolled} class="header fixed z-10 top-0 left-0 right-0 backdrop-blur-md">
  <div class='container mx-auto p-5 text-gray-200 flex justify-between items-center'>
    <CarBatteryIcon className='animate-pulse' />
    <AnimatedHamburger open={showMenu} onClick={() => showMenu = !showMenu} />
    <div class='menu absolute top-[72px] left-0 right-0 bg-gray-900/90 flex flex-col items-start lg:bg-inherit lg:top-0 lg:w-auto lg:gap-5 lg:flex-row lg:relative' class:show={showMenu}>
      {#each menus as menu}
        <button on:click={() => scrollElement(menu.id)} class='container mx-auto p-4 w-full text-left lg:w-auto xl:p-2 text-gray-300 hover:text-blue-400'>{menu.name}</button>
      {/each}
    </div>
  </div>
</header>

<style lang="postcss">
  .header {
    @apply bg-blue-950/30;
  }
  .header.scroll {
    @apply bg-blue-950/90;
  }
  .menu {
    @apply max-h-0 lg:max-h-[200px] overflow-hidden transition-all duration-500;
  }
  .menu.show {
    @apply max-h-[calc(100dvh-72px)];
  }
</style>
