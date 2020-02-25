const Sanitizer = require('../utils/sanitizer');

it("User Input Sanitizer", () => {

	expect(Sanitizer.sanitizeInput("<script>alert(1)</script>")).toBe("script alert 1   script");
	expect(Sanitizer.sanitizeInput("<a|a<script>alert(1)</script>")).toBe("a a script alert 1   script");
	expect(Sanitizer.sanitizeInput("<a||a<script>alert(1)</script>")).toBe("a  a script alert 1   script");
	expect(Sanitizer.sanitizeInput("<a&a<script>alert(1)</script>")).toBe("a a script alert 1   script");
	expect(Sanitizer.sanitizeInput("<a&&a<script>alert(1)</script>")).toBe("a  a script alert 1   script");
	expect(Sanitizer.sanitizeInput("<img src='' onerror='alert(1)' alt=''/>")).toBe("img src=&#x27;&#x27; onerror=&#x27;alert 1 &#x27; alt=&#x27;&#x27;");
	expect(Sanitizer.sanitizeInput("//////")).toBe("");
	expect(Sanitizer.sanitizeInput("/\/\/\/")).toBe("");
	expect(Sanitizer.sanitizeInput("\\\\")).toBe("");

});