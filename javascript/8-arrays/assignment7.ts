function sortNumberArray (arr:number[]) {
    let anotherArray:any[] = new Array(arr.length);
    anotherArray.fill(null);
    for( let i = 0; i < arr.length; i++) {
        let countz = 0;
        for( let z = 0; z < arr.length ; z++) {
            if( arr[z] >  arr[i]) {
                countz = countz+1
            }
        }
        let index = arr.length - countz -1;
        anotherArray[index] = arr[i];
    }
    arr=anotherArray;
    return arr;
}


const array2 = [ 4, 19, 7, 1, 9, 22, 6, 13 ];
const sortedArray = sortNumberArray(array2);
console.log(sortedArray); // prints [ 1, 4, 6, 7, 9, 13, 19, 22 ]