const TokenGenerator = require('../utils/tokenGenerator');

const validAuthToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblR5cGUiOiJhdXRoIiwiaWF0IjoxNTgyNzQ2OTAzfQ.fRw6FhsODhnBaEkJRz8k4r6SqLfaMKSB3lQhFEtEhZY";
const validResetToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblR5cGUiOiJyZXNldF9wYXNzd29yZCIsImlhdCI6MTU4Mjc0NjkwM30.uWtKMQ1nlTdv-CaIB-Az2hLcBOfjwqs2BJNJZp4geBI";
const fakeEmail = "fake@fake.com";

describe("Token Generator Class", () => {

	test("Valid Auth Token", async () => {
		expect(await TokenGenerator.validateAuthToken(validAuthToken)).toBeTruthy();
	});

	test("Null Auth Token", async () => {
		expect(await TokenGenerator.validateAuthToken(null)).toBeFalsy();
	});

	test("Empty Auth Token", async () => {
		expect(await TokenGenerator.validateAuthToken("")).toBeFalsy();
	});

	test("Invalid Auth Token", async () => {
		expect(await TokenGenerator.validateAuthToken("THIS_IS_A_FAKE_TOKEN")).toBeFalsy();
	});

	test("Valid Reset Token", async () => {
		expect(await TokenGenerator.validateResetToken(validResetToken)).toBeTruthy();
	});

	test("Null Reset Token", async () => {
		expect(await TokenGenerator.validateResetToken(null)).toBeFalsy();
	});

	test("Empty Reset Token", async () => {
		expect(await TokenGenerator.validateResetToken("")).toBeFalsy();
	});

	test("Invalid Reset Token", async () => {
		expect(await TokenGenerator.validateResetToken("THIS_IS_A_FAKE_RESET_TOKEN")).toBeFalsy();
	});

	test("Generate Token", async () => {
		expect(await TokenGenerator.generateAuthToken("fake@fake.com")).not.toBeFalsy();
		expect(await TokenGenerator.generateAuthToken("fake2@fake2.com")).not.toBeFalsy();
		expect(await TokenGenerator.generateAuthToken("fake@fake.com")).not.toBeNull();
		expect(await TokenGenerator.generateAuthToken("fake2@fake2.com")).not.toBeNull();
	});

});