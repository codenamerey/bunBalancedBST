import { describe, test, expect } from "bun:test";
import removeDuplicates from "../../utils/removeDuplicates";

describe("Remove duplicates", () => {
    test("Removes duplicates", () => {
        const input = [1, 1, 2, 2, 3];
        const expectedOutput = [1, 2, 3];
        const output = removeDuplicates(input);

        expect(output).toEqual(expectedOutput);
    })
})