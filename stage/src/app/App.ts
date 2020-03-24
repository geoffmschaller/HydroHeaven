import Vue from "vue";
import Component from "vue-class-component";
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import MainHeader from "@/components/MainHeader/MainHeader.vue";

@Component({
	components: {NavigationBar, MainHeader}
})
export default class App extends Vue {
}