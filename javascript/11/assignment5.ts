//A)


class Room {
    private width:number;
    private height:number;
    private furniture: string[];
    constructor(x:number, y:number) {
        this.width = x;
        this.height = y;
        this.furniture = [];
    }
    getArea() {
        return this.width * this.height
    }
    addFurniture (mjono: string) {
        this.furniture.push(mjono);
    }

}
let room = new Room(4.5, 6.0);
console.log(room); // Room { width: 4.5, height: 6 }

//B)
room = new Room(4.5, 6.0);
const area = room.getArea();
console.log(area); // prints 27


//C)
room = new Room(4.5, 6.0);
room.addFurniture("sofa");
room.addFurniture("bed");
room.addFurniture("chair");
console.log(room); // prints Room { width: 4.5, height: 6, furniture: [ 'sofa', 'bed', 'chair' ] }