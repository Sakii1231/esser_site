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
  let images2=['IMG_8014.webp', 'IMG_E8001.webp', 'IMG_8013.webp', 'IMG_9668.webp']
  const shuffledArray = shuffle(images2);

</script>

<div in:fly={{ duration: 300, x: 500, y: 0, opacity: 0.3, easing: quintOut }} class="grid grid-cols-1 sm:grid-cols-3 gap-4 grid-flow-dense m-4">
    {#each shuffledArray as image}
      <img loading="lazy" fetchpriority="high" decoding="async" src={`work/img/bridal/${image}`} alt="bride" class="w-full h-auto" />
    {/each}
</div>
