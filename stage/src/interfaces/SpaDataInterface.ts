import SpaReview from "./SpaReview";

interface SpaDataInterface {
	id: string,
	name: string,
	brand: string,
	price: number,
	reviews: Array<SpaReview>,
	description: string,
	seats: number,
	jets: number,
	gallons: number,
	length: number,
	width: number,
	height: number,
	image: string,
	pdf: string,
	stocked: boolean
}

export default SpaDataInterface;