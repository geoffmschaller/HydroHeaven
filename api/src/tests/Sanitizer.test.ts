import Sanitizer from '../validators/Sanitizer';

describe("Sanitizer Test Suite", () => {

    test("Empty, Null and Undefined Tests", () => {
        expect(Sanitizer("")).toBe("");
        expect(Sanitizer(null)).toBe("");
        expect(Sanitizer(undefined)).toBe("");
    })

    test("Remove Normal Chars", () => {
        expect(Sanitizer("<script/><script></script>&lt&gt&amp[]<>/\\{}")).toBe("");
    });

    test("Remove Extra Chars", () => {
        expect(Sanitizer("@", ["@"])).toBe("");
        expect(Sanitizer("!@", ["@","!"])).toBe("");
    });

    test("Ignore Chars", () => {
        expect(Sanitizer("@f{", null, ["{"])).toBe("@f{");
        expect(Sanitizer("@f[]", null, ["]"])).toBe("@f]");
        expect(Sanitizer("{}", null, ["@","!"])).toBe("");
    });

    test("Remove Spaces", () => {
        expect(Sanitizer("@f{ ", null, null, true)).toBe("@f");
        expect(Sanitizer(" @f []", null, null, true)).toBe("@f");
        expect(Sanitizer(" ", null, null, true)).toBe("");
    });

});