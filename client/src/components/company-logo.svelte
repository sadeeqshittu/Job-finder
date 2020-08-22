<script>
	export let job;
</script>

<style>
	
	.logo{
		width:60px;
		height: 60px;
		background-repeat: no-repeat;
		background-size: cover;
		background-position:center;
		border-radius: 50%;
		position:absolute;
		left:10px;
	}
</style>

{#if job.company_logo === null}
   <div class="logo" style="background-image: url('images/image-Unavailable.jpg')"></div>
{:else}
<div class="logo" style="background-image: url({job.company_logo})"></div>
{/if}