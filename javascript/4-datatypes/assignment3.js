
// A) Tulostaa false. B) boolean



const array1 = [9,6,9]
const array2 = [7,10,5]

const sum1 = array1.reduce((a, b) => {
    return a + b;
})
const sum2 = array2.reduce((a, b) => {
    return a + b;
})

const keskiarvo = (sum1+sum2) / (array1.length+array2.length);
console.log(keskiarvo)