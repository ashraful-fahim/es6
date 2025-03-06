class Vehicle{

    constructor(name,brand,price,color){
        this.name = name;
        this.price = price;
        this.brandName = brand;
        this.color = color;
    }

    details(){
        console.log(`This ${this.name} costs $${this.price}.`)
    }
}

const toyota = new Vehicle('Corola', 'Toyota', 12000, 'White');
console.log(toyota);
toyota.details();


const ford = new Vehicle('Mustang', 'Ford', 15000, 'Green');
console.log(ford);
ford.details();