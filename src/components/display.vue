<template>
	<p>{{ result }}</p>
</template>

<script>
	export default{
	  name: 'display',
	  data: () => {
	    let result = 816500
	    return {result}
	  }
	}
</script>

<style>
	p{
		font-size: 50px;
		padding-top: 20px;
	}
</style>