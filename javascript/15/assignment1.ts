const sumArray = (limit:number) => {
    let sum=0;
    for(let i = 0;i<limit;i++){
        sum+=i;
    }
    return sum;
}


const createDelayedCalculation = (limit:any, milliseconds:any) => {
    let kesto = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(sumArray(limit));
      }, milliseconds);
    });
    return kesto;
  };
const example =  new Promise(resolve => {
    setTimeout(() => resolve(sumArray(5)), 2000)
    
}) 

console.log( example)

createDelayedCalculation(20000000, 2000).then(result => console.log(result));

// Prints 1250025000 after a delay of 0.5 seconds
createDelayedCalculation(50000, 500).then(result => console.log(result));

