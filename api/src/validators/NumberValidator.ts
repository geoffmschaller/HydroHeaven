const NumberValidator = (num: string | number | undefined | null, max?: number | null, min?: number): boolean => {


	try {
		if(num === undefined || num === null) return false;

		const pattern: RegExp = /^[0-9\.]*$/g;
		const containsNonNumerics = pattern.test(num.toString());
		const decimalCheck = num.toString().split(".").length;
		if(!containsNonNumerics || decimalCheck > 2) return false;
	
		const converted = typeof num === 'string' ? parseFloat(num) : num;
		if (max && converted > max) return false;
		if (min && converted < min) return false;
	
		return !isNaN(converted);
	}catch (e){
		return false;
	}


};

export default NumberValidator;