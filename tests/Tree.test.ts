import Node from "../Node";
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
        const root = Node(5);
        expect((tree.buildTree()).value).toBe(root.value);
    })

    test("Creates correct binary tree", () => {
        const expectedNodeLeftRight = 3;
        const expectedNodeRightRight = 7;

        const actualNodeLeftRight = tree.root.left?.right?.value;
        const actualNodeRightRight = tree.root.right?.right?.value;

        expect(actualNodeLeftRight).toBe(expectedNodeLeftRight);
        expect(actualNodeRightRight).toBe(expectedNodeRightRight)
        expect

    })
})