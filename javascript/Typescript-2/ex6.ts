import { get } from "http";

interface book {
    author: string;
    title: string;
    readingStatus: boolean;
    id: number
}


const library:book[] = [ 
    {
        author: 'David Wallace',
        title:  'Infinite Jest',
        readingStatus: false,
        id: 1,
    },
    {
        author: 'Douglas Hofstadter',
        title:  'Gödel, Escher, Bach',
        readingStatus: true,
        id: 2,
    },
    {
        author: 'Harper Lee',
        title:  'To Kill A Mockingbird', 
        readingStatus: false,
        id: 3,
    },
 ];
 


function getBook(id: number)  {
    return library.find((value: book) => value.id === id)
}
function printBookData(id: number)  {
    console.log(getBook(id))
}
function printReadingStatus(author: string, title: string){
    console.log(library.find((value: book) => value.title === title)?.readingStatus)
}
function addNewBook(author: string, title: string){
    library.push({author: author, title: title, readingStatus: false, id: 9})
}
function readBook(id: number) {
    printBookData(id)
}
