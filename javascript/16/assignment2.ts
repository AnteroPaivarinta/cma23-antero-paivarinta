import axios from 'axios';

const getFakeStoreProducts = async() => {
    const res =  await axios.get("https://fakestoreapi.com/products")
     return res.data
}


getFakeStoreProducts().then((value) => {
    console.log('VALUE', value.map((ob:any) => ob.title))
})


const addFakeStoreProduct = async(name:string, price:string, description:string, category:string) => {
    await fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    name: name,
                    price: price,
                    description: description,
                    category: category
                }
            )
        })
        .then(res=>res.json())
        .then(json=>console.log(json))
}


const deleteFakeStoreProduct = (id:string) => {
    axios.delete(`https://fakestoreapi.com/products/${id}`)
    .then(response => {
      console.log(`Deleted post with ID ${id}`);
    })
    .catch(error => {
      console.error(error);
    });
}
deleteFakeStoreProduct('1')
addFakeStoreProduct('joo', 'joo', 'joo', 'joo')

