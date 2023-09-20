const fruits = ["banana", "apple", "grapefruit", "pear", "pineapple", "lemon"];
const index = fruits.findIndex(( value ) => value === 'pear');
fruits.splice(index, 1);
console.log(fruits);