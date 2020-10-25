import Axios from "axios";

//https://cors-anywhere.herokuapp.com/

const pageViewUrl = "https://api.hydroheavenspas.com/analytics/page-view";

const SendPageView = async (session, page) => {
	return await Axios.post(pageViewUrl, {
		session: session,
		page: page
	});
};

export default SendPageView;