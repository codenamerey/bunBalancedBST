import { expect, test, it } from "bun:test";
import Node from "../Node"
test("Node methods", () => {

    it("Creates new node", () => {
        const input = "a";
        const expectedOutput : Node = {
            value: input,
            left: null,
            right: null
        };
        const actualOutput = Node(input);

        expect(actualOutput).toEqual(actualOutput);
    })
})