const TextValidator = (input: string, max?: number | null, min?: number): boolean => {

	const cleaned = input.trim().replace(/ /, "");

	if (max && cleaned.length > max) return false;
	if (min && cleaned.length < min) return false;

	return cleaned !== null && cleaned !== "";
};

export default TextValidator;