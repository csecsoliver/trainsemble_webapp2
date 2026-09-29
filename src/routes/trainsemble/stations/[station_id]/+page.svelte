<script lang="ts">
	import type { PageProps } from './$types';
	import { getStation } from './data.remote';
	const props: PageProps = $props();
</script>

<div>
	{#await getStation(props.params.station_id)}
		<p>Loading...</p>
	{:then station}
		<div>
			<p>Name: {station.name}</p>
		</div>
		<div>
			<p>Created at: {station.created_at}</p>
		</div>
		<div>
			<p>Updated at: {station.updated_at}</p>
		</div>
	{:catch e}
		{e}
	{/await}
</div>
