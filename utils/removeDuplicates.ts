export default function removeDuplicates(arr: number[]) {
    let sansDuplicates: number[] = [];

    arr.forEach(el => {
        if(!sansDuplicates.includes(el)){
            sansDuplicates.push(el);
        }
    })

    return sansDuplicates;
}