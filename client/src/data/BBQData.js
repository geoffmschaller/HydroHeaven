import {generateProductId} from "../utils/StringHelpers";
import {BULL_BBQS} from "./BrandsData";
// IMAGES
import IMAGE_bbq from '../static/images/islands/bbq.png';
import IMAGE_culinary_q from '../static/images/islands/culinary-q.png';
import IMAGE_entertainment from '../static/images/islands/entertainment.png';
import IMAGE_gourmet_q from '../static/images/islands/gourmet-q.png';
import IMAGE_gourmet_q_jr from '../static/images/islands/gourmet-q-jr.png';
import IMAGE_little_q from '../static/images/islands/little-q.png';
import IMAGE_luxury_q from '../static/images/islands/luxury-q.png';
import IMAGE_master_q from '../static/images/islands/master-q.png';
import IMAGE_mesquite_q from '../static/images/islands/mesquite-q.png';
import IMAGE_octi from '../static/images/islands/octi.png';
import IMAGE_outdoor_kitchen from '../static/images/islands/outdooor-kitchen.png';
import IMAGE_patio_q from '../static/images/islands/patio-q.png';
import IMAGE_power_bbq from '../static/images/islands/power-bbq.png';
import IMAGE_power_q from '../static/images/islands/power-q.png';
import IMAGE_power_q_raised_bar from '../static/images/islands/power-q-raised-bar.png';
import IMAGE_supreme_q from '../static/images/islands/supreme-q.png';
import IMAGE_supreme_q_raised_bar from '../static/images/islands/supreme-q-raised-bar.png';
import IMAGE_western_q from '../static/images/islands/western-q.png';
// PDFS
import PDF_bbq from '../static/pdfs/bbq/bbq.pdf';
import PDF_culinary_q from '../static/pdfs/bbq/culinary-q.PDF';
import PDF_entertainment from '../static/pdfs/bbq/entertainers-bar.PDF';
import PDF_gourmet_q from '../static/pdfs/bbq/gourmet-q.PDF';
import PDF_gourmet_q_jr from '../static/pdfs/bbq/jr-gourmet-q.PDF';
import PDF_little_q from '../static/pdfs/bbq/little-q.pdf';
import PDF_luxury_q from '../static/pdfs/bbq/luxury-q.pdf';
import PDF_master_q from '../static/pdfs/bbq/master-q.PDF';
import PDF_mesquite_q from '../static/pdfs/bbq/mesquite-q.pdf';
import PDF_octi from '../static/pdfs/bbq/octi-q.pdf';
import PDF_outdoor_kitchen from '../static/pdfs/bbq/outdoor-kitchen.PDF';
import PDF_patio_q from '../static/pdfs/bbq/patio-q.pdf';
import PDF_power_bbq from '../static/pdfs/bbq/power-bbq.PDF';
import PDF_power_q from '../static/pdfs/bbq/power-q.PDF';
import PDF_power_q_raised_bar from '../static/pdfs/bbq/power-q-raised-bar.PDF';
import PDF_supreme_q from '../static/pdfs/bbq/supreme-q.PDF';
import PDF_supreme_q_raised_bar from '../static/pdfs/bbq/supreme-q-raised-bar.PDF';
import PDF_western_q from '../static/pdfs/bbq/western-q.PDF';

