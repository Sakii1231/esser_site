<script>
    import { draw } from 'svelte/transition';
    import { slide } from 'svelte/transition';
	  import { quintOut } from 'svelte/easing';
    let showMenu = false;
    let isTransitioning = false;
  
    function toggleMenu() {
      isTransitioning = true;
      showMenu = !showMenu;
    }
  </script>
  
  <nav class="bg-white shadow-md py-4 px-6 flex justify-between items-center ">
    <ul class="md:flex space-x-6">
      <li><a href="/" class="text-3xl font-poppins font-[400]">ThatNepaliMUA</a></li>
    </ul>
    
    <div class="flex items-center md:hidden">
      <button
        class="text-gray-700 hover:text-gray-900 focus:outline-none"
        on:click={toggleMenu}
      >
        {#if showMenu}
        <!-- Close Icon -->
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
    
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
            in:draw={{ duration: 1500, delay: 0.1, easing: quintOut }}
          />
        </svg>
      {:else}
        <!-- Hamburger Icon -->
        <svg
          class="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        
        >
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            in:draw={{ duration: 1000, delay: 0.1, easing: quintOut }}
          />
        </svg>
      {/if}
      </button>
    </div>
    <ul class="hidden md:flex space-x-6">
      <li><a href="work" class="text-gray-700 text-xl font-poppins font-[300] hover:text-gray-900">Work</a></li>
      <li><a href="contact" class="text-gray-700 text-xl font-poppins font-[300] hover:text-gray-900">Contact</a></li>
    </ul>
  </nav>
  
  {#if showMenu}
    <div class="md:hidden" transition:slide={{ delay: 0, duration: 300, easing: quintOut, axis: 'y' }}>
      <ul class="bg-white shadow-md py-4 px-6 space-y-4">
        <li><a href="work" class="text-gray-700 text-xl font-poppins font-[300] hover:text-gray-900 block">Work</a></li>
        <li><a href="contact" class="text-gray-700 text-xl font-poppins font-[300] hover:text-gray-900 block">Contact</a></li>
      </ul>
    </div>
  {/if}