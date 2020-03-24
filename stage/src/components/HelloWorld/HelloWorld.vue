<template>
	<div class="hello">
		<h1>{{ msg }} {{ userName }} {{ counter }}</h1>
		<h1>{{ nameCount }}</h1>
		<button @click="changeName()">CHANGE NAME</button>
		<button @click="incrementCounter()">Add</button>
	</div>
</template>

<script lang="ts" src="./HelloWorld.ts"></script>
<style scoped lang="sass" src="./HelloWorld.sass"></style>
