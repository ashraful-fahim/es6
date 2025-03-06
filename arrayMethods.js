const products = [
    {id: 1, name: 'iPhone', color: 'black', price: 12000, brand: 'apple'},
    {id: 2, name: 'xiaomi', color: 'gold', price: 10000, brand: 'xiaomi'},
    {id: 3, name: 'samsung', color: 'gold', price: 15000, brand: 'sam'},
    {id: 4, name: 'iPhone', color: 'gold', price: 10000, brand: 'apple'},
    {id: 5, name: 'redmi', color: 'black', price: 11000, brand: 'xiaomi'}
]

//forEach methods never returns anything
//it assigns a function for each of the element in an array
products.forEach(product =>{
    if(product.color === 'gold'){
        console.log(product);
    }
})
