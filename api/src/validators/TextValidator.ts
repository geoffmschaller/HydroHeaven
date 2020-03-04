import Validator from "./Validator";

class TextValidator extends Validator {

	constructor(input: string) {
		super(input);
	}

	public validate = (): boolean => {
		const cleaned = this.testInput.trim().replace(/ /, "");
		return typeof cleaned === "string" && cleaned !== null && cleaned !== "";
	}

}

export default TextValidator;