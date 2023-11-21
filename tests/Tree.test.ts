import Tree from "../Tree";
import { test, expect, it, beforeAll, describe } from "bun:test";

describe("Tree methods", () => {
    let tree : Tree;
    const input = [1, 3, 5, 5, 7, 9];
    beforeAll(() => {
        tree = Tree(input);
    })

    test("Creates new tree", () => {
        expect(tree.root).toBe(tree.buildTree());
    })

    test("Returns correct root", () => {
        const root = input[Math.floor((input.length / 2))];
        expect(tree.buildTree()).toBe(root);
    })
})