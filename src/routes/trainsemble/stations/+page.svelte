<script lang="ts">
	import { getStations } from './data.remote';
</script>

<div>
	<h3>Stations:</h3>
	<ul>
		{#await getStations()}
			Loading...
		{:then stations}
			{#each stations as station (station.id)}
				<li>
					<a
						href="/trainsemble/stations/{station.id}"
						data-station-id={station.id}
						class="station-list-item"
						>{station.name}
					</a>
				</li>
			{/each}
		{/await}
	</ul>
</div>
