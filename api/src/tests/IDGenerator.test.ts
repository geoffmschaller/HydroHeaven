import IDGenerator from "../utils/idGenerator";
import {IDGeneratorRules} from "../utils/constants";

describe("IDGenerator Suite", () => {

	test("Length Test", () => {
		expect(IDGenerator.generate(IDGeneratorRules.NUMERIC_LOWER_UPPER, 10)).toHaveLength(10);
		expect(IDGenerator.generate(IDGeneratorRules.LOWER_UPPER, 5)).toHaveLength(5);
		expect(IDGenerator.generate(IDGeneratorRules.NUMERIC, 13)).toHaveLength(13);
	});

	test("Return Test", () => {
		expect(IDGenerator.generate(IDGeneratorRules.NUMERIC_LOWER_UPPER, 10)).toBeDefined();
		expect(IDGenerator.generate(IDGeneratorRules.NUMERIC_LOWER_UPPER, 10)).not.toBeNaN();
		expect(IDGenerator.generate(IDGeneratorRules.NUMERIC_LOWER_UPPER, 10)).not.toBeNull();
	});


});