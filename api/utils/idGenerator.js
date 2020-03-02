const {IDRules} = require('./constants');

class IdGenerator {

	static generate = async (len, rule) => {
		const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
		const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
		const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
		let symbols = [];

		switch (rule) {
			case IDRules.ALPHA:
				symbols = symbols.concat(lower).concat(upper);
				break;
			case IDRules.LOWER:
				symbols = symbols.concat(lower);
				break;
			case IDRules.NUMERIC:
				symbols = symbols.concat(nums);
				break;
			case IDRules.NUMERIC_LOWER:
				symbols = symbols.concat(nums).concat(lower);
				break;
			case IDRules.NUMERIC_UPPER:
				symbols = symbols.concat(nums).concat(upper);
				break;
			case IDRules.UPPER:
				symbols = symbols.concat(upper);
				break;
			default:
				symbols = symbols.concat(nums).concat(upper).concat(lower);
				break;
		}
		let token = "";
		for (let i = 0; i <= len; i++) {
			token += symbols[Math.floor(Math.random() * symbols.length)];
		}
		return token;
	};

	static generateUserId = async (len) => {
		try {
			const generatedId = await this.generate(20, IDRules.NUMERIC_UPPER_LOWER);
			if (!generatedId || generatedId === "") return false;
			return generatedId;
		} catch (e) {
			return false;
		}
	};

	static generateAddressBookId = async (len) => {
		try {
			const generatedId = await this.generate(20, IDRules.NUMERIC_UPPER_LOWER);
			if (!generatedId || generatedId === "") return false;
			return generatedId;
		} catch (e) {
			return false;
		}
	};

}

module.exports = IdGenerator;