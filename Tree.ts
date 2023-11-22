import Node from "./Node";
import mergeSort from "./utils/mergeSort";
import removeDuplicates from "./utils/removeDuplicates";

interface Tree {
    root: Node;
    buildTree: (arr: number[]) => Node;
}
debugger;
const Tree = (arr: number[]):Tree => {
    
    const buildTree = (arr: number[]) => {

        if(arr.length <= 1) {
            return Node(arr[0]);
        }

        arr = removeDuplicates(arr);
        arr = mergeSort(arr);
        const mid = Math.floor((arr.length - 1) / 2);
        const root = Node(arr[mid]);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid + 1);
        root.left = buildTree(left);
        root.right = buildTree(right);
        return root;
    };

    const root = buildTree(arr);

    return { root, buildTree }
}

export default Tree;