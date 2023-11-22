import { expect, describe, test } from "bun:test";
import mergeSort from "../../utils/mergeSort";

describe("Merge sort", () => {
    test("Sorts unsorted array", () => {
        const unsorted = [10, 2, 5, 13, 75, 100];
        const expectedSorted = [2, 5, 10, 13, 75, 100];
        const actualSorted = mergeSort(unsorted);
        expect(actualSorted).toEqual(expectedSorted);
    })
})