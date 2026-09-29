<script lang="ts">
	import type { PageProps } from './$types';
	import { getCar } from './data.remote';
	const props: PageProps = $props();
</script>

<p>
	{#await getCar(props.params.car_id)}
		Loading...
	{:then car}
		{car.uic} ({car.nick})
	{:catch e}
		{e}
	{/await}
</p>
