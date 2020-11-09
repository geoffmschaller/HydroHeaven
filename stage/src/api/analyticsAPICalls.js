import Axios from "axios";

const SendPageView = async (session, page) => {
	return await Axios.post("https://api.hydroheavenspas.com/analytics/page-view", {
		session: session,
		page: page
	});
};

export default SendPageView;