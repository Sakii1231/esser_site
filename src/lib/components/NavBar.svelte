<script>
    let showMenu = false;
  
    function toggleMenu() {
      showMenu = !showMenu;
    }
  </script>
  
  <nav class="bg-white shadow-md py-4 px-6 flex justify-between items-center">
    <div class="text-3xl font-poppins font-[400]">ThatNepaliMUA</div>
    <div class="flex items-center md:hidden">
      <button
        class="text-gray-700 hover:text-gray-900 focus:outline-none"
        on:click={toggleMenu}
      >
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
          />
        </svg>
      </button>
    </div>
    <ul class="hidden md:flex space-x-6">
      <li><a href="#" class="text-gray-700 text-xl font-poppins font-[200] hover:text-gray-900">Work</a></li>
      <li><a href="#" class="text-gray-700 text-xl font-poppins font-[200] hover:text-gray-900">Press</a></li>
      <li><a href="#" class="text-gray-700 text-xl font-poppins font-[200] hover:text-gray-900">About</a></li>
      <li><a href="#" class="text-gray-700 text-xl font-poppins font-[200] hover:text-gray-900">Contact</a></li>
      <li>
        <a href="#" class="text-gray-700 text-xl hover:text-gray-900">
          <i class="fab fa-instagram" />
        </a>
      </li>
    </ul>
  </nav>
  
  {#if showMenu}
    <div class="md:hidden">
      <ul class="bg-white shadow-md py-4 px-6 space-y-4">
        <li><a href="#" class="text-gray-700 text-xl font-poppins font-[200] hover:text-gray-900 block">Work</a></li>
        <li><a href="#" class="text-gray-700 text-xl font-poppins font-[200] hover:text-gray-900 block">Press</a></li>
        <li><a href="#" class="text-gray-700 text-xl font-poppins font-[200] hover:text-gray-900 block">About</a></li>
        <li><a href="#" class="text-gray-700 text-xl font-poppins font-[200] hover:text-gray-900 block">Contact</a></li>
        <li>
          <a href="#" class="text-gray-700 hover:text-gray-900 block">
            <i class="fab fa-instagram" />
          </a>
        </li>
      </ul>
    </div>
  {/if}