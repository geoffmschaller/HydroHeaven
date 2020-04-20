import NumberValidator from '../validators/NumberValidator';

describe("Number Validator Suite", () => {

    test("Empty, Undefined and  Null Tests", () => {
        expect(NumberValidator("")).toBeFalsy();
        expect(NumberValidator(undefined)).toBeFalsy();
        expect(NumberValidator(null)).toBeFalsy();
        expect(NumberValidator(" ")).toBeFalsy();
        expect(NumberValidator(" " + " ")).toBeFalsy();
    });

    test("Non Number Failures", () => {
        expect(NumberValidator("test")).toBeFalsy();
        expect(NumberValidator("test2")).toBeFalsy();
        expect(NumberValidator("23.2s")).toBeFalsy();
        expect(NumberValidator("23..2")).toBeFalsy();
        expect(NumberValidator("23.2.2")).toBeFalsy();
        expect(NumberValidator(2 + "test")).toBeFalsy();
        expect(NumberValidator("\@?>")).toBeFalsy();
    });

    test("Successful Numeric Validations", () => {
        expect(NumberValidator(2)).toBeTruthy();
        expect(NumberValidator(23242)).toBeTruthy();
        expect(NumberValidator(2.3)).toBeTruthy();
        expect(NumberValidator(2 + "." + 23)).toBeTruthy();
    });

});