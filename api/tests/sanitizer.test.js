const Sanitizer = require('../utils/sanitizer');

it("User Input Sanitizer", () => {

	expect(Sanitizer.sanitizeText("<script>alert(1)</script>")).toBe("scriptalert1script");
	expect(Sanitizer.sanitizeText("<a|a<script>alert(1)</script>")).toBe("aascriptalert1script");
	expect(Sanitizer.sanitizeText("<a||a<script>alert(1)</script>")).toBe("aascriptalert1script");
	expect(Sanitizer.sanitizeText("<a&a<script>alert(1)</script>")).toBe("aascriptalert1script");
	expect(Sanitizer.sanitizeText("<a&&a<script>alert(1)</script>")).toBe("aascriptalert1script");
	expect(Sanitizer.sanitizeText("<img src='' onerror='alert(1)' alt=''/>")).toBe("img src=&#x27;&#x27; onerror=&#x27;alert1&#x27; alt=&#x27;&#x27;");
	expect(Sanitizer.sanitizeText("//////")).toBe("");
	expect(Sanitizer.sanitizeText("/\/\/\/")).toBe("");
	expect(Sanitizer.sanitizeText("\\\\")).toBe("");

});