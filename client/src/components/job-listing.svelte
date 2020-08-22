<script>
	import Logo from './company-logo.svelte';
	import {fade} from 'svelte/transition';
	import router from 'page';
	export let job;
	let id;
	let active = true;
    
	</script>

<style>
	.post{
		display:flex;
		flex-direction: row;
		justify-content: space-around;
		width:100%;
		padding:1.5em;
		border-radius: 5px;
		box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
		margin-bottom:10px;
		position:relative;
	}

	.post:hover {
		cursor:pointer;
	}

	.item{
		display:flex;
		flex-direction: column;
		align-items: center;
		margin-right:100px;

	}

	p{
		padding:5px;
	}

	.title{
		font-weight: 400;
	}
    
    .active {
    	border-left: 5px solid rgb(0, 191, 255);
    }

    a{
    	text-decoration: none;
    	color:inherit;
    }

</style>

<a href="/job/{job.id}">
<div class="post" transition:fade class:active>
    <Logo {job} />
	<div class="item">
		<p class="title">{job.title}</p>
		<p class="sub">{job.company}</p>
		<p>{job.type}</p>
	</div>

	<div class="item">
		<p class="title">{job.location}</p>
		<p class="sub">location</p>
	</div>

	
	
</div>
</a>