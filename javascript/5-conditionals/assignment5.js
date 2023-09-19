const a = 'owepewrre';
const b = 'wroiprorege'
const c = '435erggier9g';

if(a.length > b.length && a.length > c){
    if(b.length > c.length){
        console.log(a, b, c)
    } else{
        console.log(a,c,b)
    }
}

if(b.length > a.length && b.length > c.length){
    if(a.length > c.length){
        console.log(b, a, c)
    } else{
        console.log(b,c,a)
    }
}

if(c.length > a.length && c.length > b.length){
    if(b.length > a.length){
        console.log(c, b, a)
    } else{
        console.log(c,a,b)
    }
}