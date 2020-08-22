<script>
	import { onMount } from 'svelte';
	import router from 'page';
	import Home from './components/Home.svelte';
    import JobDetail from './components/JobDetail.svelte';
    export let jobs = [];
	let page;
    let params;
     
    onMount(async() => {
    	const res = await fetch('http://localhost:3000/jobs');
    	jobs = await res.json();
    })

	router('/', () => page = Home);
	router('/job/:id', (ctx, next) => {
		params = ctx.params
		next()
	}, () => page = JobDetail)
    router.start();

</script>

{#if page === Home}
   <svelte:component this={page} jobs={jobs} params={params} />
{:else}
<svelte:component this={page} params={params}/>
{/if}