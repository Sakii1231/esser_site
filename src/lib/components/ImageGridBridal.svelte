<script>
  import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
  let images2=['IMG_3137.webp', 'IMG_0317.webp', 'IMG_4146.webp', 'IMG_2842.webp', 'IMG_2855.webp', 'IMG_3682.webp', 'IMG_2699.webp', 'IMG_2146.webp', 'IMG_7052.webp', 'IMG_0331.webp', 'IMG_3606 2.webp', 'IMG_3617.webp', 'IMG_0320.webp', 'IMG_0319.webp', 'IMG_0327.webp', 'IMG_3136.webp', 'IMG_2698.webp', 'IMG_3112.webp', 'IMG_0330.webp', 'IMG_0328.webp', 'IMG_0323.webp', 'IMG_2854.webp', 'IMG_2857.webp', 'IMG_2697.webp', 'IMG_E2149.webp', 'IMG_0324.webp', 'IMG_0326.webp', 'IMG_5648.webp', 'IMG_2843.webp', 'IMG_3092.webp', 'IMG_2151.webp', 'IMG_0322.webp', 'IMG_0325.webp', 'IMG_3138.webp', 'IMG_0318.webp', 'IMG_2152.webp', 'IMG_3618.webp', 'IMG_2844.webp', 'IMG_0321.webp', 'IMG_2841.webp', 'IMG_2150.webp', 'IMG_2148.webp', 'IMG_3494.webp', 'IMG_03290.webp', 'IMG_5079.webp', 'IMG_2147.webp']

</script>

<div in:fly={{ duration: 300, x: 500, y: 0, opacity: 0.3, easing: quintOut }} class="grid grid-cols-1 sm:grid-cols-3 gap-4 grid-flow-dense m-4">
    {#each images2 as image}
      <img loading="lazy" fetchpriority="high" decoding="async" src={`work/img/beauty/${image}`} alt="Beauty" class="w-full h-auto" />
    {/each}
</div>
