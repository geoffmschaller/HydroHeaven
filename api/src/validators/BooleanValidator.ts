const BooleanValidator = (input: string | undefined | null): boolean => {
	if(input === undefined || input === null) return false;
	return (input.toLowerCase() === 'true' || input.toLowerCase() === 'false');
};

export default BooleanValidator;