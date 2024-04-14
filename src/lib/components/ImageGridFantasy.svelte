<script>
  import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
  function shuffle(list) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}
  let images2=['IMG_9376.webp',
 'IMG_1630.webp',
 'IMG_6456.webp',
 'IMG_9370.webp',
 'IMG_8858.webp',
 'IMG_3412.webp',
 'IMG_1735.webp',
 'IMG_9373.webp',
 'IMG_1028.webp',
 'IMG_1027.webp',
 'IMG_4853.webp',
 'IMG_6918.webp',
 'IMG_E5304.webp',
 'IMG_4679.webp',
 'IMG_9372.webp',
 'IMG_6906.webp',
 'IMG_E9351.webp',
 'IMG_6457.webp',
 'IMG_1029.webp',
 'IMG_6919.webp']
  const shuffledArray = shuffle(images2);

</script>

<div in:fly={{ duration: 300, x: 500, y: 0, opacity: 0.3, easing: quintOut }} class="grid grid-cols-1 sm:grid-cols-3 gap-4 grid-flow-dense m-4">
    {#each shuffledArray as image}
      <img loading="lazy" fetchpriority="high" decoding="async" src={`work/img/fantasy/${image}`} alt="bride" class="w-full h-auto" />
    {/each}
</div>
