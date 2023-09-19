for(let i = 0;i <=12; i++){
    if(i === 1 || i === 3 || i === 5 || i === 7 ||i === 8 || i === 10 ||i === 12) {
        console.log(i, 'Päiviä on 31')
    } else {
        if(i === 2){
            console.log(i, "päiviä on 28")
        } else{
            console.log(i, 'päiviä on 30')
        }
    }
}