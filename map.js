const numbers = [1,2,3,4,5,6];

// map always returns an array
// it returns implicitly without declaring single 

const newArray = numbers.map(value => value + 1);
console.log(newArray);


const num = [1,2,3,4,5,6];
const squareArray = num.map(element => {
    const square = element * element;
    return square;
})

console.log(squareArray);