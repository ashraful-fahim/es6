const numbers = [1,2,3,4,5,6];

// map always returns an array
// it returns implicitly without declaring single 

const newArray = numbers.map(value => value + 1);
console.log(newArray);




// it needs to be used a return function while using multiple lines 
const num = [1,2,3,4,5,6];
const squareArray = num.map(element => {
    const square = element * element;
    return square;
})

console.log(squareArray);


const friends = ['rahim', 'karim', 'rafiq'];
const friendsNum = friends.map((element, index) => {
    console.log(index);
    console.log(element);
})
console.log(friendsNum);