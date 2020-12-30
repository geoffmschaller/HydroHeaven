import Acrylic from "./Acrylic";

interface HotTub {
	id: string,
	name: string,
	brand: string,
	price: number,
	reviews: Array<any>,
	description: string,
	seats: number,
	jets: number,
	gallons: number,
	length: number,
	width: number,
	height: number,
	image: string,
	pdf: string,
	stocked: string | boolean,
	acrylic: Array<Acrylic>
}

export default HotTub;