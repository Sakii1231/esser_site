<script>
    import img1 from '$lib/images/beauty.webp';
    import img2 from '$lib/images/bridal.webp';
    import img3 from '$lib/images/fantasy.webp';
    import img4 from '$lib/images/fashion.webp';
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

    let images = [img1,img2,img3,img4]
</script>

  <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4'>

  <div class="relative h-96 mt-14 mb-6">
    <div class="absolute inset-0 z-10 transition-transform transform-gpu scale-100 hover:scale-105">
      <div in:fly={{ delay:100, duration: 300, x: -100, y: 0, opacity: 0, easing: quintOut }}>
        <a href="beauty">
          <img loading="lazy" fetchpriority="high" decoding="async" src={img1} alt="Beauty" class="w-full h-auto rounded-lg shadow-lg" />
        </a>
      </div>
    </div>
  </div>


  <div class="relative h-96 mt-14 mb-6">
    <div class="absolute inset-0 z-10 transition-transform transform-gpu scale-100 hover:scale-105">
      <div in:fly={{ delay:200, duration: 300, x: -80, y: 0, opacity: 0, easing: quintOut }}>
        <a href="bridal">
          <img loading="lazy" fetchpriority="high" decoding="async" src={img2} alt="bridal" class="w-full h-auto rounded-lg shadow-lg" />
        </a>
      </div>
    </div>
  </div>

  <div class="relative h-96 mt-14 mb-6">
    <div class="absolute inset-0 z-10 transition-transform transform-gpu scale-100 hover:scale-105">
      <div in:fly={{ delay:300, duration: 300, x: -60, y: 0, opacity: 0, easing: quintOut }}>
        <a href="fantasy">
          <img loading="lazy" fetchpriority="high" decoding="async" src={img3} alt="fantasy" class="w-full h-auto rounded-lg shadow-lg" />
        </a>
      </div>
    </div>
  </div>

  <div class="relative h-96 mt-14 mb-6">
    <div class="absolute inset-0 z-10 transition-transform transform-gpu scale-100 hover:scale-105">
      <div in:fly={{ delay:400, duration: 300, x: -40, y: 0, opacity: 0, easing: quintOut }}>
        <a href="fashion">
          <img loading="lazy" fetchpriority="high" decoding="async" src={img4} alt="fashion" class="w-full h-auto rounded-lg shadow-lg" />
        </a>
      </div>
    </div>
  </div>

</div>

