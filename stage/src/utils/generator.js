const generator = (length) => {
	const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	let result = '';
	for (let i = 0; i < length; i++){
		result += chars[Math.floor(Math.random() * chars.length)];
	}
	return result;
}

export default generator;