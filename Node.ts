interface Node {
    value: string;
    left: Node | null;
    right: Node | null;
}

const Node = (value: string):Node => {
    return {
        value,
        left: null,
        right: null
    }
}

export default Node;