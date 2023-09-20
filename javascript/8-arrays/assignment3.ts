function insertNumber(value: number[], index: number) {
    value.push(index);
    value.sort((a, b) => a - b);;
    console.log('VALUE', value)

}

let array = [ 1, 3, 4, 7, 11 ];


insertNumber(array, 8);
console.log(array); // prints [ 1, 3, 4, 7, 8, 11 ] 