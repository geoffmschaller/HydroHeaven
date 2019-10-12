import {generateProductId, getBrandFromId, getNameFromId} from "./StringHelpers";

it("String Helpers Util", () => {

	// GENERATE PRODUCT ID
	expect(generateProductId("American Whirlpool", "some name")).toBe("american-whirlpool-some-name");
	expect(generateProductId("Vita Spas", "some other name")).toBe("vita-spas-some-other-name");

	// GET NAME FROM ID
	expect(getNameFromId("vita-spas-some-other-name")).toBe("SOME OTHER NAME");
	expect(getNameFromId("vita-spas-name")).toBe("NAME");

	// GET BRAND FROM ID
	expect(getBrandFromId("vita-spas-some-other-name")).toBe("VITA SPAS");
	expect(getBrandFromId("american-whirlpool-some-name")).toBe("AMERICAN WHIRLPOOL");
});