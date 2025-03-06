class Vehicle {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('The vehicle is moving.');
    }
}

//creating an inheritance:
class Bus extends Vehicle{
    constructor(name, price, seat){
        super(name, price);  //this copies the attributes of it's parent
        this.seat = seat;
    }
    route(){
        console.log('Dhaka to CXB.');
    }
}

const greenLine = new Bus('GreenLine', '15M', 50);
console.log(greenLine);
greenLine.move();