<template>
	<div id="navigation-bar">
		<div id="top-bar">
			<img id="main-logo" :src="require('@/assets/images/main_logo_desktop_shaddow.png')" alt="">
			<div id="call-block">
				<div>Arroyo Grande: (805) 473 - 2205</div>
				<div>San Luis Obispo: (805) 544 - 1772</div>
			</div>
			<div class="clear"/>
		</div>
		<div id="nav-bar">
			<div id="mobile-menu-toggle" @click="toggleMobileMenu(true)"><i class="fas fa-bars"/></div>
			<div id="nav-items">
				<div class="item">Home</div>
				<div class="item">Hot Tubs & Spas</div>
				<div class="item">Swim Spas</div>
				<div class="item">BBQs & Islands</div>
				<div class="item">Service & Contact</div>
			</div>
		</div>
		<div class="mobile-menu" v-bind:class="{open: mobileIsOpen}" v-bind:style="{top: `${topOffset}px`}">
			<div id="close" @click="toggleMobileMenu(false)"><i class="fas fa-times"/></div>
			<div class="item">Home</div>
			<div class="item">Hot Tubs & Spas</div>
			<div class="item">Swim Spas</div>
			<div class="item">BBQs & Islands</div>
			<div class="item">Service & Contact</div>
		</div>
	</div>
</template>

<script src="./NavigationBar.ts"/>
<style scoped lang="sass" src="./NavigationBar.sass"/>