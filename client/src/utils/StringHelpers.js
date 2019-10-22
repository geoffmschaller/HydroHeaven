export const generateProductId = (brand, name) => {
	let item = brand.replace(/ /g, "-").trim() + '-' + name.replace(/ /g, "-").trim();
	return item.toLowerCase();
};

export const getNameFromId = (id) => {
	let item = id.split("-").slice(2);
	return item.join(" ").toUpperCase();
};

export const getBrandFromId = (id) => {
	let item = id.split("-");
	return item[0].toUpperCase() + " " + item[1].toUpperCase();
};

export const transformToPhoneNumber = (input) => {
	let input_arr = input.toString().split("");
	return `(${input_arr[0]}${input_arr[1]}${input_arr[2]}) ${input_arr[3]}${input_arr[4]}${input_arr[5]} - ${input_arr[6]}${input_arr[7]}${input_arr[8]}${input_arr[9]}`;
};