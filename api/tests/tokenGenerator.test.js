const TokenGenerator = require('../utils/tokenGenerator');

it("Testing the Token Generator.", async () => {

	const validAuthToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblR5cGUiOiJhdXRoIiwiaWF0IjoxNTgyNzQ2OTAzfQ.fRw6FhsODhnBaEkJRz8k4r6SqLfaMKSB3lQhFEtEhZY";
	const validResetToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblR5cGUiOiJyZXNldF9wYXNzd29yZCIsImlhdCI6MTU4Mjc0NjkwM30.uWtKMQ1nlTdv-CaIB-Az2hLcBOfjwqs2BJNJZp4geBI";

	expect(await TokenGenerator.validateAuthToken(null)).toBeFalsy();
	expect(await TokenGenerator.validateAuthToken("")).toBeFalsy();
	expect(await TokenGenerator.validateAuthToken("THIS_IS_A_FAKE_TOKEN")).toBeFalsy();
	expect(await TokenGenerator.validateAuthToken(validAuthToken)).toBeTruthy();

	expect(await TokenGenerator.validateResetToken(null)).toBeFalsy();
	expect(await TokenGenerator.validateResetToken("")).toBeFalsy();
	expect(await TokenGenerator.validateResetToken("THIS_IS_A_FAKE_RESET_TOKEN")).toBeFalsy();
	expect(await TokenGenerator.validateResetToken(validResetToken)).toBeTruthy();

});