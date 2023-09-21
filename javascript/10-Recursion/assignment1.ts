const F = (n:number) => {

    if(n === 0){
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    let val:any = (F(n - 2) * 3) + F(n - 1)
    
    return val;
}




console.log(F(5))