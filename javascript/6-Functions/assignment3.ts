const firstTriangle = { width: 7.0, length: 3.5 };
const secondTriangle = { width: 4.3, length: 6.4 };
const thirdTriangle = { width: 5.5, length: 5.0 };

const calc = (ob:any) => {
    return ob.width * ob.length / 2.0
}

console.log("Area of first triangle: " + calc(firstTriangle));
console.log("Area of second triangle: " + calc(secondTriangle));
console.log("Area of third triangle: " + calc(thirdTriangle));