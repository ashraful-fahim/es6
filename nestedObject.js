const person = {
    name: 'hena',
    age: 30,
    friends: ['rohim', 'korim', 'sagar'],
    details: {
        job: 'yes',
        isMarried: false,
        status: 'not found',
        father: {
            name: 'Abdur Rahman'
        }
    }
}

console.log(person['details']['father']['name']);


/* The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.*/

console.log(person.details.mother?.name);