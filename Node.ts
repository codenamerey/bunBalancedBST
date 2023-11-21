interface Node {
    value: number;
    left: Node | null;
    right: Node | null;
}

const Node = (value: number):Node => {
    return {
        value,
        left: null,
        right: null
    }
}

export default Node;