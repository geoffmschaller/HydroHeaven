<template>
	<div id="block-menu">
		<WhiteSectionTitle/>
		<div id="block-items">
			<div v-for="cat in categories" :key="cat.title" class="item">
				<img :src="getImgUrl(cat.img)" alt="">
				<div class="title">
					<div class="text">{{cat.title}}</div>
				</div>
				<div class="description">{{cat.description}}</div>
				<a :href="cat.link">
					<button class="btn-highlight-transparent">{{cat.button}}</button>
				</a>
			</div>
		</div>
		<div class="clear"/>
	</div>
</template>

<script src="./BlockMenu.ts"/>
<style scoped lang="sass" src="./BlockMenu.sass"/>