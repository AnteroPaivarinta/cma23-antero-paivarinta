const isPalindrome = (mjono : string): boolean => {
    let arr1 = mjono.split('');
    const arr2 =  mjono.split('').reverse();

    const mjono1 = arr1.join().replace(',','');
    const mjono2 = arr2.join().replace(',','');

    if (mjono1 === mjono2){
        return true;
    }
    else{
        return false;
    }
}

console.log(isPalindrome('BBB'))