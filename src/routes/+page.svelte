<script lang="ts">
  import img1 from '$lib/images/IMG_0317.webp';
  import img2 from '$lib/images/HEROIMAGE.png';
  console.log("running")
  const imageModules = import.meta.glob("../../static/beauty/*.webp");
  console.log("running2")

for (const modulePath in imageModules) {
  imageModules[modulePath]().then(({ default: imageUrl }) => {
    console.log(modulePath, imageUrl);
  });
}
</script>

<section class="my-2 flex flex-col md:flex-row items-center justify-center py-16 px-8 md:px-16">
  <div class="text-center md:text-left max-w-2xl">
    <h1 class="text-2xl md:text-4xl font-[800] text-gray-800 mb-4 text-center">Transforming Your Look, Elevating Your Confidence</h1>
    <p class="text-sm md:text-lg text-gray-600 mb-8 text-center">Discover the artistry of Ruchi, a Nepali makeup maven bringing a touch of glamour to Australia. From subtle enhancements to striking transformations, let Ruchi's expertise illuminate your natural beauty.</p>
    <!-- <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Call to Action
    </button> -->
    <div class="flex justify-center mt-8 md:hidden">
      <img src={img2} alt="hero" class="rounded-lg shadow-lg max-w-screen-l" />
    </div>
    <div class="hidden md:flex justify-center mt-8">
      <img src={img2} alt="hero" class="rounded-lg shadow-lg max-w-screen-xl" />
    </div>
    
  </div>
</section>


