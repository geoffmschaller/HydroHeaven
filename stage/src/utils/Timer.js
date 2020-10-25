class Timer {

	date = new Date();

	addDays = (days) => {
		this.date = new Date(this.date.getTime() + (1000 * 60 * 60 * 24 * days));
		return this;
	};

	getDay = () => {
		return this.date.getDay();
	};

	getMonthName = () => {
		let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		return months[this.date.getMonth()];
	};

	getDayName = () => {
		let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		return days[this.date.getDay()];
	};

	getDayString = () => {
		let day = this.date.getDate();
		let char = day.toString()[day.toString().length];
		let ending;
		switch (char) {
			case "1":
				ending = "st";
				break;
			case "2":
				ending = "nd";
				break;
			case "3":
				ending = "rd";
				break;
			default:
				ending = "th";
		}
		return day.toString() + ending;
	};

	getDeliveryDate = () => {
		let offset = 3;
		if (this.getDay() === 3)
			offset = 5;
		if (this.getDay() === 4)
			offset = 4;
		this.addDays(offset);
		return this.getDayName() + " " + this.getMonthName() + " " + this.getDayString()
	}

}

export default Timer;