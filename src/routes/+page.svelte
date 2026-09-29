<script lang="ts">
	import { getCars } from "./data.remote";    
</script>

<ul>
    {#each await getCars() as car (car.id) }
        <li><a href="car/{car.id}" data-car-id="{car.id}" class="car-list-item">{car.uic} ({car.nick})</a></li>
    {/each}
</ul>
