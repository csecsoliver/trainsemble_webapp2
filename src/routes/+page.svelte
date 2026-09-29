<script lang="ts">
	import { getCars } from "./data.remote";

    const cars = await getCars()
    
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<ul>
    {#each await getCars() as car}
        <li><a href="car/{car.id}">{car.uic}</a></li>
    {/each}
</ul>
