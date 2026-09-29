<script lang="ts">
	import type { PageProps } from './$types';
	import { getCar } from './data.remote';
	const props: PageProps = $props();
</script>

<div>
	{#await getCar(props.params.car_id)}
		<p>Loading...</p>
	{:then car}
		<div>
			<p>UIC: {car.uic}</p>
		</div>
		{#if car.nick}
			<div>
				<p>Nickname: {car.nick}</p>
			</div>
		{/if}
		<div>
			<p>Type: {car.type}</p>
		</div>
		<div>
			<p>Created at: {car.created_at}</p>
		</div>
		<div>
			<p>Updated at: {car.updated_at}</p>
		</div>
		{#if car.vagonweb}
			<div>
				<img
					src={car.vagonweb}
					alt="The traincar's vagonweb picture: {car.vagonweb}"
					title="The traincar's vagonweb picture: {car.vagonweb}"
				/>
			</div>
		{/if}
	{:catch e}
		{e}
	{/await}
</div>
