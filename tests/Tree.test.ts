import Tree from "../Tree";
import { test, expect, it, beforeAll } from "bun:test";

test("Tree methods", () => {
    let tree : Tree;
    const input = [1, 3, 5, 5, 7, 9];
    beforeAll(() => {
        tree = Tree(input);
    })

    it("Creates new tree", () => {
        expect(tree.root).toBe(tree.buildTree());
    })
})