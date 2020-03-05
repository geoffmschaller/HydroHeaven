class TextValidator {

	static validate = (input: string): boolean => {
		const cleaned = input.trim().replace(/ /, "");
		return typeof cleaned === "string" && cleaned !== null && cleaned !== "";
	}

}

export default TextValidator;