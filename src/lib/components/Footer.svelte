<script lang='ts'>
	import { HeartIcon } from "lucide-svelte";

  const year = new Date().getFullYear();
</script>

<footer class='bg-gray-200'>
  <div class='container mx-auto p-5 text-gray-600'>
    <div class='flex justify-center gap-2 items-center text-sm'>
      Created with <HeartIcon class='text-red-400 fill-red-400 w-4 h-4' /> by Me
    </div>
  </div>
</footer>