<script lang="ts">
	import scrollElementToIdMinusHeight from '$lib/utils/scrollToElement';
	import { onMount } from 'svelte';
	import CarBatteryIcon from '../icons/car-battery-icon.svelte';
	import AnimatedHamburger from './animated-hamburger.svelte';
	import { toggleMode } from 'mode-watcher';
	import { Moon, Sun } from 'lucide-svelte';

	let isScrolled = $state(false);
	let showMenu = $state(false);

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
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
			name: 'Home',
			id: 'home'
		},
		{
			name: 'Skills',
			id: 'skills'
		},
		{
			name: 'Projects',
			id: 'projects'
		},
		{
			name: 'Contact Me',
			id: 'contact'
		}
	];
</script>

<header class:scroll={isScrolled} class="header fixed top-0 right-0 left-0 z-30 backdrop-blur-md">
	<div class="container mx-auto flex items-center justify-between p-5 text-neutral-200">
		<CarBatteryIcon className="animate-pulse" />
		<div class="flex flex-row-reverse items-center gap-3 lg:flex-row lg:gap-5">
			<AnimatedHamburger open={showMenu} onClick={() => (showMenu = !showMenu)} />
			<div
				class="menu absolute top-[72px] right-0 left-0 flex flex-col items-start bg-neutral-900/90 lg:relative lg:top-0 lg:w-auto lg:flex-row lg:gap-5 lg:bg-inherit"
				class:show={showMenu}
			>
				{#each menus as menu}
					<button
						onclick={() => scrollElement(menu.id)}
						class="container mx-auto w-full p-4 text-left text-neutral-300 hover:text-blue-500 lg:w-auto xl:p-2"
						>{menu.name}</button
					>
				{/each}
			</div>
			<button class="relative animate-pulse" onclick={toggleMode}>
				<Moon class="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
				<Sun class="absolute top-0 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
				<span class="sr-only">Toggle theme</span>
			</button>
		</div>
	</div>
</header>
