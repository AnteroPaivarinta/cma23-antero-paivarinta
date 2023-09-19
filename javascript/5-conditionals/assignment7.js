let pear = {weighting: 178, name: 'pear'}
let lemon = {weighting: 120, name: 'lemon'}
let apple = {weighting: 90, name: 'apple'}
let mango = {weighting: 150, name: 'mango'}


const array = [pear, lemon, apple, mango];
const average = array.reduce((previous, current )=> {
    previous.weighting + current.weighting;
}) / array.length
console.log(average)
let x = 1000000000000000000000;
let obj = null;
array.forEach((previous)=> {
    if((average - previous.weighting) < x || (previous.weighting - average ) < x){
        x = (average - previous.weighting) >  (previous.weighting - average ) ? (average - previous.weighting) : (previous.weighting - average )
        obj = previous;
    }
})

console.log(obj.name)
