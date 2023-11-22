import Node from "./Node";
import mergeSort from "./utils/mergeSort";
import removeDuplicates from "./utils/removeDuplicates";

interface Tree {
    root: Node;
    buildTree: () => Node;
}
debugger;
const Tree = (arr: number[]):Tree => {
    
    const buildTree = () => {
        arr = removeDuplicates(arr);
        arr = mergeSort(arr);
        const mid = Math.floor((arr.length - 1) / 2);
        const root = Node(arr[mid]);
        const currentNode = root;
        return root;
    };
    const root = buildTree();

    return { root, buildTree }
}

export default Tree;