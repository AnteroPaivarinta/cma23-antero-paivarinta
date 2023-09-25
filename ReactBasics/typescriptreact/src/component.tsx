interface IComp {
    name: string,
    age: number,
}

const Comp : React.FC<IComp> = (props:IComp) => {
    const A = (a:number) => {
        const plus:number = a + a;
        if(plus > 5){
            console.log('JOO');
        } else{
            console.log('JOO3')
        }
        return plus;
    }

    
    return(
        <div> Hello there I'm {props.name} and i'm {props.age} years old.!! Plus: {A(props.age).toString()}</div>
    )
}
export default Comp;