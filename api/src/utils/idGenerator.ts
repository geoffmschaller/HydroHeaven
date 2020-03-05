import {IDGeneratorRules} from "./constants";

class IDGenerator {

	static generate = (rule: IDGeneratorRules, length: number): string => {

		const nums: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
		const lower: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
		const upper: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
		let values: string[] = [];

		switch (rule) {

			case IDGeneratorRules.LOWER:
				values = values.concat(lower);
				break;
			case IDGeneratorRules.LOWER_UPPER:
				values = values.concat(lower).concat(upper);
				break;
			case IDGeneratorRules.NUMERIC:
				values = values.concat(nums);
				break;
			case IDGeneratorRules.NUMERIC_LOWER:
				values = values.concat(nums).concat(lower);
				break;
			case IDGeneratorRules.NUMERIC_UPPER:
				values = values.concat(nums).concat(upper);
				break;
			case IDGeneratorRules.UPPER:
				values = values.concat(upper);
				break;
			default:
				values = values.concat(upper).concat(lower).concat(nums);
				break;

		}

		let result = "";
		for (let i = 0; i < length; i++) {
			result += values[Math.floor(Math.random() * values.length)];
		}
		return result;
	}


}

export default IDGenerator;