const number1 = 34543;
const number2 = 3237984;
const number3 = 3423989032;


if (number2 < number1 && number2 < number3) {
    console.log('Pienin on ' ,number2)
}

else if(number3 < number2 && number3 < number1) {
    console.log('Pienin on ' ,number3)
}

else if (number2 < number3 && number2 < number3) {
    console.log('Pienin on ' ,number2)
}
else if ( number1 === number2 && number2 === number3) {
    console.log(' All equal');
}

if (number2 > number1 && number2 > number3) {
    console.log('Suurin on ' ,number2)
}

else if(number3 > number2 && number3 > number1) {
    console.log('Suurin on ' ,number3)
}

else if (number2 > number3 && number2 > number3) {
    console.log('Suurin on ' ,number2)
}