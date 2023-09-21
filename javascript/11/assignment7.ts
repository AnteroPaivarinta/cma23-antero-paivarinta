class Animal {
    private weight: number;
    private cuteness:number;
    constructor(x: number, y: number) {
        this.weight=x, 
        this.cuteness=y;
    }
    getCuteness() {
        return this.cuteness;
    }
    makeSound() {
        console.log('Silence')
    }
}


class Cat extends Animal {

    constructor(x: number, y: number) {
        super(x, y);
    }
    makeSound() {
        console.log('Meow')
    }
}

class Dog extends Animal {
    private breed:any
    constructor(x: number, y: number, breed:any ) {
        super(x, y);
        this.breed = breed;

    }
    makeSound() {
        if(this.getCuteness() > 4){
            console.log('awoo')
        } else{
            console.log('bark')
        }
    }
}
const AnimalOne = new Animal(3, 4);
AnimalOne.makeSound();

const cat = new Cat(3,3);
cat.makeSound()

const dog1 = new Dog(7.0, 4.5, "kleinspitz");
const dog2 = new Dog(30.0, 3.75, "labrador");
dog1.makeSound(); // prints "awoo"
dog2.makeSound(); // prints "bark"
