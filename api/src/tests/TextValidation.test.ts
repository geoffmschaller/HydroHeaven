import TextValidator from '../validators/TextValidator';

describe("Text Validation Suite", () => {


    test("Empty, Undefined and Null Tests", () => {
        expect(TextValidator("")).toBeFalsy();
        expect(TextValidator(null)).toBeFalsy();
        expect(TextValidator(undefined)).toBeFalsy();
        expect(TextValidator(" ")).toBeFalsy();
        expect(TextValidator(" " + " ")).toBeFalsy();
    });

    test("Successful Text Validation", () => {
        expect(TextValidator("test")).toBeTruthy();
        expect(TextValidator("test2")).toBeTruthy();
    });

});