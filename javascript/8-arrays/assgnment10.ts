const getCountOfLetters = (jono: string) :number=> {
    return  jono.replace(/[^A-Za-z]/g, '').length
}

console.log(getCountOfLetters('bl12'))