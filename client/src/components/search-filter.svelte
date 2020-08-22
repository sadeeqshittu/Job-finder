<script>
	import {createEventDispatcher} from 'svelte';
    export let rounded = false;
    let flat = true;
    let type = 'primary';

	const dispatch = createEventDispatcher();

	let searchTerm = {
		description:'',
		location: ''
	}

	const handleSubmit = () => {
		dispatch('getjob', searchTerm);
		searchTerm.description = '';
		searchTerm.location = '';
	}	
</script>

<style>
	.filter{
		width:100%;
		display: flex;
		justify-content: center;
	}

	.filter-item{
      padding:10px;
	}

	h3{
		font-size:24px;
		font-weight: 500;
		margin-bottom:5px;
	}

	.input-wrapper{
		position:relative;
		width:300px;
		height:50px;
		display: flex;
		align-items: center;
	}

	ion-icon{
		font-size:20px;
        position:absolute;
        right:10px;
	}

	input{
		padding-left:10px;
		width:80%;
		outline:none;
		border:none;
		font-size: 14px;
		color:grey;

	}

	.rounded{
		border: solid 2px rgb(242,242,242);
		border-radius:20px;
	}

	.btn{
		display: flex;
		align-items: center;
	}

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
</style>

<div class="filter">
	<div class="filter-item">
		<h3>Description</h3>
		<div class="input-wrapper" class:rounded>
			<ion-icon name="search-outline"></ion-icon>
			<input type="text" name="description" placeholder="Javascript, Ruby, Java..." bind:value={searchTerm.description}>
		</div>
	</div>

	<div class="filter-item">
		<h3>Location</h3>
		<div class="input-wrapper" class:rounded>
			<ion-icon name="location-outline"></ion-icon>
			<input type="text" placeholder="Location" name="location" bind:value={searchTerm.location}>
		</div>
	</div>

	<div class="filter-item btn">
		<button class={type} class:flat={flat}  on:click={() => handleSubmit()}>Find job</button>
	</div>
</div>
