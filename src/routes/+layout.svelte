<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<h1>Sum' page</h1>
	<a href="/">Home</a>
	<a href="/login">Login</a>
	<details>
		<summary>Trainsemble</summary>
		<a href="/trainsemble/cars">Cars</a><br />
		<a href="/trainsemble/stations">Stations</a><br />
		<a href="/trainsemble/routes">Routes</a><br />
		<a href="/trainsemble/sightings">Sightings</a><br />
	</details>
</header>

{@render children()}
