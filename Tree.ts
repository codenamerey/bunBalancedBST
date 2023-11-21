import Node from "./Node";

interface Tree {
    root: Node;
    buildTree: () => Node;
}
debugger;
const Tree = (arr: number[]):Tree => {
    
    const buildTree = () => {
        const mid = Math.floor(arr.length / 2);
        const root = Node(arr[mid]);
        return root;
    };
    const root = buildTree();

    return { root, buildTree }
}

export default Tree;