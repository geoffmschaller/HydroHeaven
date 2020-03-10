import Sanitizer from "../utils/Sanitizer";

describe("Sanitizer Suite", () => {

	test("Bracket Test", () => {
		expect(Sanitizer(">")).toBe("");
		expect(Sanitizer("<")).toBe("");
		expect(Sanitizer("<>")).toBe("");
	});

	test("Slash Test", () => {
		expect(Sanitizer("/")).toBe("");
		expect(Sanitizer("\\")).toBe("");
		expect(Sanitizer("//\/\/\/\/")).toBe("");
		expect(Sanitizer("/////////")).toBe("");
		expect(Sanitizer("\\\\\\\\")).toBe("");
	});

	test("Unwanted Characters Test", () => {
		expect(Sanitizer("{")).toBe("");
		expect(Sanitizer("}")).toBe("");
		expect(Sanitizer("[")).toBe("");
		expect(Sanitizer("]")).toBe("");
	});

	test("Encoded Test", () => {
		expect(Sanitizer("&amp;")).toBe(";");
		expect(Sanitizer("&amp")).toBe("");
		expect(Sanitizer("&gt;")).toBe(";");
		expect(Sanitizer("&gt")).toBe("");
		expect(Sanitizer("&lt;")).toBe(";");
		expect(Sanitizer("&lt")).toBe("");
	});

	test("Tag Test", () => {
		expect(Sanitizer("<script>")).toBe("");
		expect(Sanitizer("</script>")).toBe("");
		expect(Sanitizer("</img>")).toBe("img");
		expect(Sanitizer("<img>")).toBe("img");
	});

	test("Extra Chars Test", () => {
		expect(Sanitizer("test@test.com", ["@"])).toBe("testtest.com");
		expect(Sanitizer("123.456.7890", ["."])).toBe("1234567890");
	});

	test("Ignored Chars Test", () => {
		expect(Sanitizer("test@test.com", undefined, ["@"])).toBe("test@test.com");
		expect(Sanitizer("123.456.7890", undefined, ["."])).toBe("123.456.7890");
	});

	test("Ignored Chars Test", () => {
		expect(Sanitizer("a", ["a"])).toBe("");
	});

});