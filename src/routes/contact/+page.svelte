<script lang="ts">
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { Textarea } from "$lib/components/ui/textarea/index.js";
    import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
    import img from '$lib/images/contact.webp';
    import { PUBLIC_WEB_FORM_API } from '$env/static/public'
  </script>


<div class="flex justify-center items-center h-screen">
    <div class='grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2'>
        <div class="flex justify-center items-center h-screen">
            <div class="px-24 py-6 w-screen" in:fly={{ duration: 300, x:-300, y:0, opacity: 0.3, easing: quintOut }}>
                <p class="text-xl lg:text-2xl font-[800] text-gray-800 mb-8">Get in touch.</p>
                <form action="https://api.web3forms.com/submit" method="POST" class="text-sm lg:text-2xl">
                    <input type="hidden" name="access_key" value={PUBLIC_WEB_FORM_API}>
                    <Label for="name">Name</Label>
                    <Input type="text" id="name" name="name" required placeholder="Your name" />
                    <Label for="email-2">Email</Label>
                    <Input type="email" id="email-2" name="email" required placeholder="Your email" />
                    <Label for="message">Your message</Label>
                    <Textarea placeholder="Type your message here." id="message" name="message" required />
                    <div class="mt-8">
                        <button type="submit" class="bg-neutral-900 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded">Submit Form</button>
                    </div>
                    
                </form>

            </div>

        </div>
        <!-- <div class="flex w-full max-w-sm flex-col gap-1.5 mx-8 border">
            <div class="m-4" in:fly={{ duration: 300, x: -500, y: 0, opacity: 0.3, easing: quintOut }}>
                <form action="https://api.web3forms.com/submit" method="POST" class="">
                    <input type="hidden" name="access_key" value={PUBLIC_WEB_FORM_API}>
                    <Label for="name">Name</Label>
                    <Input type="text" id="name" name="name" required placeholder="Your name" />
                    <Label for="email-2">Email</Label>
                    <Input type="email" id="email-2" name="email" required placeholder="Your email" />
                    <Label for="message">Your message</Label>
                    <Textarea placeholder="Type your message here." id="message" name="message" required />
                    <div class="mt-8">
                        <button type="submit" class="bg-neutral-900 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded">Submit Form</button>
                    </div>
                    
                </form>
            </div>
    
          <!-- </div> -->
        <div class="hidden xl:block" style="background-image: url({img}); background-position: center; background-size: cover;" in:fly={{ duration: 300, x:0, y:300, opacity: 0.3, easing: quintOut }}>
            <div class="m-64 text-white">
                <p class="text-4xl font-bold">Contact For All Your Beauty Needs</p>
                <p class="my-4">Elevate your look and boost your confidence with Ruchi's expertise. Whether you're preparing for a special event or simply want to enhance your natural beauty, Ruchi is here to help. Get in touch today to schedule a consultation and discover how Ruchi can transform your look.</p>

            </div>
            <!-- <img loading="lazy" fetchpriority="high" decoding="async" src={`${img}`} alt="Beauty" class="w-full h-screen shadow-lg" in:fly={{ duration: 300, x:0, y:200, opacity: 0.3, easing: quintOut }} /> -->
        </div>
    </div>

</div>

