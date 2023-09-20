const exponentValueList = (n:number, value:number) => {
    if(n <= 0){
        console.log(' n Needs to be positive')
    } else {
        let number: number = value;
        for( let i = 1; i <= n; i++){
            console.log('Number', value)
            number = number*2
        }
    }
   
}

exponentValueList(4, 2);