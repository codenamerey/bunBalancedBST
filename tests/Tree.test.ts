import Tree from "../Tree";
import { test, expect, it, beforeAll, describe } from "bun:test";

describe("Tree methods", () => {
    let tree : Tree;
    const input = [1, 3, 5, 5, 7, 9];
    beforeAll(() => {
        tree = Tree(input);
    })

    test("Creates new tree", () => {
        expect(tree).toHaveProperty("root");
        expect(tree).toHaveProperty("buildTree");
    })

    test("Returns correct root", () => {
        const root = 5;
        expect(tree.buildTree()).toBe(root);
    })
})