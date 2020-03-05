class Sanitizer {


	static sanitize = (input: string): string => {
		return input.replace(/<script>|<\/script>|&lt;|&lt|&gt;|&gt|&amp;|&amp|[<>\/\\"'\-#`!%$()=+{}\[\]]/gi, "");
	}


}

export default Sanitizer;