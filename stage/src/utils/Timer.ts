class Timer {

	date: Date = new Date();

	addDays = (days: number): Timer => {
		this.date = new Date(this.date.getTime() + (1000 * 60 * 60 * 24 * days));
		return this;
	};

	getDay = (): number => {
		return this.date.getDay();
	};

	getMonthName = (): string => {
		let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		return months[this.date.getMonth()];
	};

	getDayName = (): string => {
		let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		return days[this.date.getDay()];
	};

	getDayString = (): string => {
		let day: number = this.date.getDate();
		let char: string = day.toString()[day.toString().length];
		let ending: string;
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

	getDeliveryDate = (): string => {
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