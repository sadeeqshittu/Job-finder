<script>
	export let primary = true;
</script>

<style>
	header{
		width:100%;
		padding:2em;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	h1{
		font-weight: 500;
	}

	.primary{
		background-color: #00B2EE;
		color:white;
	}

	a{
		text-decoration: none;
		color:inherit;
	}
</style>

<a href="/">
<header class:primary>
	<h1>JobFinder</h1>
</header>
</a>