let balance;
let isActive = true;
let checkBalance = true;

if(checkBalance){
    if(isActive && balance>=0){
        console.log('Balance'. balance)
    } else{
        if(!isActive){
            console.log('Your account isnt active');
        } else{
            if(balance === 0){
                console.log('Your account is empty')
            } else {
                console.log('Your balance is negative')
            }
        }
    }
} else{
    console.log('Have a nice day');
}