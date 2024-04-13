<script>
  import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
  // let images = [];

  // const imageModules = import.meta.glob("$lib/images/beauty/*.webp", { query: "?url" });

  // for (const modulePath in imageModules) {
  //   const fileName = modulePath.split("/").pop();
  //   images = [...images, fileName];
  //   console.log(images)
  // }
  const imageModules = import.meta.glob("$lib/images/beauty/*.webp", { query: "?url" });
  let images = [];

  for (const modulePath in imageModules) {
    const fileName = modulePath.split("/").pop();
    images.push(fileName);
  }

  // Shuffle the images array
  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }

  console.log(images);
</script>

<div in:fly={{ duration: 300, x: 500, y: 0, opacity: 0.3, easing: quintOut }} class="grid grid-cols-1 sm:grid-cols-3 gap-4 grid-flow-dense m-4">
    {#each images as image}
      <img loading="lazy" fetchpriority="high" decoding="async" src={`src/lib/images/beauty/${image}`} alt="Beauty" class="w-full h-auto" />
    {/each}
</div>