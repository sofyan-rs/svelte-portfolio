<script lang='ts'>
	import { myContacts } from "$lib/data/data";
	import { HeartIcon } from "lucide-svelte";

  let email = myContacts.email;
  let discord = myContacts.discord;
  let linkedin = myContacts.linkedin;
  let github = myContacts.github;
</script>

<footer id='contact' class='bg-gray-200'>
  <div class='container mx-auto p-5 text-gray-600'>
    <div class="my-14">
      <h2 class="text-2xl lg:text-3xl font-semibold text-blue-900 mb-3">Contact Me</h2>
      <p class="mb-5 xl:max-w-[750px]">
        Open to collaboration on frontend or mobile development projects. Reach out via email or message for inquiries. Let's create something amazing together!
      </p>
      <a href="mailto:{email}" class="inline-block bg-blue-900 text-gray-200 px-4 py-2 font-medium">
        sofyan423@gmail.com
      </a>
      <div class="mt-7 flex flex-wrap gap-5">
        <a href={discord} class="text-blue-900 hover:font-semibold hover:text-blue-950 transition-all">
          Discord
        </a>
        <a href={linkedin} class="text-blue-900 hover:font-semibold hover:text-blue-950 transition-all">
          LinkedIn
        </a>
        <a href={github} class="text-blue-900 hover:font-semibold hover:text-blue-950 transition-all">
          Github
        </a>
      </div>
    </div>
    <div class='flex justify-center gap-2 items-center text-sm'>
      Created with <HeartIcon class='text-red-400 fill-red-400 w-4 h-4' /> by Me
    </div>
  </div>
</footer>