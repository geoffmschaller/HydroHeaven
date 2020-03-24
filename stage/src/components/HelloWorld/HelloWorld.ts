import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {

	@Prop() private msg!: string;

	private userName: string = "Geoff";
	private counter: number = 0;

	private changeName(): void {
		this.userName = "Carl";
	};

	private incrementCounter(): void {
		this.counter++;
	};

	private get nameCount(): string {
		return `Hello ${this.userName}, you have clicked ${this.counter} times!`;
	}

}