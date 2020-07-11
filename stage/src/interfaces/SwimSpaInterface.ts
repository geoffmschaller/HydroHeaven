import AcrylicDataInterface from "./AcrylicDataInterface";

interface SwimSpaInterface {
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
	stocked: "SLO" | "AG" | "BOTH" | false,
	acrylic: AcrylicDataInterface[]
}

export default SwimSpaInterface;
