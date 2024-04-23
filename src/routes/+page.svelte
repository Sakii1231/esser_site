<script lang="ts">
  import img2 from '$lib/images/hero2.webp';
  import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
  import ImageGridGridcol from "$lib/components/ImageGrid.svelte";
  export let data
</script>

<section in:fly={{ duration: 300, x: 0, y: 500, opacity: 0.5, easing: quintOut }} class="my-2 flex flex-col md:flex-row items-center justify-center py-16 px-8 md:px-16" style="background-image: url({img2}); background-position: center; background-size: cover;">
  <div class="text-center md:text-left max-w-2xl text-white">
    <h1 class="text-2xl md:text-4xl font-[800] mb-4 text-center">Transforming Your Look, Elevating Your Confidence</h1>
    <p class="text-sm md:text-lg mb-8 text-center">Discover the artistry of Ruchi, a Nepali makeup maven bringing a touch of glamour to Australia. From subtle enhancements to striking transformations, let Ruchi's expertise illuminate your natural beauty.</p>
    <div class="justify-center text-center flex">
      <a href="/contact" class="bg-neutral-900 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded border- border-neutral-400">
        Book an appointment
      </a>
    </div>

    <!-- <div class="flex justify-center mt-8 md:hidden">
      <img src={img2} alt="hero" class="rounded-lg shadow-lg max-w-screen-l" />
    </div>
    <div class="hidden md:flex justify-center mt-8">
      <img src={img2} alt="hero" class="rounded-lg shadow-lg max-w-screen-xl" />
    </div> -->
    
  </div>
</section>

<!-- <div class="text-white bg-black font-extralight text-lg">
  <div class="overflow-hidden">
    <div class="marquee">
      <span>THATNEPALIMUA.</span>
      <span>THATNEPALIMUA.</span>
      <span>THATNEPALIMUA.</span>
      <span>THATNEPALIMUA.</span>
      <span>THATNEPALIMUA.</span>
      <span>THATNEPALIMUA.</span>
      <span>THATNEPALIMUA.</span>
      <span>THATNEPALIMUA.</span>
      <span>THATNEPALIMUA.</span>
      <span>THATNEPALIMUA.</span>
      <span>THATNEPALIMUA.</span>
      <span>THATNEPALIMUA.</span>
      <span>THATNEPALIMUA.</span>
      <span>THATNEPALIMUA.</span>
      <span>THATNEPALIMUA.</span>
      <span>THATNEPALIMUA.</span>
      <span>THATNEPALIMUA.</span>
      <span>THATNEPALIMUA.</span>
      <span>THATNEPALIMUA.</span>
      <span>THATNEPALIMUA.</span>
      <span>THATNEPALIMUA.</span>
      <span>THATNEPALIMUA.</span>
      <span>THATNEPALIMUA.</span>
      <span>THATNEPALIMUA.</span>
      <span>THATNEPALIMUA.</span>
      <span>THATNEPALIMUA.</span>
    </div>
  </div>
</div> -->
<ImageGridGridcol myFilesList={data.fileArray} imgFolder={data.imgFolder} />


<!-- <style>
  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
  }

  .marquee {
    display: flex;
    white-space: nowrap;
    animation: marquee 30s linear infinite;
  }

  .marquee span {
    margin-right: 1rem; /* Adjust as needed */
  }

  /* Hide the scrollbar */
  .overflow-hidden {
    overflow: hidden;
  }
</style> -->




