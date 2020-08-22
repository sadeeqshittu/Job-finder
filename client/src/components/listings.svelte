<script>
	import JobListing from './job-listing.svelte';
	export let jobs;

	
</script>

<style>
	.listings{
		width:80%;
		margin:40px auto;
	}

	.no-job{
		text-align:center;
		margin:40px;
		color:grey;
	}
</style>

{#if jobs.length >= 1}
<div class="listings">
	{#each jobs as job (job.id)}
       <JobListing {job}  on:click/>
	{/each}
</div>
{:else}
   <div class="no-job">
   	   No jobs available...
   </div>
{/if}
