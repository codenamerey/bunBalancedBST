interface IndexMap {
    [value: number]: number[];
}

const merge = (left : number[], right : number[]) => {

    let merged: number[] = [];
    let map: IndexMap = {};
    // [2, 41] [1, 5]
    for(let i = 0; i < left.length; i++) {
        for(let j = 0; j < right.length; j++) {
            const leftNumber = left[i];
            const rightNumber = right[j];
            if(leftNumber < rightNumber) {
                merged.push(leftNumber);
                // If leftNumber is last from left,
                // Append remaining right numbers.
    
                if(i == left.length - 1) {
                    const remainingRight = right.slice(j);
                    merged = merged.concat(remainingRight);
                }
                break;
            } else {
                if(!map[rightNumber]) {
                    merged.push(rightNumber);
                    map[rightNumber] = [];
                    map[rightNumber].push(merged.length - 1);
                }
                // If rightNumber is last from right,
                // Append remaining left numbers.
                if(j == right.length - 1) {
                    const remainingLeft = left.slice(i);
                    merged = merged.concat(remainingLeft);
                }
            }


        }
    }

    return merged;
}

export default function mergeSort(arr : number[]) {
    if(arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    const merged = merge(mergeSort(left), mergeSort(right));

    return merged;

}