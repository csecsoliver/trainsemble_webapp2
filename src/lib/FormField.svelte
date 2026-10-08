<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLFormAttributes, HTMLInputAttributes } from 'svelte/elements';

	let {
		form,
		field,
		id,
		label,
		placeholder,
		children
	}: {
		form: HTMLFormAttributes;
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
	<input {...field} {id} {placeholder} />
	<button type="submit">Save</button>
</form>
