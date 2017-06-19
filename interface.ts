interface Drivable {  
   
    drive(speed: number): void;
    getPos(pos: number): void;
}

class Car implements Drivable {  

    constructor() {
        console.log('inside the vehicle constructor');
    }

    drive(speed: number): void {
        console.log('driving ' + speed + ' miles per hour');
    }

    getPos(pos: number): void{
        console.log('Position of the car' + pos);
    }
}

function driveFast(car: Drivable): void {  
    car.drive(100);
}

function carPos(pos: Drivable): void{
    pos.getPos(5);
}


let raceCar = new Car();  
let carpos = new Car();


driveFast(raceCar);  
carPos(carpos);