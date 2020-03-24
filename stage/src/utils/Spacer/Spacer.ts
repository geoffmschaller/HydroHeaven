import {Prop, Vue, Component} from "vue-property-decorator";

@Component
export default class Spacer extends Vue {

	@Prop() private setHeight!: string;

}