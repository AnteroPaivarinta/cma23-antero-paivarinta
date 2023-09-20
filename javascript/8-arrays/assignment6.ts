const findLargest = (arr: number[]) => {
    return Math.max(...arr);
}


const list = [ 4, 19, 7, 1, 9, 22, 6, 13 ];
const largest = findLargest(list);
console.log(largest); // prints 22