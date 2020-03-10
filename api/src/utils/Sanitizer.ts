const Sanitizer = (input: string, extraChars?: string[], ignoreChars?: string[], removeSpaces?: boolean): string => {

	let standardSanitize: string[] = [
		"<script>", "</script>", "&lt", "&gt", "&amp", "[", "]", "<", ">", "/", "\\", "{", "}",
	];

	if (extraChars) standardSanitize = standardSanitize.concat(extraChars);

	standardSanitize = [...new Set(standardSanitize)];

	if (ignoreChars) {
		for (let i = 0; i < ignoreChars.length; i++) {
			let key = standardSanitize.indexOf(ignoreChars[i]);
			if (key !== -1) standardSanitize.splice(key, 1);
		}
	}

	if (removeSpaces) {
		standardSanitize.push(" ");
	}

	standardSanitize = [...new Set(standardSanitize)];

	try {
		for (let i = 0; i < standardSanitize.length; i++) {
			input = input.replace(new RegExp('\\' + standardSanitize[i], "gm"), "");
		}
		return input;
	} catch (e) {
		console.log(e);
		return "";
	}

};

export default Sanitizer;