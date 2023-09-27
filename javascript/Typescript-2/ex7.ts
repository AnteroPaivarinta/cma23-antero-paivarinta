const nroArray = (taulu: unknown) => {
    if( Array.isArray(taulu) && taulu.every(value => !isNaN(value))){
        return true;
    } else{
        return false;
    }
}

console.log(nroArray([3,34]))