//1

const arrayChange = (arr:number[]): number[] => {
    let copy:number[] = arr;
    copy[0] = 99;
    return copy;
}

const arr:number[] = [1,2,3,4,5,5,];

console.log('previous array ', arr);
const newArray = arrayChange(arr);
console.log('newarray', newArray)


//2


interface IRandomObject  {
    firstName:string,  
    lastName:string,
    age?: number,
}
const objectChange = (ob: IRandomObject): IRandomObject => {
    return {...ob, age : 13};
}

const ob: IRandomObject = {firstName: 'jooojoo', lastName: 'joo'}; 
console.log('PReviousiobject', ob)

console.log(objectChange(ob))