import {AMERICAN_WHIRLPOOL, VITA_SPAS} from "./BrandsData";
import { AcrylicData } from './AcrylicData';

import Sim1 from '../static/images/spas/100.png';
import Sim2 from '../static/images/spas/151.png';
import Sim3 from '../static/images/spas/160.png';
import Sim4 from '../static/images/spas/171.png';
import Sim5 from '../static/images/spas/250.png';
import Sim6 from '../static/images/spas/261.png';
import Sim7 from '../static/images/spas/270.png';
import Sim8 from '../static/images/spas/271.png';
import Sim9 from '../static/images/spas/280.png';
import Sim10 from '../static/images/spas/281.png';
import Sim11 from '../static/images/spas/282.png';
import Sim12 from '../static/images/spas/451.png';
import Sim13 from '../static/images/spas/460.png';
import Sim14 from '../static/images/spas/461.png';
import Sim15 from '../static/images/spas/470.png';
import Sim16 from '../static/images/spas/471.png';
import Sim17 from '../static/images/spas/472.png';
import Sim18 from '../static/images/spas/480.png';
import Sim19 from '../static/images/spas/481.png';
import Sim20 from '../static/images/spas/881.png';
import Sim21 from '../static/images/spas/890.png';
import Sim22 from '../static/images/spas/982.png';
import Sim23 from '../static/images/spas/amour.png';
import Sim24 from '../static/images/spas/cabaret.png';
import Sim25 from '../static/images/spas/duet.png';
import Sim26 from '../static/images/spas/elegant.png';
import Sim27 from '../static/images/spas/envie.png';
import Sim28 from '../static/images/spas/grand.png';
import Sim29 from '../static/images/spas/image.png';
import Sim30 from '../static/images/spas/intrigue.png';
import Sim31 from '../static/images/spas/joli.png';
import Sim32 from '../static/images/spas/lune.png';
import Sim33 from '../static/images/spas/luxe.png';
import Sim34 from '../static/images/spas/monarque.png';
import Sim35 from '../static/images/spas/mystique.png';
import Sim36 from '../static/images/spas/prestige.png';
import Sim37 from '../static/images/spas/rendezvous.png';
import Sim38 from '../static/images/spas/riviera.png';
import Sim39 from '../static/images/spas/salon.png';
import Sim40 from '../static/images/spas/sensation.png';
import Sim41 from '../static/images/spas/trio.png';
import Sim42 from '../static/images/spas/vivre.png';
import Sim43 from '../static/images/spas/voeux.png';

import Spdf1 from '../static/pdfs/spas/100-151.pdf';
import Spdf2 from '../static/pdfs/spas/100-151.pdf';
import Spdf3 from '../static/pdfs/spas/160-171.pdf';
import Spdf4 from '../static/pdfs/spas/160-171.pdf';
import Spdf5 from '../static/pdfs/spas/250-261.pdf';
import Spdf6 from '../static/pdfs/spas/250-261.pdf';
import Spdf7 from '../static/pdfs/spas/270-271.pdf';
import Spdf8 from '../static/pdfs/spas/270-271.pdf';
import Spdf9 from '../static/pdfs/spas/280.pdf';
import Spdf10 from '../static/pdfs/spas/281-282.pdf';
import Spdf11 from '../static/pdfs/spas/281-282.pdf';
import Spdf12 from '../static/pdfs/spas/451.pdf';
import Spdf13 from '../static/pdfs/spas/460.pdf';
import Spdf14 from '../static/pdfs/spas/461.pdf';
import Spdf15 from '../static/pdfs/spas/470.pdf';
import Spdf16 from '../static/pdfs/spas/471.pdf';
import Spdf17 from '../static/pdfs/spas/472.pdf';
import Spdf18 from '../static/pdfs/spas/480.pdf';
import Spdf19 from '../static/pdfs/spas/481.pdf';
import Spdf20 from '../static/pdfs/spas/881.pdf';
import Spdf21 from '../static/pdfs/spas/890.pdf';
import Spdf22 from '../static/pdfs/spas/982.pdf';
import Spdf23 from '../static/pdfs/spas/amour.pdf';
import Spdf24 from '../static/pdfs/spas/cabaret.pdf';
import Spdf25 from '../static/pdfs/spas/duet.pdf';
import Spdf26 from '../static/pdfs/spas/elegant.pdf';
import Spdf27 from '../static/pdfs/spas/envie.pdf';
import Spdf28 from '../static/pdfs/spas/grand.pdf';
import Spdf29 from '../static/pdfs/spas/image.pdf';
import Spdf30 from '../static/pdfs/spas/intrigue.pdf';
import Spdf31 from '../static/pdfs/spas/joli.pdf';
import Spdf32 from '../static/pdfs/spas/lune.pdf';
import Spdf33 from '../static/pdfs/spas/luxe.pdf';
import Spdf34 from '../static/pdfs/spas/monarque.pdf';
import Spdf35 from '../static/pdfs/spas/mystique.pdf';
import Spdf36 from '../static/pdfs/spas/prestige.pdf';
import Spdf37 from '../static/pdfs/spas/rendezvous.pdf';
import Spdf38 from '../static/pdfs/spas/riviera.pdf';
import Spdf39 from '../static/pdfs/spas/salon.pdf';
import Spdf40 from '../static/pdfs/spas/sensation.pdf';
import Spdf41 from '../static/pdfs/spas/trio.pdf';
import Spdf42 from '../static/pdfs/spas/vivre.pdf';
import Spdf43 from '../static/pdfs/spas/voeux.pdf';

