<template>
	<div>
		<BlockMenu/>
		
		
		<Spacer setHeight="1000"></Spacer>
	</div>
</template>

<script>

	// @ is an alias to /src
	import BlockMenu from "../components/BlockMenu/BlockMenu.vue";
	import Spacer from "../utils/Spacer/Spacer.vue";
	import WhiteSectionTitle from "../components/SectionTitle/WhiteSectionTitle.vue";

	export default {
		name: 'Home',
		components: {
			BlockMenu,
			Spacer,
			WhiteSectionTitle
		}
	}
</script>
