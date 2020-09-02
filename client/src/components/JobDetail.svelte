<script>
	import { onMount } from 'svelte';
	import  Header from './Header.svelte';
	import Logo from './company-logo.svelte';
	// import Paper, {Title, Subtitle, Content} from '@smui/paper/bare.js';
	// import '@smui/paper/bare.css';
    export let params;


    let job = {};

    const getData = async() => {
    	const res = await fetch(`https://api-job-search.herokuapp.com/jobs/${params.id}`);
    	job = await res.json();
    }

    onMount(getData);

</script>

<style>
	main {
		max-width:960px;
		margin:40px auto;
		font-size:13px;
		font-weight: 500;

	}

	.job-detail-wrapper{
		border:1px;
		border-radius:5px;
		display:flex;
		justify-content: center;
		box-shadow:  0px 1px 3px rgba(0, 0, 0, 0.3);
		position:relative;
	}

	.content{
		width:80%;
		padding:30px;
	}

	.title{
		font-weight: 600;
		padding-bottom:4px;

	}
</style>

<Header primary={true}/>

<main>
	<div class="job-detail-wrapper">
		<div class="head-section">
			<Logo {job} />
		</div>
		<div class="content">
		  <p class='title'>{job.title}</p>
			{@html job.description}
		</div>
	</div>
</main>
