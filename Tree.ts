interface Tree {
    root: number;
    buildTree: () => number;
}

const Tree = (arr: number[]):Tree => {

    const buildTree = () => { return 1 };
    const root = buildTree();

    return { root, buildTree }
}

export default Tree;