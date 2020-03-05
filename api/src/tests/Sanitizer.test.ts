import Sanitizer from "../utils/sanitizer";

describe("Sanitizer Suite", () => {

	test("Bracket Test", () => {
		expect(Sanitizer.sanitize(">")).toBe("");
		expect(Sanitizer.sanitize("<")).toBe("");
		expect(Sanitizer.sanitize("<>")).toBe("");
	});

	test("Slash Test", () => {
		expect(Sanitizer.sanitize("/")).toBe("");
		expect(Sanitizer.sanitize("\\")).toBe("");
		expect(Sanitizer.sanitize("//\/\/\/\/")).toBe("");
		expect(Sanitizer.sanitize("/////////")).toBe("");
		expect(Sanitizer.sanitize("\\\\\\\\")).toBe("");
	});

	test("Quote Test", () => {
		expect(Sanitizer.sanitize("\"")).toBe("");
		expect(Sanitizer.sanitize("\'")).toBe("");
		expect(Sanitizer.sanitize("\`")).toBe("");
	});

	test("Comment Test", () => {
		expect(Sanitizer.sanitize("-")).toBe("");
		expect(Sanitizer.sanitize("--")).toBe("");
		expect(Sanitizer.sanitize("#")).toBe("");
		expect(Sanitizer.sanitize("--#")).toBe("");
	});

	test("Unwanted Characters Test", () => {
		expect(Sanitizer.sanitize("$")).toBe("");
		expect(Sanitizer.sanitize("!")).toBe("");
		expect(Sanitizer.sanitize("%")).toBe("");
		expect(Sanitizer.sanitize("(")).toBe("");
		expect(Sanitizer.sanitize(")")).toBe("");
		expect(Sanitizer.sanitize("=")).toBe("");
		expect(Sanitizer.sanitize("+")).toBe("");
		expect(Sanitizer.sanitize("{")).toBe("");
		expect(Sanitizer.sanitize("}")).toBe("");
		expect(Sanitizer.sanitize("[")).toBe("");
		expect(Sanitizer.sanitize("]")).toBe("");
	});

	test("Encoded Test", () => {
		expect(Sanitizer.sanitize("&amp;")).toBe("");
		expect(Sanitizer.sanitize("&amp")).toBe("");
		expect(Sanitizer.sanitize("&gt;")).toBe("");
		expect(Sanitizer.sanitize("&gt")).toBe("");
		expect(Sanitizer.sanitize("&lt;")).toBe("");
		expect(Sanitizer.sanitize("&lt")).toBe("");
	});

	test("Tag Test", () => {
		expect(Sanitizer.sanitize("<script>")).toBe("");
		expect(Sanitizer.sanitize("</script>")).toBe("");
		expect(Sanitizer.sanitize("</img>")).toBe("img");
		expect(Sanitizer.sanitize("<img>")).toBe("img");
	});

});