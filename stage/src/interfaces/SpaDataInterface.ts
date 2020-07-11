import SpaReview from "./SpaReview";
import AcrylicDataInterface from "./AcrylicDataInterface";

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
	stocked: "SLO" | "AG" | "BOTH" | false,
	acrylic: AcrylicDataInterface[]
}

export default SpaDataInterface;
