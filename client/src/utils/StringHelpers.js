export const generateProductId = (brand, name) => {
	let item = brand.replace(" ", "-").trim() + '-' + name.replace(" ", "-").trim();
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