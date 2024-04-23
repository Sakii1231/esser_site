<script>
  import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import { adjustArrayLength, divideArrayIntoThreeEqualParts } from '$lib/utils.js';

  export let myFilesList;
  export let imgFolder;
  
  function shuffle(list) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

  let imgArray = shuffle(myFilesList)
  let a_imgArray = adjustArrayLength(myFilesList)

  const { images1, images2, images3 } = divideArrayIntoThreeEqualParts(a_imgArray);

  // console.log(myFilesList.length);
  // console.log(imgArray.length);
  // console.log(images1.length);
  // console.log(images2.length);
  // console.log(images3.length);

  let screenWidth;
  let scrollY = 0;

  function handleResize() {
    screenWidth = window.innerWidth;
  }

  onMount(() => {
    handleResize(); // Set initial screen width
  });
  $: dynamicWidth = screenWidth < 768 ? '100vw' : `${(screenWidth / 3).toFixed(0)}px`;

</script>

<svelte:window bind:innerWidth={screenWidth} bind:scrollY={scrollY} on:resize={handleResize} />

<!-- <main>
  <p>Screen width: {screenWidth}px</p>
  <p>dynamicWidth: {dynamicWidth}</p>
  <p>Scroll position Y: {scrollY}px</p>
</main> -->

<div class="mt-2">
  <div in:fly={{ duration: 300, x: 500, y: 0, opacity: 0.3, easing: quintOut }} class="flex flex-col md:flex-row gap-1">
    <div class="flex flex-col gap-1">
      {#each images1 as image}
        <img loading="lazy" fetchpriority="high" decoding="async" src={`work/img/${imgFolder}/${image}`} alt="Beauty" class="h-auto" style:width={dynamicWidth} />
      {/each}
    </div>
    <div class="flex flex-col gap-1">
      {#each images2 as image}
        <img loading="lazy" fetchpriority="high" decoding="async" src={`work/img/${imgFolder}/${image}`} alt="Beauty" class="h-auto" style:width={dynamicWidth} />
      {/each}
    </div>
    <div class="flex flex-col gap-1">
      {#each images3 as image}
        <img loading="lazy" fetchpriority="high" decoding="async" src={`work/img/${imgFolder}/${image}`} alt="Beauty" class="h-auto" style:width={dynamicWidth} />
      {/each}
    </div>
  </div>

</div>

