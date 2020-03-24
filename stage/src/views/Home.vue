<template>
	<div class="home">
		<p>HOME PAGE</p>
		<HelloWorld msg="Hello There!!!"/>
	</div>
</template>

<style scoped>
	p {
		color: red;
	}
</style>

<script>

	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld/HelloWorld.vue'

	export default {
		name: 'Home',
		components: {
			HelloWorld
		}
	}
</script>
