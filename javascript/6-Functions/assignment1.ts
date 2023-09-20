//1
let  language:string = 'Suomi';

function hello ()  {
    if (language === 'Suomi') {
        console.log('Moi maailma!');
    } else if(language === 'Espanja') {
        console.log('Hola!');
    } else if(language === 'Englanti') {
        console.log('Hello world!');
    }
};
hello();


//B

const hello2 = (variable:string) => {
    if (variable === 'Suomi') {
        console.log('Moi maailma!');
    } else if(variable === 'Espanja') {
        console.log('Hola!');
    } else if(variable === 'Englanti') {
        console.log('Hello world!');
    }
}

hello2('Englanti');



