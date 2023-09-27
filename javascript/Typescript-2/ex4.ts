function generateRandomArray(length: number, min: number, max: number): number[] {
    const randomArray: number[] = [];
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.random() * (max - min) + min;
      randomArray.push(randomNumber);
    }
    return randomArray;
  }
  
  const arrayLength = 10; 
  const minValue = 1;   
  const maxValue = 100; 
  
  const randomArray = generateRandomArray(arrayLength, minValue, maxValue);
  
  const sortedArray = [...randomArray].sort((a, b) => a - b);
  
  console.log("Sorted Array (Ascending Order):", sortedArray);
  
  console.log("Numbers in Descending Index Order:");
  for (let i = sortedArray.length - 1; i >= 0; i--) {
    console.log(sortedArray[i]);
  }