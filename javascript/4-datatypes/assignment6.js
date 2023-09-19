const book1 = {
    name : 'Dune',
    pageCount : 412,
    read: false
}

const book2 = {
    name : 'The Eye of the World',
    pageCount : 782,
    read: false
}
console.log(book1, book2)
book2.read = true;
book1.read = true;
console.log(book1, book2)

 // EXTRA
const array = [{
    name : 'The Eye of the World',
    pageCount : 782,
    read: false
}, {
    name : 'Dune',
    pageCount : 412,
    read: false
}]


array[0].read = true;
array[1].read = false;
console.log(array[0], array[1])