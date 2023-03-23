import Car from "./10-car.js";

class TestCar extends Car {}

const tc1 = new TestCar("Nissan", "Turbo", "Pink");
const tc2 = tc1.cloneCar();
const tc3 = tc1.cloneCar("Toyota", "Camry", "Black");

console.log(tc1);
console.log(tc1 instanceof TestCar);

console.log(tc2);
console.log(tc2 instanceof TestCar);

console.log(tc3);
console.log(tc3 instanceof TestCar);

console.log(tc1 == tc2);
