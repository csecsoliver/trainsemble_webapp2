<script lang="ts">
	import type { PageProps } from './$types';
	import { editCarUIC, getCar } from './data.remote';
	const props: PageProps = $props();
	import FormField from '#lib/FormField.svelte'
	import { redirect } from '@sveltejs/kit';
</script>

<div>
	{#await getCar(props.params.car_id)}
		<p>Loading...</p>
	{:then car}
		<!-- <dialog id="car-dialog"> -->
			<div>
				<FormField
					form={editCarUIC}
					field={editCarUIC.fields.uic.as('text', car.uic)}
					id="uic"
					label="UIC:"
					placeholder={car.uic}
				>
					<input {...editCarUIC.fields.id.as('hidden', car.id)} />
				</FormField>
				
			</div>
			{#if car.nick}
				<div>
					<label>
						Nickname:
						<input type="text" bind:value={car.nick} />
					</label>
				</div>
			{/if}
			<div>
				<label for="car-type">
					Type:
					<input type="text" id="car-type" bind:value={car.type} placeholder={car.type} />
				</label>
			</div>
		<!-- </dialog> -->
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
	{:catch}
		{redirect(303, "/login")}
	{/await}
</div>
