<script lang="ts">
  import Header from "$lib/components/Header.svelte";
	import About from "$lib/components/About.svelte";
  import Skills from "$lib/components/Skills.svelte";
  import Footer from "$lib/components/Footer.svelte";
	import Projects from "$lib/components/Projects.svelte";
</script>

<Header />
<About />
<div class='absolute left-0 right-0'>
  <Skills />
  <Projects />
  <Footer />
</div>