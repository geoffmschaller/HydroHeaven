const Sanitizer = (input: string | undefined | null, extraChars?: string[] | null, ignoreChars?: string[] | null, removeSpaces?: boolean | null): string => {

	if(input === null || input === undefined) return "";

	let standardSanitize: string[] = [
		"<script>", "</script>", "<script/>", "&lt", "&gt", "&amp", "[", "]", "<", ">", "/", "\\", "{", "}",
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
		return "";
	}

};

export default Sanitizer;