const TextValidator = (input: string | undefined | null, max?: number | null, min?: number): boolean => {
	try {
		if(input === undefined || input === null) return false;

		const cleaned = input.trim().replace(/ /, "");
	
		if (max && cleaned.length > max) return false;
		if (min && cleaned.length < min) return false;
	
		return cleaned !== null && cleaned !== "";
	} catch(e) {
		return false;
	}
};

export default TextValidator;