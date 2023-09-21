const numberArray: number[] = [ 8, 12, 17, 9, 16, 24, 16, 25, 35, 27, 38, 50 ];
// A)


for( let i = 0; i < numberArray.length; i++ ){
    if (numberArray[i] > 20){
        console.log('Value found', numberArray[i]);
        break;
    }
}

// B)
console.log(numberArray.find((value) => value > 20));
//C)
console.log(numberArray.findIndex((value) => value > 20));
//D)
const indexA = numberArray.findIndex((value) => value > 20)
numberArray.splice(indexA+1,  (numberArray.length - indexA -1 ) )
console.log(numberArray);
