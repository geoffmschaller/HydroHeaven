class Validator {

	static validateText = (input) => {
		try {
			return !(input === null || input === '' || typeof input !== 'string');
		} catch (e) {
			return false;
		}
	};

	static validateEmail = (input) => {
		try {
			if (input === null || input === '' || typeof input !== 'string' || input.indexOf('@') < 0 || input.indexOf('.') < 0) return false;
			const split = input.split('@');
			if (split.length !== 2) return false;
			if (split[0] === null || split[0] === '' || typeof split[0] !== 'string') return false;
			const domain = split[1].split('.');
			if (domain.length < 2) return false;
			return !(domain[0] === null || domain[0] === '' || typeof domain[0] !== 'string');
		} catch (e) {
			return false;
		}
	};
}

module.exports = Validator;
