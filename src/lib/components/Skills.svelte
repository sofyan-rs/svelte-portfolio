<script lang="ts">
	import { mySkills, toolsIUse } from "$lib/data/data";
	import SkillCard from "./SkillCard.svelte";

  let programming = mySkills.programmingLanguages;
  let frontend = mySkills.frontend;
  let backend = mySkills.backend;
  let mobile = mySkills.mobile;
  let others = mySkills.others;
  let tools = toolsIUse;
</script>

<section id='skills'>
  <div class='container mx-auto px-5 py-24'>
    <h2 class='text-3xl lg:text-4xl font-semibold text-blue-900'>Skills</h2>
    <p class='text-lg mb-7'>Here are some of my skills</p>
    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 text-base gap-5'>
      <SkillCard title='Programming Languages' data={programming} />
      <SkillCard title='Frontend' data={frontend} />
      <SkillCard title='Backend' data={backend} />
      <SkillCard title='Mobile Dev' data={mobile} />
      <SkillCard title='Others' data={others} />
    </div>
    <div class='border-t-4 border-gray-100 border-dashed mt-5'>
      <h3 class='text-xl lg:text-2xl font-semibold text-blue-900 mt-5'>Tools I Use</h3>
      <ul class='flex flex-wrap gap-5 mt-2'>
        {#each tools as tool}
          <li class='font-medium text-gray-500'>{tool}</li>
        {/each}
      </ul>
    </div>
  </div>
</section>