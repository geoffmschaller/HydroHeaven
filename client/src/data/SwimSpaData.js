import {AMERICAN_WHIRLPOOL} from "./BrandsData";
// IMAGES
import IMAGE_MX6 from '../static/images/swimSpas/mx6.png';
import IMAGE_MB4 from '../static/images/swimSpas/mb4.png';
import IMAGE_ML4 from '../static/images/swimSpas/ml4.png';
import IMAGE_DM8 from '../static/images/swimSpas/dm8.png';
import IMAGE_RB4 from '../static/images/swimSpas/rb4.png';
import IMAGE_RL4 from '../static/images/swimSpas/rl4.png';
import IMAGE_RS2 from '../static/images/swimSpas/rs2.png';
// PDFS
import PDF_MX6 from '../static/pdfs/swim-spas/mx6.pdf';
import PDF_MB4_RB4 from '../static/pdfs/swim-spas/rb4-mb4.pdf';
import PDF_ML4_RL4 from '../static/pdfs/swim-spas/rl4-ml4.pdf';
import PDF_RS2 from '../static/pdfs/swim-spas/rs2.pdf';
import PDF_DM8 from '../static/pdfs/swim-spas/dm8.pdf';


export const SwimSpaData = [
	{
		id: "MX6",
		name: "MX6",
		brand: AMERICAN_WHIRLPOOL,
		description: "The American Whirlpool PowerPool MX6—combine exercise with relaxation in this swim/spa hybrid. The MX6 provides swim, exercise and health benefits without the extra electrical hook up for the hot water side.",
		seats: 3,
		jets: 32,
		gallons: 2118,
		length: 190,
		width: 90,
		height: 61,
		image: IMAGE_MX6,
		pdf: PDF_MX6
	},
	{
		id: "MB4",
		name: "MB4",
		brand: AMERICAN_WHIRLPOOL,
		description: "The American Whirlpool PowerPool MB4 models are the perfect choice for families that like to relax and play. The two benches give these models large seating areas that can accommodate up to eight people. M models feature the MAAX Force Jet Propulsion System which offers variable swim speeds & hydrotherapy, and come with Modern Mocha, Resort Gray and Pecan Ridge cabinet options.",
		seats: 9,
		jets: 27,
		gallons: 1325,
		length: 168,
		width: 90,
		height: 50,
		image: IMAGE_MB4,
		pdf: PDF_MB4_RB4
	},
	{
		id: "ML4",
		name: "ML4",
		brand: AMERICAN_WHIRLPOOL,
		description: "The American Whirlpool ML4 PowerPool is perfect for those who want variable swim speeds and hydrotherapy. The M models come with 26 jets—19 hydrotherapy, 6 Aurora Cascade and 1 Ozone jet—with the MAAX Force Jet Propulsion system. The PowerPool ML4 model also features the Modern Mocha, Resort Gray or Pecan Ridge cabinet options.",
		seats: 3,
		jets: 27,
		gallons: 1400,
		length: 168,
		width: 90,
		height: 50,
		image: IMAGE_ML4,
		pdf: PDF_ML4_RL4
	},
	{
		id: "RL4",
		name: "RL4",
		brand: AMERICAN_WHIRLPOOL,
		description: "The American Whirlpool PowerPool RL4 features a lounge and has a low impact warm water exercise option. The R models come with 30 jets: 19 hydrotherapy, 4 swim jets, 6 Auroroa Cascade and 1 Ozone. Cabinet options include DuraMAAX™ Mocha, Gray and Pecan.",
		seats: 3,
		jets: 31,
		gallons: 1550,
		length: 168,
		width: 90,
		height: 50,
		image: IMAGE_RL4,
		pdf: PDF_ML4_RL4
	},
	{
		id: "RB4",
		name: "RB4",
		brand: AMERICAN_WHIRLPOOL,
		description: "The American Whirlpool RB4 PowerPool features a bench on each side—perfect choice for families that like to relax and play. The two benches give these models large seating areas that can accommodate up to eight people. R models have low impact water exercise options and come with 30 jets: 19 hydrotherapy, 4 swim, 6 Aurora Cascade and 1 Ozone jet. Cabinet options include DuraMAAX™ Mocha, Gray and Pecan.",
		seats: 3,
		jets: 29,
		gallons: 1325,
		length: 168,
		width: 90,
		height: 50,
		image: IMAGE_RB4,
		pdf: PDF_MB4_RB4
	},
	{
		id: "DM8",
		name: "DM8",
		brand: AMERICAN_WHIRLPOOL,
		description: "Enjoy the best of both worlds with the American Whirlpool PowerPool DM8—a combination swim spa and hot tub. Its two separate operating systems allow you to keep the swim zone at your desired exercise temperature while maintaining your hot tub at a higher temperature for hydrotherapy and stress relief.",
		seats: 8,
		jets: 37,
		gallons: 1650,
		length: 218,
		width: 90,
		height: 34,
		image: IMAGE_DM8,
		pdf: PDF_DM8
	},
	{
		id: "RS2",
		name: "RS2",
		brand: AMERICAN_WHIRLPOOL,
		description: "With a total of 81 jets—including 6 Turbo jets, and 6 Turbo Swim jets, balance bar rails and optional PowerResistance exercise kit, a complete full body aquatic workout is always challenging.",
		seats: 7,
		jets: 79,
		gallons: 1010,
		length: 144,
		width: 90,
		height: 50,
		image: IMAGE_RS2,
		pdf: PDF_RS2
	}
];