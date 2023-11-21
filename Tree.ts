interface Tree {
    root: number;
    buildTree: () => number;
}
debugger;
const Tree = (arr: number[]):Tree => {
    
    const buildTree = () => {
        const mid = Math.floor(arr.length / 2);
        return arr[mid];
    };
    const root = buildTree();

    return { root, buildTree }
}

export default Tree;