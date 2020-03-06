const NumberValidator = (num: string | number): boolean => {

	try {
		const converted = typeof num === 'string' ? parseInt(num) : num;
		return !isNaN(converted);
	} catch (e) {
		return false;
	}


};

export default NumberValidator;