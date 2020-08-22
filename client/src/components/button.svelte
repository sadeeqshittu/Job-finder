<script>
	export let type = 'secondary';
	export let flat = true;
	export let inverse =false;

	
</script>

<style>
	button{
		border:0;
		cursor:pointer;
		font-weight: bold;
		padding:8px 12px;
		box-shadow: 1px 2px 3px rgba(0, 0, 0,0.2);
		width:100px;
		border-radius:5px;
		outline:none;
	}

	.primary{
		background-color: #00B2EE;
		color:white;
	}

	.secondary{
		background-color:#52BE80;
		color:white;
	}

	.flat{
		box-shadow: none;
	}

	.delete{
		background-color: rgb(255,0 ,0);
		color:white;
	}


</style>

<button class={type} class:flat={flat} class:inverse={inverse} on:click={()=> console.log('hello')}>
</button>