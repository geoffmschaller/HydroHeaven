import Acrylic from "./Acrylic";

interface SwimSpa {
	id: string,
	name: string,
	brand: string,
	description: string,
	seats: number,
	jets: number,
	gallons: number,
	length: number,
	width: number,
	height: number,
	image: string,
	pdf: string,
	stocked: boolean,
	acrylic: Array<Acrylic>
}

export default SwimSpa;