export const SpaData = [
	{
		id: "100",
		name: "#100",
		brand: AMERICAN_WHIRLPOOL,
		price: 4895,
		reviews: [],
		description: "The American Whirlpool 100 Hot Tub is a high performing and low operating cost tub. Wood frame sub structure, ABS bottom, Copper" +
			" reflectant to keep that heat in, Northern Exposure with BlueMAAX insulation and an added layer of 3M Thinsulate—just to name a few of the amazing features.",
		seats: 4,
		jets: 18,
		gallons: 200,
		length: 76,
		width: 76,
		height: 34,
		image: Sim1,
		pdf: Spdf1,
		stocked: "SLO",
		acrylic: AcrylicData
	},
	{
		id: "151",
		name: "#151",
		brand: AMERICAN_WHIRLPOOL,
		price: 4895,
		reviews: [],
		description: "Having a small space doesn’t mean you can’t have an American Whirlpool Hot Tub. Packed full of amazing features, the American Whirlpool 151 Hot Tub boasts: a steel frame sub structure, ABS bottom, Copper reflectant to keep that heat in, Northern Exposure with BlueMAAX insulation—and even a waterfall feature!",
		seats: 3,
		jets: 20,
		gallons: 193,
		length: 83,
		width: 63,
		height: 30,
		image: Sim2,
		pdf: Spdf2,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "160",
		name: "#160",
		brand: AMERICAN_WHIRLPOOL,
		price: 4895,
		reviews: [],
		description: "The perfect finishing touch for a medium sized yard, the American Whirlpool 160 Hot Tub is a high performing and low operating cost tub, which can accommodate 4 people. Steel frame sub structure, ABS bottom, Copper reflectant to keep that heat in, Northern Exposure with BlueMAAX insulation—just to name a few of the amazing features.",
		seats: 4,
		jets: 16,
		gallons: 229,
		length: 71,
		width: 71,
		height: 35,
		image: Sim3,
		pdf: Spdf3,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "171",
		name: "#171",
		brand: AMERICAN_WHIRLPOOL,
		price: 5995,
		reviews: [],
		description: "Have a few more people to entertain? No problem. The American Whirlpool 171 Hot Tub is a high performing and low operating cost tub" +
			" which can seat 5 to 6 people. Steel frame sub structure, ABS bottom, Copper reflectant to keep that heat in, Northern Exposure with BlueMAAX insulation—even a lounge and waterfall!—just to name a few of the amazing features.",
		seats: 6,
		jets: 40,
		gallons: 336,
		length: 83,
		width: 83,
		height: 35,
		image: Sim4,
		pdf: Spdf4,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "250",
		name: "#250",
		brand: AMERICAN_WHIRLPOOL,
		price: 5695,
		reviews: [],
		description: "With high performance and low operating costs, the American Whirlpool 250 Hot Tub is perfect for 4 people and comes with some amazing standard features: a hybrid sub structure, Moulded bottom pan, Copper reflectant to keep that heat in, Northern Exposure with BlueMAAX insulation—even a molded grab bar!",
		seats: 4,
		jets: 23,
		gallons: 242,
		length: 83,
		width: 63,
		height: 33,
		image: Sim5,
		pdf: Spdf5,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "261",
		name: "#261",
		brand: AMERICAN_WHIRLPOOL,
		price: 5695,
		reviews: [],
		description: "The American Whirlpool 261 Hot Tub is the perfect spa for those who have an awkward or small space. Its unique shape will accommodate 2-3 people. But don’t let the size fool you—this hot tub is packed full of standard features. A hybrid sub structure, Moulded bottom pan, Copper lined to keep that heat in, BlueMAAX insulation—even a molded grab bar!",
		seats: 3,
		jets: 24,
		gallons: 198,
		length: 72,
		width: 72,
		height: 33,
		image: Sim6,
		pdf: Spdf6,
		stocked: "SLO",
		acrylic: AcrylicData
	},
	{
		id: "270",
		name: "#270",
		brand: AMERICAN_WHIRLPOOL,
		price: 6995,
		reviews: [],
		description: "The American Whirlpool 270 Hot Tub can accommodate 6 to 7 people and comes standard with tons of amazing features. A hybrid sub structure, Moulded bottom pan, Copper lined to keep that heat in, BlueMAAX insulation, a molded grab bar—and not only one, but TWO Aurora Cascade Water features!",
		seats: 7,
		jets: 46,
		gallons: 364,
		length: 83,
		width: 83,
		height: 36,
		image: Sim7,
		pdf: Spdf7,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "271",
		name: "#271",
		brand: AMERICAN_WHIRLPOOL,
		price: 6995,
		reviews: [],
		description: "Here, we have the American Whirlpool 271 Hot Tub. This hot tub comes with so many standard features—even a lounge seat!—that you’ll melt every time you and 5 of your friends or family gather to unwind. Immerse yourself in the warm waters of the 271’s 44 stainless steel jets, molded grab bar, and 2 Aurora Cascade Water Features.",
		seats: 6,
		jets: 44,
		gallons: 375,
		length: 83,
		width: 83,
		height: 36,
		image: Sim8,
		pdf: Spdf8,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "280",
		name: "#280",
		brand: AMERICAN_WHIRLPOOL,
		price: 7495,
		reviews: [],
		description: "Have some entertaining to do? The American Whirlpool 280 Hot Tub can accommodate 7 to 8 people and comes standard with some amazing features: a hybrid sub structure, Moulded bottom pan, Copper lined to keep that heat in, BlueMAAX insulation, a molded grab bar—and not only one, but TWO Aurora Cascade Water features!",
		seats: 8,
		jets: 46,
		gallons: 433,
		length: 92,
		width: 92,
		height: 36,
		image: Sim9,
		pdf: Spdf9,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "281",
		name: "#281",
		brand: AMERICAN_WHIRLPOOL,
		price: 7495,
		reviews: [],
		description: "The American Whirlpool 281 Hot Tub is the perfect spa for 6 people and comes with some amazing standard features: a hybrid sub structure, Moulded bottom pan, Copper lined to keep that heat in, BlueMAAX insulation, a molded grab bar—and not only one, but TWO Aurora Cascade Water features—and let’s not forget the lounge seat for the ultimate in spa relaxation!",
		seats: 6,
		jets: 44,
		gallons: 440,
		length: 92,
		width: 92,
		height: 36,
		image: Sim10,
		pdf: Spdf10,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "282",
		name: "#282",
		brand: AMERICAN_WHIRLPOOL,
		price: 7695,
		reviews: [],
		description: "Need an extra lounge? The American Whirlpool 282 Hot Tub comes equipped with two! Bring a friend and both of you can enjoy the therapeutic benefits of this hot tub. Featuring a hybrid sub structure, Moulded bottom pan, Copper lined to keep that heat in, BlueMAAX insulation, a molded grab bar—and not only one, but TWO Aurora Cascade Water features!",
		seats: 5,
		jets: 44,
		gallons: 408,
		length: 92,
		width: 92,
		height: 36,
		image: Sim11,
		pdf: Spdf11,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "451",
		name: "#451",
		brand: AMERICAN_WHIRLPOOL,
		price: 6695,
		reviews: [],
		description: "The American Whirlpool 451 Hot Tub offers seating for three that includes a performance lounge and twenty nine adjustable jets.",
		seats: 3,
		jets: 29,
		gallons: 186,
		length: 81,
		width: 64,
		height: 31,
		image: Sim12,
		pdf: Spdf12,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "460",
		name: "#460",
		brand: AMERICAN_WHIRLPOOL,
		price: 7495,
		reviews: [],
		description: "The American Whirlpool 460 Hot Tub is the perfect outdoor patio spa. The 460 features the rejuvenation of full body immersion and a variety of seating.",
		seats: 4,
		jets: 32,
		gallons: 259,
		length: 78,
		width: 78,
		height: 35,
		image: Sim13,
		pdf: Spdf13,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "461",
		name: "#461",
		brand: AMERICAN_WHIRLPOOL,
		price: 7495,
		reviews: [],
		description: "The American Whirlpool 461 Hot Tub is the perfect outdoor patio spa. The 461 features the rejuvenation of full body immersion and a variety of seating. The 461’s layout includes barrier free seating, deeper Zone Therapy seating and a lounge to accommodate any size.",
		seats: 4,
		jets: 28,
		gallons: 255,
		length: 78,
		width: 78,
		height: 35,
		image: Sim14,
		pdf: Spdf14,
		stocked: "SLO",
		acrylic: AcrylicData
	},
	{
		id: "470",
		name: "#470",
		brand: AMERICAN_WHIRLPOOL,
		price: 8495,
		reviews: [],
		description: "The American Whirlpool 470 Hot Tub has a unique interior design that allows comfortable seating for six while permitting full body" +
			" immersion in the performance seat. The Whirlpool 470 is the ideal hot tub model for those who enjoy outdoor entertaining or quiet conversation among friends.\n",
		seats: 6,
		jets: 48,
		gallons: 296,
		length: 88,
		width: 88,
		height: 35,
		image: Sim15,
		pdf: Spdf15,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "471",
		name: "#471",
		brand: AMERICAN_WHIRLPOOL,
		price: 8495,
		reviews: [],
		description: "The American Whirlpool 471 Hot Tub is a very popular hot tub and offers a single performance lounge with a Foot Relief Zone and" +
			" seating for up to six spa enthusiasts. There are two bucket seats with our specially designed Comfort Collar and Zone Therapy feature.",
		seats: 6,
		jets: 49,
		gallons: 347,
		length: 88,
		width: 88,
		height: 35,
		image: Sim16,
		pdf: Spdf16,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "472",
		name: "#472",
		brand: AMERICAN_WHIRLPOOL,
		price: 8495,
		reviews: [],
		description: "The American Whirlpool 472 Hot Tub is the ideal spa for those couples looking to relax together. This model offers a performance lounge, one bucket seat with Zone Therapy and seating for five comfortably.",
		seats: 5,
		jets: 47,
		gallons: 349,
		length: 88,
		width: 88,
		height: 35,
		image: Sim17,
		pdf: Spdf17,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "480",
		name: "#480",
		brand: AMERICAN_WHIRLPOOL,
		price: 8695,
		reviews: [],
		description: "The American Whirlpool 480 Hot Tub is one of the largest spas in the Series. It offers six barrier-free seats, two Comfort Collars," +
			" and a variety of jet patterns. The American Whirlpool 480 is the perfect spa for entertaining guests in your backyard retreat.\n",
		seats: 6,
		jets: 53,
		gallons: 351,
		length: 92,
		width: 92,
		height: 38,
		image: Sim18,
		pdf: Spdf18,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "481",
		name: "#481",
		brand: AMERICAN_WHIRLPOOL,
		price: 8695,
		reviews: [],
		description: "The American Whirlpool 481 Hot Tub can seat six comfortably with bucket seating and a performance lounge. The therapy package also" +
			" offers the Foot Relief Zone for the ultimate spa experience. The American Whirlpool 481’s extra space and oversized footwell ensure additional room to stretch.\n",
		seats: 6,
		jets: 52,
		gallons: 417,
		length: 92,
		width: 92,
		height: 38,
		image: Sim19,
		pdf: Spdf19,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "881",
		name: "#881",
		brand: AMERICAN_WHIRLPOOL,
		price: 11995,
		reviews: [],
		description: "The American Whirlpool 881 Hot Tub was designed to transform your backyard into the perfect spa retreat. With a little imagination you" +
			" can integrate the design of this hot tub into your modern backyard. As the American Whirlpool 881 becomes the centerpiece of your retreat, it also provides physician-designed hydrotherapy. Enjoy the beauty of this modern work of art as you slip into its therapeutic water.\n",
		seats: 6,
		jets: 75,
		gallons: 413,
		length: 92,
		width: 92,
		height: 38,
		image: Sim20,
		pdf: Spdf20,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "890",
		name: "#890",
		brand: AMERICAN_WHIRLPOOL,
		price: 13995,
		reviews: [],
		description: "The American Whirlpool 890 Hot Tub was designed to transform your backyard into the perfect spa retreat. With a little imagination you" +
			" can integrate the design of this hot tub into your modern backyard. As the American Whirlpool 890 becomes the centerpiece of your retreat, it also provides physician-designed hydrotherapy. Enjoy the beauty of this modern work of art as you slip into its therapeutic water.\n",
		seats: 6,
		jets: 78,
		gallons: 470,
		length: 100,
		width: 92,
		height: 38,
		image: Sim21,
		pdf: Spdf21,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "982",
		name: "#982",
		brand: AMERICAN_WHIRLPOOL,
		price: 15999,
		reviews: [],
		description: "The American Whirlpool 982 Hot Tub was designed to transform your backyard into the perfect spa retreat. With a little imagination you" +
			" can integrate the design of this hot tub into your modern backyard. Not only can it be the centerpiece, it provides physician-designed hydrotherapy—which lets you enjoy the beauty of this modern work of art as you slip into its therapeutic water.\n",
		seats: 10,
		jets: 84,
		gallons: 714,
		length: 133,
		width: 91,
		height: 38,
		image: Sim22,
		pdf: Spdf22,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "amour",
		name: "Amour",
		brand: VITA_SPAS,
		price: 4595,
		reviews: [],
		description: "The Amour hot tub by Vita is great for anyone who wants the perfect blend of space-saving and high-performance features. It has 23 jets, a 4.8 horsepower pump and comfortably seats two adults.",
		seats: 2,
		jets: 23,
		gallons: 138,
		length: 78,
		width: 67,
		height: 30,
		image: Sim23,
		pdf: Spdf23,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "cabaret",
		name: "Cabaret",
		brand: VITA_SPAS,
		price: 10995,
		reviews: [],
		description: "Classic styling, spacious and unique, the Vita’s Cabaret has it all. With 56 therapy jets and 2 water features, it’s easy to see why the Cabaret is such a popular model.",
		seats: 7,
		jets: 60,
		gallons: 430,
		length: 92,
		width: 92,
		height: 38,
		image: Sim24,
		pdf: Spdf24,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "duet",
		name: "Duet",
		brand: VITA_SPAS,
		price: 3995,
		reviews: [],
		description: "The Duet by Vita Spa is great for anyone who wants the perfect blend of space-saving and high-performance features. It has 15 jets, a 2 horsepower / 115volt pump and comfortably seats two adults in the deep bucket seats.",
		seats: 2,
		jets: 15,
		gallons: 139,
		length: 84,
		width: 48,
		height: 30,
		image: Sim25,
		pdf: Spdf25,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "elegant",
		name: "Elegant",
		brand: VITA_SPAS,
		price: 6699,
		reviews: [],
		description: "With its classic layout, the ever popular Elegant from Vita Spa is a real family favourite. Offering a comfortable reversible lounger and four very accommodating seats the Elegant delivers a powerful massage via its 39 well sized & positioned jets. All in all, it’s easy to see why the Elegant has been one of our best selling hot tubs.",
		seats: 5,
		jets: 39,
		gallons: 331,
		length: 83,
		width: 79,
		height: 37,
		image: Sim26,
		pdf: Spdf26,
		stocked: "SLO",
		acrylic: AcrylicData
	},
	{
		id: "envie",
		name: "Envie",
		brand: VITA_SPAS,
		price: 8495,
		reviews: [],
		description: "If you like extra leg room and prefer more personal space then Vita’s Envie spa is for you. Large, spacious, powerful and above all—comfortable— is the best way to describe the Envie Spa from Vita.",
		seats: 6,
		jets: 54,
		gallons: 385,
		length: 92,
		width: 92,
		height: 38,
		image: Sim27,
		pdf: Spdf27,
		stocked: "SLO",
		acrylic: AcrylicData
	},
	{
		id: "grand",
		name: "Grand",
		brand: VITA_SPAS,
		price: 8495,
		reviews: [],
		description: "The Grand hot tub is easily one of Vita’s biggest success stories—a fantastic combination of equipment, fit & feel, spaciousness, and design.",
		seats: 7,
		jets: 53,
		gallons: 399,
		length: 92,
		width: 92,
		height: 38,
		image: Sim28,
		pdf: Spdf28,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "image",
		name: "Image",
		brand: VITA_SPAS,
		price: 4595,
		reviews: [],
		description: "The Vita 100 Series Image hot tub is a compact 4 person family hot tub with 22 stainless steel jets, offering Vital Energy Insulation System and Freeze Protection.",
		seats: 4,
		jets: 22,
		gallons: 237,
		length: 82,
		width: 69,
		height: 32,
		image: Sim29,
		pdf: Spdf29,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "intrigue",
		name: "Intrigue",
		brand: VITA_SPAS,
		price: 6199,
		reviews: [],
		description: "The Intrigue by Vita is officially a 5 seater hot tub, which also has a reversible lounger with different jet configurations at each end allowing you to vary your massage by sitting either way.",
		seats: 5,
		jets: 33,
		gallons: 331,
		length: 83,
		width: 79,
		height: 37,
		image: Sim30,
		pdf: Spdf30,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "joli",
		name: "Joli",
		brand: VITA_SPAS,
		price: 7295,
		reviews: [],
		description: "Vita’s Joli hot tub is an excellent 4 person spa with all the specifications you would see in the best hot tubs in the market.",
		seats: 4,
		jets: 44,
		gallons: 239,
		length: 82,
		width: 70,
		height: 32,
		image: Sim31,
		pdf: Spdf31,
		stocked: "SLO",
		acrylic: AcrylicData
	},
	{
		id: "lune",
		name: "Lune",
		brand: VITA_SPAS,
		price: 4895,
		reviews: [],
		description: "The Lune hot tub by Vita Spas is a very sociable spa with equal seating all round. The circular shape is ideally suited to certain landscapes and offers a large water capacity for the area used.",
		seats: 4,
		jets: 18,
		gallons: 200,
		length: 76,
		width: 76,
		height: 35,
		image: Sim32,
		pdf: Spdf32,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "luxe",
		name: "Luxe",
		brand: VITA_SPAS,
		price: 6999,
		reviews: [],
		description: "The Luxe hot tub by Vita Spas is a large stylish 7 person family hot tub with 43 stainless steel jets powered by 2 5hp pumps, offering Dual Cartridge Filtration, High Efficient Recycled Insulation, latest technology M7 Heating, and many more standard features!",
		seats: 7,
		jets: 43,
		gallons: 463,
		length: 91,
		width: 91,
		height: 38,
		image: Sim33,
		pdf: Spdf33,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "monarque",
		name: "Monarque",
		brand: VITA_SPAS,
		price: 8195,
		reviews: [],
		description: "Vita’s Monarque is engineered to the highest standards and will make you feel as though you are in your own personal retreat get-away.",
		seats: 7,
		jets: 49,
		gallons: 315,
		length: 83,
		width: 83,
		height: 38,
		image: Sim34,
		pdf: Spdf34,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "mystique",
		name: "Mystique",
		brand: VITA_SPAS,
		price: 14495,
		reviews: [],
		description: "Every feature, every curve, every seat, every detail of the Mystique is designed with you in mind. The Mystique is a marvel of" +
			" function and technology. With seating for 6, this large fitness spa will relax as well as invigorate the users. Work out with the fitness bands and when you are done, slip into your favorite seat and let the soothing waters ease those tired muscles.",
		seats: 7,
		jets: 59,
		gallons: 517,
		length: 114,
		width: 90,
		height: 38,
		image: Sim35,
		pdf: Spdf35,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "prestige",
		name: "Prestige",
		brand: VITA_SPAS,
		price: 8195,
		reviews: [],
		description: "The Vita Prestige hot tub is one of the most popular 6-seater hot tubs in the Vita collection. With features such as its lounger spa, it’s made with comfort and value in mind.",
		seats: 6,
		jets: 52,
		gallons: 307,
		length: 83,
		width: 83,
		height: 38,
		image: Sim36,
		pdf: Spdf36,
		stocked: "SLO",
		acrylic: AcrylicData
	},
	{
		id: "rendezvous",
		name: "Rendezvous",
		brand: VITA_SPAS,
		price: 12495,
		reviews: [],
		description: "With seating for up to 7 people, the Rendezvous is powered by 3 high powered jet pumps. It features 73 jets with 2 Aurora Cascade" +
			" water features. This spa boasts premium features such as the Symphonic Wave Seat, and SenFlo therapy making this spa exceptional in every way.\n",
		seats: 7,
		jets: 78,
		gallons: 441,
		length: 92,
		width: 92,
		height: 38,
		image: Sim37,
		pdf: Spdf37,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "riviera",
		name: "Riviera",
		brand: VITA_SPAS,
		price: 12495,
		reviews: [],
		description: "With seating for up to 7 people, the NEW Riviera is powered by 3 high powered jet pumps. It features 61 jets with 4 Cascade Water features.",
		seats: 7,
		jets: 61,
		gallons: 419,
		length: 92,
		width: 92,
		height: 38,
		image: Sim38,
		pdf: Spdf38,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "salon",
		name: "Salon",
		brand: VITA_SPAS,
		price: 8995,
		reviews: [],
		description: "If you like extra leg room and prefer more personal space then Vita’s NEW Salon spa is for you. Large, spacious, powerful and above all—comfortable— is the best way to describe the Salon Spa from Vita.",
		seats: 7,
		jets: 53,
		gallons: 409,
		length: 92,
		width: 92,
		height: 38,
		image: Sim39,
		pdf: Spdf39,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "sensation",
		name: "Sensation",
		brand: VITA_SPAS,
		price: 6999,
		reviews: [],
		description: "The Sensation hot tub by Vita Spas is a large stylish 6 person family hot tub with a lounger and 43 stainless steel jets powered by 2 5hp pumps. Standard features include: Vita Energy Insulation system, Dynamic LED lighting and many more.",
		seats: 6,
		jets: 43,
		gallons: 418,
		length: 91,
		width: 91,
		height: 38,
		image: Sim40,
		pdf: Spdf40,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "trio",
		name: "Trio",
		brand: VITA_SPAS,
		price: 6295,
		reviews: [],
		description: "Vita’s Trio hot tub is the perfect getaway which awaits you and your partner in this intimate and very comfortable spa.",
		seats: 3,
		jets: 20,
		gallons: 195,
		length: 83,
		width: 66,
		height: 31,
		image: Sim41,
		pdf: Spdf41,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "vivre",
		name: "Vivre",
		brand: VITA_SPAS,
		price: 12495,
		reviews: [],
		description: "With seating for up to 7 people, the NEW Vivre Hot Tub from Vita Spas is powered by 3 high powered jet pumps. It features 61 jets with 4 Aurora Cascade water features.",
		seats: 6,
		jets: 61,
		gallons: 441,
		length: 92,
		width: 92,
		height: 38,
		image: Sim42,
		pdf: Spdf42,
		stocked: false,
		acrylic: AcrylicData
	},
	{
		id: "vouex",
		name: "Vouex",
		brand: VITA_SPAS,
		price: 4895,
		reviews: [],
		description: "Larger than the Forte, the Vita Spa Series 100 Voeux is a 5 seater hot tub with a lounger with simple specifications and a fantastic value for your money. The Voeux from Vita Spa is a great  looking spa with 27 adjustable stainless steel jets, freeze protection and ExcelX Siding.",
		seats: 5,
		jets: 27,
		gallons: 271,
		length: 84,
		width: 74,
		height: 34,
		image: Sim43,
		pdf: Spdf43,
		stocked: false,
		acrylic: AcrylicData
	}
];
