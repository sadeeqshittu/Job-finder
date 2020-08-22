<script>

	import Header from './Header.svelte';
	import Listings from './listings.svelte';
	import Filter from './search-filter.svelte';
	import { onMount } from 'svelte';

	export let jobs = [];

	const handleSubmit = async(e) => {

		const { description, location } = e.detail;
		const res = await fetch(`http://localhost:3000/jobs/${description}/${location}`)
		jobs = await res.json();
	}

	

    // onMount(async () => {
    // 	const res = await fetch('http://localhost:3000/jobs');
    // 	jobs = await res.json();
    // })

</script>

<Header primary={true}/>

<main>
	<Filter rounded={true} on:getjob={(e) => handleSubmit(e)}/>
	<Listings {jobs} />
</main>

<style>
	main{
		display:flex;
		flex-direction: column;
		justify-content: center;

	}
</style>