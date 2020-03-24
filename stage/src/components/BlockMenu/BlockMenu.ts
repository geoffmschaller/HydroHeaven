import {Component, Vue} from "vue-property-decorator";
import WhiteSectionTitle from '../SectionTitle/WhiteSectionTitle.vue';

@Component
export default class BlockMenu extends Vue {

	components = {
		WhiteSectionTitle: WhiteSectionTitle
	};

	getImgUrl(pic: string) {
		return require('@/assets/images/categories/' + pic)
	}

	categories: Array<Object> = [
		{
			img: "hot_tub_spas.jpg",
			title: "Hot Tubs and Spas",
			description: "We searched the country and found the spa brands that provide the highest product quality, affordable pricing, and highest" +
				" customer satisfaction.",
			button: "View Hot Tubs",
			link: "/spas-hot-tubs"
		},
		{
			img: "swim_spas.jpg",
			title: "Swim Spas",
			description: "Spas aren&apost just for relaxing anymore. Get your work out in with one of American Whirlpools award winning swim spas.",
			button: "View Swim Spas",
			link: "/swim-spas"
		},
		{
			img: "bbq_islands.jpg",
			title: "BBQs & Islands",
			description: "With its superior products, facilities, and team, Bull Outdoor Products Inc. pioneered the concept of outdoor barbecue islands.",
			button: "View BBQs and Islands",
			link: "/bbq-islands"
		}
	]

}