export const BBQData = [
	{
		id: generateProductId(BULL_BBQS, "BBQ"),
		description: "Bull Outdoor Products is known for its superior award-winning outdoor barbecue islands. The BBQ Island Kitchen is the perfect place to grill your favorite recipes in your backyard or patio. The shaped design allows for bar stool seating creating a unique entertaining area for your outdoor cooking. It includes the premium BULL Angus stainless steel 75,000 BTU gas grill, and comes complete with a sink and refrigerator.",
		image: IMAGE_bbq,
		pdf: PDF_bbq
	},
	{
		id: generateProductId(BULL_BBQS, "Culinary Q"),
		description: "The Bull Culinary Q Outdoor Kitchen Island has all the entertaining capabilities you need to BBQ your favorite grilling recipes with guests on your patio or backyard. This outdoor kitchen features the BULL premium stainless steel Angus gas grill, refrigerator, and has the ability to be customized to your liking with a variety of tile, countertop, and base options.",
		image: IMAGE_culinary_q,
		pdf: PDF_culinary_q
	},
	{
		id: generateProductId(BULL_BBQS, "Entertainment Bar"),
		description: "The Entertainer's Bar is the best choice for those looking to have guests over for cocktails in the backyard or patio. This bar also includes plenty of counter space for serving food, on its granite countertops, stainless steel sink and refrigerator. We can match the counter and base colors to your current Bull Kitchen. Pull up a bar stool and enjoy your favorite recipes!",
		image: IMAGE_entertainment,
		pdf: PDF_entertainment
	},
	{
		id: generateProductId(BULL_BBQS, "Gourment Q"),
		description: "The Gourmet Q Island Kitchen ‘s large bar area is perfect for a luxurious outdoor BBQ experience and ideal for entertaining. With its spacious seating you can upgrade your patio or backyard from the average outdoor furniture and cook your best grilling recipes in style. Features stainless steel gas grill, sink and refrigerator.",
		image: IMAGE_gourmet_q,
		pdf: PDF_gourmet_q
	},
	{
		id: generateProductId(BULL_BBQS, "Gourmet Q JR"),
		description: "The Jr. Gourmet Q Outdoor Island Kitchen and its ample bar area can seat up to 4 people comfortably in your patio or backyard. Its" +
			" smaller shaped design allows for great backyard entertainment or simply creating your favorite BBQ recipes on a BULL gas grill featuring a stainless steel refrigerator.",
		image: IMAGE_gourmet_q_jr,
		pdf: PDF_gourmet_q_jr
	},
	{
		id: generateProductId(BULL_BBQS, "Little Q"),
		description: "The Little Q Outdoor Island Kitchen seats up to 4 people comfortably. This BBQ island is perfect for a more compact backyard or patio with great entertainment capabilities. Whether you are looking to share your favorite grilling recipes with family and friends, or just enjoying outdoor cooking on a BULL stainless steel gas grill, this island is a fantastic idea.",
		image: IMAGE_little_q,
		pdf: PDF_little_q
	},
	{
		id: generateProductId(BULL_BBQS, "Luxury Q"),
		description: "The Luxury Q Outdoor Island Kitchen is ideal for smaller backyards and seating of 3 guests. Gather around this compact BBQ island and cook your best grilling recipes yet on a BULL stainless steel gas grill featuring a stainless steel refrigerator.",
		image: IMAGE_luxury_q,
		pdf: PDF_luxury_q
	},
	{
		id: generateProductId(BULL_BBQS, "Master Q"),
		description: "The Master Q BBQ Island is perfect for a more compact backyard or patio with great entertainment capabilities. It will become the center of your outdoor cooking and entertainment and inspire the ultimate grilling experience on this elite stainless steel gas grill island.",
		image: IMAGE_master_q,
		pdf: PDF_master_q
	},
	{
		id: generateProductId(BULL_BBQS, "Mesquite Q"),
		description: "The Mesquite Q Island Kitchen ‘s expansive bar area is the best way to impress your guests with an outdoor BBQ. With its spacious seating you can upgrade your patio or backyard from the average outdoor furniture and cook your best grilling recipes in style. Features stainless steel gas grill and refrigerator.",
		image: IMAGE_mesquite_q,
		pdf: PDF_mesquite_q
	},
	{
		id: generateProductId(BULL_BBQS, "Octi Q"),
		description: "With its octagon-shaped seating area, the Octi Q Outdoor Island Kitchen provides a more intimate setting for your next BBQ. Upgrade your patio or backyard and impress your guests with your best grilling recipes. Features stainless steel gas grill and refrigerator.",
		image: IMAGE_octi,
		pdf: PDF_octi
	},
	{
		id: generateProductId(BULL_BBQS, "Outdoor Kitchen"),
		description: "This Outdoor Kitchen island is one of our first and most complete outdoor barbecue kitchens. This design provides a backyard entertainment center and the space to handle all of your outdoor grilling needs. This is the ultimate grilling & entertaining station.",
		image: IMAGE_outdoor_kitchen,
		pdf: PDF_outdoor_kitchen
	},
	{
		id: generateProductId(BULL_BBQS, "Patio Q"),
		description: "The Patio Q Island is a perfect outdoor kitchen for a more compact yard or patio space, featuring the stainless steel Outlaw grill and plenty of counterspace.",
		image: IMAGE_patio_q,
		pdf: PDF_patio_q
	},
	{
		id: generateProductId(BULL_BBQS, "Power BBQ"),
		description: "The Power BBQ Island is another great choice for those with a smaller outdoor space wanting a superior stainless steel gas grill and an exciting place to entertain guests with food or drinks. Its wraparound counter seats up to 6 adults comfortably and will become the center of your next BBQ.",
		image: IMAGE_power_bbq,
		pdf: PDF_power_bbq
	},
	{
		id: generateProductId(BULL_BBQS, "Power Q"),
		description: "The Power Q Outdoor Island Kitchen is a wonderful addition to any smaller backyard or patio for the ultimate grill master. It features a stainless steel Angus gas grill, and refrigerator and provides ample counter space is great for preparing your favorite recipes.",
		image: IMAGE_power_q,
		pdf: PDF_power_q
	},
	{
		id: generateProductId(BULL_BBQS, "Power Q Raised Bar"),
		description: "The Power Q Raised Back Bar adds a bar to our “Power Q” design for guest seating. Grill and serve cocktails to guests behind the bar on this outdoor island kitchen with its stainless steel Angus gas grill and refrigerator.",
		image: IMAGE_power_q_raised_bar,
		pdf: PDF_power_q_raised_bar
	},
	{
		id: generateProductId(BULL_BBQS, "Supreme Q"),
		description: "The Supreme Q Outdoor Island Kitchen provides a large countertop option for those looking to entertain a bigger crowd. This stainless steel grilling station will turn your backyard into an entertainer’s dream and will become the center of your outdoor BBQ experience.",
		image: IMAGE_supreme_q,
		pdf: PDF_supreme_q
	},
	{
		id: generateProductId(BULL_BBQS, "Supreme Q Raised Bar"),
		description: "The Supreme Q Raised Bar offers a large counter space as well as an added bar for an unmatched grilling and entertaining experience. This outdoor island kitchen features a stainless steel gas grill and refrigerator for serving only the best food and drinks to your guests.",
		image: IMAGE_supreme_q_raised_bar,
		pdf: PDF_supreme_q_raised_bar
	},
	{
		id: generateProductId(BULL_BBQS, "Western Q"),
		description: "The Western Q Outdoor Island Kitchen features an intimate countertop and bar for guest seating, unmatched grilling and entertaining experience. This outdoor island kitchen features a stainless steel gas grill, and refrigerator. With the raised bar and the extra counter space, you will never run out of room to share all of your favorite grilling recipes in the comfort of your own backyard or patio.",
		image: IMAGE_western_q,
		pdf: PDF_western_q
	},
];