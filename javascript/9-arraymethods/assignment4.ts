//A)
const incrementAll = (arr:number[]) => {
    return arr.map((value )=> value+1);
}

const decrementAll = (anotherArr:number[]) => {
    return anotherArr.map((val) => val -1 )
}

const numbers = [ 4, 7, 1, 8, 5 ];
const newNumbers = incrementAll(numbers);
console.log(newNumbers); // prints [ 5, 8, 2, 9, 6 ]


//B)

const numbersAA = [ 4, 7, 1, 8, 5 ];
const newNumbeAA = decrementAll(numbersAA);
console.log(newNumbeAA); // prints [ 3, 6, 0, 7, 4 ]