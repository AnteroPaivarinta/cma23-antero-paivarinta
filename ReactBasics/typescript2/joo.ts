

const aa = (a: string)  => {
    return {length: a.length, words: a.replace(/[^A-Za-z]/g, '').length}
}


console.log(aa('345sd'))