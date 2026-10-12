<script lang="ts" generics="Input extends RemoteFormInput, Output">
	import type { RemoteForm, RemoteFormInput } from '$app/server';
	import type { Snippet } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	let {
		form,
		field,
		id,
		label,
		placeholder,
		children
	}: {
		form: Omit<RemoteForm<Input, Output>, 'for'>;
		field: HTMLInputAttributes;
		id: string;
		label: string;
		placeholder?: string;
		children?: Snippet;
	} = $props();
</script>

<form {...form}>
	{@render children?.()}
	<label for={id}>{label}</label>
	{#if form.fields.dirty()}
		*dirty*
	{/if}
	<br />
	<input {...field} {id} {placeholder} />
	<button type="submit">Save</button>
</form>
