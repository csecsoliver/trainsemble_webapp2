<script lang="ts">
	import { getCars } from './data.remote';
</script>

<div>
	<h3>Cars:</h3>
	<ul>
		{#await getCars()}
			Loading...
		{:then cars}
			{#each cars as car (car.id)}
				<li>
					<a href="/trainsemble/cars/{car.id}" data-car-id={car.id} class="car-list-item"
						>{car.uic} ({car.nick})<br />
						{#if car.vagonweb}
							<img
								src={car.vagonweb}
								alt="The traincar's vagonweb picture: {car.vagonweb}"
								title="The traincar's vagonweb picture: {car.vagonweb}"
							/>
						{/if}
					</a>
				</li>
			{/each}
		{/await}
	</ul>
</div>
