function changeName (person) {
    person.name = "Rahim";
    console.log('Inside the function:', person.name);
}

const person = {name: 'Karim'};
changeName(person);
console.log('Outside the function:', person.name); /* The value of the actual object is changed which is called the pass by reference*/