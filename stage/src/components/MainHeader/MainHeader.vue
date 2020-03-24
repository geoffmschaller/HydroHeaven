<template>
	<div id="main-header">
		<div id="video-container">
			<video :src="require('../../assets/video/spa_jets.mp4')" autoplay loop></video>
			<div id="text-container">
				<div id="top-title">Ultimate In</div>
				<div id="main-title">Massage <br> & Therapy</div>
				<div id="line-break"/>
				<div id="main-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias asperiores at beatae consectetur cum, impedit in ipsa
					molestiae mollitia obcaecati odit provident quia repellendus repudiandae sed sunt tempora, vel.
				</div>
				<div id="button-bar">
					<button class="btn-success"><i class="fal fa-play"></i> Watch The Video</button>
					<button class="btn-white-transparent">Learn More</button>
					<button class="btn-white-transparent">View Most Popular</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./MainHeader.ts"/>
<style scoped lang="sass" src="./MainHeader.sass"/>