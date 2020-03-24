import {Component, Vue} from 'vue-property-decorator';

@Component
export default class NavigationBar extends Vue {

	mobileIsOpen: boolean = false;
	topOffset: number = 0;

	toggleMobileMenu(mode: boolean) {
		if (mode) {
			this.topOffset = window.scrollY;
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
		this.mobileIsOpen = mode;
	}

}