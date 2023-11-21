import { expect, test, it, describe } from "bun:test";
import Node from "../Node"
describe("Node methods", () => {

    test("Creates new node", () => {
        const input = 5;
        const expectedOutput : Node = {
            value: input,
            left: null,
            right: null
        };
        const actualOutput = Node(input);

        expect(actualOutput).toEqual(expectedOutput);
    })
})