<!-- ImageGrid.svelte -->

<script>
    import { onMount } from 'svelte';
    import { readdirSync } from 'fs';
  
    let images = [];
  
    onMount(async () => {
      // Read the directory to get a list of image files
      const files = readdirSync('static/beauty');
  
      // Filter out non-image files (you may want to customize this logic)
      images = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
    });
  </script>
  
  <div class="grid grid-cols-3 gap-4">
    {#each images as image}
      <img src={`/beauty/${image}`} alt="Beauty Image" class="w-full h-auto" />
    {/each}
  </div>
  
  <style>
    /* Additional styling can be added here */
  </style>
  