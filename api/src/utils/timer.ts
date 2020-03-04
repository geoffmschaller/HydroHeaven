class Timer {

	// 3/4/2020, 12:21:15 AM

	dateString: string;

	constructor() {
		this.dateString = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
	}


	dateTime = (): string => {
		return this.dateString;
	};

	date = (): string => {
		return this.dateString.split(",")[0].trim();
	};

	month = () => {
		return this.dateString.split(",")[0].trim().split('/')[0].trim();
	};

	day = () => {
		return this.dateString.split(",")[0].trim().split('/')[1].trim();
	};

	year = () => {
		return this.dateString.split(",")[0].trim().split('/')[2].trim();
	};

	time = (): string => {
		return this.dateString.split(",")[1].trim();
	};

	hour = (): string => {
		return this.dateString.split(",")[1].trim().replace("AM", "").trim().split(":")[0].trim();
	};

	minute = (): string => {
		return this.dateString.split(",")[1].trim().replace("AM", "").trim().split(":")[1].trim();
	};

	second = (): string => {
		return this.dateString.split(",")[1].trim().replace("AM", "").trim().split(":")[2].trim();
	};

	period = (): string => {
		return this.dateString.indexOf("AM") != -1 ? "AM" : "PM";
	}

}

export default Timer;