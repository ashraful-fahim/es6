const products = [
    {id: 1, name: 'iPhone', color: 'black', price: 12000, brand: 'apple'},
    {id: 2, name: 'xiaomi', color: 'gold', price: 10000, brand: 'xiaomi'},
    {id: 3, name: 'samsung', color: 'gold', price: 15000, brand: 'sam'},
    {id: 4, name: 'iPhone', color: 'gold', price: 10000, brand: 'apple'},
    {id: 5, name: 'redmi', color: 'black', price: 11000, brand: 'xiaomi'}
]

//increase the price of apple brand by 1000 and then return 
const newProducts = products.map(product => {
    if (product.brand === 'apple'){
        product.price = product.price + 1000;
    }
    return product;
})
console.log(newProducts)

//search for the products which has the price greater than 10k
const newProducts2 = products.find(product => {
    if (product.price > 10000){
        return product;
    }
})

console.log(newProducts2); //from the O/P, it returns only the first element in an object


//search for the products which has the price greater than 10k
const newProducts3 = products.filter(pro => {
    if (pro.price > 10000){
        return pro;
    }
})
console.log(newProducts3); //from the O/P, returns all the elements meeting the condition in an array