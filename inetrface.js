var Car = (function () {
    function Car() {
        console.log('inside the vehicle constructor');
    }
    Car.prototype.drive = function (speed) {
        console.log('driving ' + speed + ' miles per hour');
    };
    Car.prototype.getPos = function (pos) {
        console.log('Position of the car' + pos);
    };
    return Car;
}());
function driveFast(car) {
    car.drive(100);
}
function carPos(pos) {
    pos.getPos(5);
}
var raceCar = new Car();
var carpos = new Car();
driveFast(raceCar);
carPos(carpos);
