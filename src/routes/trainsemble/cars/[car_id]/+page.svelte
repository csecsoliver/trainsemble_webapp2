<script lang="ts">
	import type { PageProps } from './$types';
	import {
		editCarAgency,
		editCarNick,
		editCarType,
		editCarUIC,
		editCarVagonweb,
		getCar
	} from './data.remote';
	const props: PageProps = $props();
	import FormField from '#lib/FormField.svelte';
	import { redirect } from '@sveltejs/kit';
</script>

<div>
	{#await getCar(props.params.car_id)}
		<p>Loading...</p>
	{:then car}
		{#key car.id}
			{@const editCarUICForm = editCarUIC.for(car.id)}
			{@const editCarNickForm = editCarNick.for(car.id)}
			{@const editCarTypeForm = editCarType.for(car.id)}
			{@const editCarAgencyForm = editCarAgency.for(car.id)}
			{@const editCarVagonwebForm = editCarVagonweb.for(car.id)}
			<div>
				<FormField
					form={editCarUICForm}
					field={editCarUICForm.fields.uic.as('text', car.uic)}
					id="uic"
					label="UIC:"
					placeholder={car.uic}
				>
					<input {...editCarUICForm.fields.id.as('hidden', car.id)} />
				</FormField>
			</div>
				<div>
					<FormField
						form={editCarNickForm}
						field={editCarNickForm.fields.nick.as('text', car.nick??"")}
						id="nick"
						label="Nickname:"
						placeholder={car.nick??""}
					>
						<input {...editCarNickForm.fields.id.as('hidden', car.id)} />
					</FormField>
				</div>
			<div>
				<FormField
					form={editCarTypeForm}
					field={editCarTypeForm.fields.type.as('text', car.type)}
					id="type"
					label="Type:"
					placeholder={car.type}
				>
					<input {...editCarTypeForm.fields.id.as('hidden', car.id)} />
				</FormField>
			</div>
			<div>
				<FormField
					form={editCarAgencyForm}
					field={editCarAgencyForm.fields.agency.as('text', car.agency)}
					id="agency"
					label="Agency:"
					placeholder={car.agency}
				>
					<input {...editCarAgencyForm.fields.id.as('hidden', car.id)} />
				</FormField>
			</div>
			<div>
				<FormField
					form={editCarVagonwebForm}
					field={editCarVagonwebForm.fields.vagonweb.as('text', car.vagonweb ?? '')}
					id="vagonweb"
					label="Vagonweb image link:"
					placeholder={car.vagonweb ?? ''}
				>
					<input {...editCarVagonwebForm.fields.id.as('hidden', car.id)} />
				</FormField>
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
		{/key}
	{:catch}
		{redirect(303, '/login')}
	{/await}
</div>
