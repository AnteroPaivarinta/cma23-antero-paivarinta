const summa = (sumMax:number) => {
    let sum = 0;
    for (let i = 0; i < 10000; i++) {
        let oldSum = sum;
        sum = sum + i;
        if ( sum > sumMax){
            console.log('INDEX', i);
            console.log('Summa', oldSum)
            break;
        }
    }
}

summa(5)

