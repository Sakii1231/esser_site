<script>
	import '../app.pcss';
	import '../app.pcss';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let showScrollToTopArrow = false;

	function handleScroll() {
		const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
		showScrollToTopArrow = scrollPosition > 1500; // Adjust the threshold as needed
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<svelte:window on:scroll={handleScroll} />

<NavBar />
<main class="font-poppins font-[300]">
	<slot></slot>
  </main>

  {#if showScrollToTopArrow}
  <button
  title="Back to top"
    class="fixed bottom-20 right-0 p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 focus:outline-none" transition:fly={{ duration: 300, x: 0, y: 300, opacity: 0.3, easing: quintOut }}
    on:click={scrollToTop}
  >
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      />
    </svg>
  </button>
{/if}
<Footer />
