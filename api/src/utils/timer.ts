class Timer {

	static dateTime = (): string => {
		return new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
	};

	static date = (): string => {
		return new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"}).split(",")[0].trim();
	};

	static month = (): string => {
		return new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"}).split(",")[0].trim().split('/')[0].trim();
	};

	static day = (): string => {
		return new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"}).split(",")[0].trim().split('/')[1].trim();
	};

	static year = (): string => {
		return new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"}).split(",")[0].trim().split('/')[2].trim();
	};

	static time = (): string => {
		return new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"}).split(",")[1].trim();
	};

	static hour = (): string => {
		return new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"}).split(",")[1].trim().replace("AM", "").trim().split(":")[0].trim();
	};

	static minute = (): string => {
		return new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"}).split(",")[1].trim().replace("AM", "").trim().split(":")[1].trim();
	};

	static second = (): string => {
		return new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"}).split(",")[1].trim().replace("AM", "").trim().split(":")[2].trim();
	};

	static period = (): string => {
		return new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"}).indexOf("AM") != -1 ? "AM" : "PM";
	}

}

export default Timer;