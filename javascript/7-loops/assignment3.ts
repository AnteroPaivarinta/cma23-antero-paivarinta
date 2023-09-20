const ages = [20, 35, 27, 44, 24, 32]
console.log('Ages', ages);
const total = ages.reduce((previous, current, index)=>previous+current, 0);
const average = total / ages.length;
console.log('Average', average);