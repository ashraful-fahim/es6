const person = {
    name: 'kamal',
    age: 34,
    friends: ['Jamal','Toha','Gias'],
    status: true,
}

//Converting it to a json file:
const newPerson = JSON.stringify(person);
console.log(newPerson);


//Reconverting json files to an object again:
const newPerson2 = JSON.parse(newPerson);
console.log(newPerson2);