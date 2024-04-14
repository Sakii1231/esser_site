<script lang="ts">
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { Textarea } from "$lib/components/ui/textarea/index.js";
    import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
    import img from '$lib/images/Untitled-3.jpg';
    import { PUBLIC_WEB_FORM_API } from '$env/static/public'
  </script>


<div class='grid grid-cols-1 sm:grid-cols-2'>
    <div class="flex w-full max-w-sm flex-col gap-1.5 m-8">
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

      </div>
    <div>
        <img loading="lazy" fetchpriority="high" decoding="async" src={`${img}`} alt="Beauty" class="w-full h-auto m-2 rounded-lg shadow-lg" in:fly={{ duration: 300, x:0, y: 300, opacity: 0.3, easing: quintOut }} />
    </div>
</div>