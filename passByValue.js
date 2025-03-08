function changeNumber(num) {
    num = num + 10;
    console.log('Inside the function:', num);
}

const myNumber = 10;
changeNumber(myNumber);
console.log('Outside the function:', myNumber); /*output: 10; Actual value is unchanged even after calling it by the function.
This is known as pass by value or a copy of the original data is passed on to the function.*/