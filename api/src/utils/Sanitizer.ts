const Sanitizer = (input: string, extraChars?: string[], removeSpaces?: boolean): string => {

	try {
		let standardSanitize: string = input.replace(/<script>|<\/script>|&lt;|&lt|&gt;|&gt|&amp;|&amp|[<>\/\\"'\-#`!%;$()=+{}\[\]]/gi, "");
		if (extraChars) {
			for (let i = 0; i < extraChars.length; i++) {
				standardSanitize = standardSanitize.replace(new RegExp(extraChars[i], "gm"), "");
			}
		}
		if (removeSpaces) {
			standardSanitize = standardSanitize.replace(/ /g, "");
		}
		return standardSanitize;
	} catch (e) {
		return "";
	}


};

export default Sanitizer;