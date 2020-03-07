const NumberValidator = (num: string | number, max?: number | null, min?: number): boolean => {

	const converted = typeof num === 'string' ? parseInt(num) : num;

	if (max && converted > max) return false;
	if (min && converted < min) return false;

	return !isNaN(converted);

};

export default NumberValidator;