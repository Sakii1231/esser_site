<script lang="ts">
  import img2 from '$lib/images/HEROIMAGE.webp';
  import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<section in:fly={{ duration: 300, x: 0, y: 500, opacity: 0.5, easing: quintOut }} class="my-2 flex flex-col md:flex-row items-center justify-center py-16 px-8 md:px-16">
  <div class="text-center md:text-left max-w-2xl">
    <h1 class="text-2xl md:text-4xl font-[800] text-gray-800 mb-4 text-center">Transforming Your Look, Elevating Your Confidence</h1>
    <p class="text-sm md:text-lg text-gray-600 mb-8 text-center">Discover the artistry of Ruchi, a Nepali makeup maven bringing a touch of glamour to Australia. From subtle enhancements to striking transformations, let Ruchi's expertise illuminate your natural beauty.</p>
    <div class="justify-center text-center flex">
      <a href="/contact" class="bg-neutral-900 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded">
        Book an appointment
      </a>
    </div>

    <div class="flex justify-center mt-8 md:hidden">
      <img src={img2} alt="hero" class="rounded-lg shadow-lg max-w-screen-l" />
    </div>
    <div class="hidden md:flex justify-center mt-8">
      <img src={img2} alt="hero" class="rounded-lg shadow-lg max-w-screen-xl" />
    </div>
    
  </div>
</section>


