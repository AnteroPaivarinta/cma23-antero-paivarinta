const objectArray = [ { x: 14, y: 21, type: "tree", toDelete: false },
                      { x: 1, y: 30, type: "house", toDelete: false },
                      { x: 22, y: 10, type: "tree", toDelete: true },
                      { x: 5, y: 34, type: "rock", toDelete: true },
                      null,
                      { x: 19, y: 40, type: "tree", toDelete: false },
                      { x: 35, y: 35, type: "house", toDelete: false },
                      { x: 19, y: 40, type: "tree", toDelete: true },
                      { x: 24, y: 31, type: "rock", toDelete: false } ];

const copy = objectArray;
//A)

for (let i = 0 ; i < objectArray.length; i++) {
    if( objectArray[i]?.toDelete === true){
        objectArray[i] = null;
    }
}
console.log('ObjectArray', objectArray);


//B)


const newA:any[] = copy.map((value) => value?.toDelete === true ? null : value);
console.log('B', newA)


//C)
// Muistin kannalta ensimmäinen on parempi, koska silloin ei tehdä kopiota objektista, jossa tietomäärä on iso, vaan muokataan nykyistä

