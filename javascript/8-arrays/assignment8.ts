const reverseWords = (mjono : string) => {
    const splitArray:string[] = sentence.split(' ');
    const arrC = splitArray.map((value)  => value.split('').reverse().join().replaceAll(',','')).join().replaceAll(',', ' ');
    return arrC;
}

const sentence = "this is a short sentence";
const reversed = reverseWords(sentence);
console.log(reversed); // prints "siht si a trohs ecnetnes"