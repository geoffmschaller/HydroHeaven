const Sanitizer = require('../utils/sanitizer');

describe("Sanitizer Class", () => {

	test("Basic Tag", () => {
		expect(Sanitizer.sanitizeText("<script>alert(1)</script>")).toBe("scriptalert1script");
	});

	test("Tag w/ bit", () => {
		expect(Sanitizer.sanitizeText(`<a|a<script>alert(1)</script>`)).toBe("aascriptalert1script");
	});

	test("Tag with Or", () => {
		expect(Sanitizer.sanitizeText("<a||a<script>alert(1)</script>")).toBe("aascriptalert1script");
	});

	test("Tag with &", () => {
		expect(Sanitizer.sanitizeText("<a&a<script>alert(1)</script>")).toBe("aascriptalert1script");
	});

	test("Tag with And", () => {
		expect(Sanitizer.sanitizeText("<a&&a<script>alert(1)</script>")).toBe("aascriptalert1script");
	});

	test("Tag with onerror", () => {
		expect(Sanitizer.sanitizeText("<img src='' onerror='alert(1)' alt=''/>")).toBe("img src=&#x27;&#x27; onerror=&#x27;alert1&#x27; alt=&#x27;&#x27;");
	});

	test("Forward Slashes", () => {
		expect(Sanitizer.sanitizeText("//////")).toBe("");
	});

	test("Escaped Slashes", () => {
		expect(Sanitizer.sanitizeText("/\/\/\/")).toBe("");
	});

	test("Back Slashes", () => {
		expect(Sanitizer.sanitizeText("\\\\")).toBe("");
	});

});