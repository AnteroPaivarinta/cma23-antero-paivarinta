
const calculateTotalScore = (line:string) => {
    const objekti:any  = {
        S: 8,
        A: 6,
        B: 4,
        C: 3,
        D: 2,
        F: 0,
    }
    let sum = 0;
    const A = line.split('');
    A.forEach((value) => {
        sum = sum + objekti[value]
    })
    return sum;
}

const calculateAverageScore = ( line:string ) => {
    const objekti:any  = {
        S: 8,
        A: 6,
        B: 4,
        C: 3,
        D: 2,
        F: 0,
    }
    let sum = 0;
    const A = line.split('');
    A.forEach((value) => {
        sum = sum + objekti[value]
    })
    return sum / Object.keys(objekti).length;
}
//A)
console.log(calculateTotalScore("DFCBDABSB"))

//B)
console.log(calculateAverageScore("DFCBDABSB"))

//C)

const b = [ "AABAACAA", "FFDFDCCDCB", "ACBSABA", "CCDFABABC" ];
console.log(b.map((value) => calculateAverageScore(value)));



