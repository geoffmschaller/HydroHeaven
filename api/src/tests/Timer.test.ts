import Timer from "../utils/timer";

describe("Timer Suite", () => {

	test("Date Time", () => {
		expect(Timer.dateTime()).not.toBeNull();
		expect(Timer.dateTime()).not.toBeFalsy();
		expect(Timer.dateTime()).toBeDefined();
		expect(Timer.dateTime()).not.toBeNaN();
	});

	test("Date", () => {
		expect(Timer.date()).not.toBeNull();
		expect(Timer.date()).not.toBeFalsy();
		expect(Timer.date()).toBeDefined();
		expect(Timer.date()).not.toBeNaN();
	});

	test("Month", () => {
		expect(Timer.month()).not.toBeNull();
		expect(Timer.month()).not.toBeFalsy();
		expect(Timer.month()).toBeDefined();
		expect(Timer.month()).not.toBeNaN();
	});

	test("Day", () => {
		expect(Timer.day()).not.toBeNull();
		expect(Timer.day()).not.toBeFalsy();
		expect(Timer.day()).toBeDefined();
		expect(Timer.day()).not.toBeNaN();
	});

	test("Year", () => {
		expect(Timer.year()).not.toBeNull();
		expect(Timer.year()).not.toBeFalsy();
		expect(Timer.year()).toBeDefined();
		expect(Timer.year()).not.toBeNaN();
	});

	test("Time", () => {
		expect(Timer.time()).not.toBeNull();
		expect(Timer.time()).not.toBeFalsy();
		expect(Timer.time()).toBeDefined();
		expect(Timer.time()).not.toBeNaN();
	});

	test("Hour", () => {
		expect(Timer.hour()).not.toBeNull();
		expect(Timer.hour()).not.toBeFalsy();
		expect(Timer.hour()).toBeDefined();
		expect(Timer.hour()).not.toBeNaN();
	});

	test("Minute", () => {
		expect(Timer.minute()).not.toBeNull();
		expect(Timer.minute()).not.toBeFalsy();
		expect(Timer.minute()).toBeDefined();
		expect(Timer.minute()).not.toBeNaN();
	});

	test("Second", () => {
		expect(Timer.second()).not.toBeNull();
		expect(Timer.second()).not.toBeFalsy();
		expect(Timer.second()).toBeDefined();
		expect(Timer.second()).not.toBeNaN();
	});

	test("Period", () => {
		expect(Timer.period()).not.toBeNull();
		expect(Timer.period()).not.toBeFalsy();
		expect(Timer.period()).toBeDefined();
		expect(Timer.period()).not.toBeNaN();
	});

});