const getCountOfLettersB = (mjono:string) => {
    
    const A = mjono.replaceAll(' ', '').split('');
    let ob:any = {}
    A.forEach((value) => {
        if(!ob[value]){
            ob[value] = 1;
        } else{
            ob[value] = ob[value] +1;
        }
    })
    return ob;
}

const result = getCountOfLettersB("a black cat");
console.log(result);
/* prints 
{
	a: 3,
	b: 1,
	c: 2,
	k: 1,
	l: 1,
	t: 1
}
*/