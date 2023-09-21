const sentencify:any = (arr:string[], i:number) => {
    if(i === arr.length) {
        return ' !'
    }
    
    return arr[i] + " "+ sentencify(arr, i+1)
}

const wordArray = ["The", "quick", "silver", "wolf" ];
console.log(sentencify(wordArray, 2))