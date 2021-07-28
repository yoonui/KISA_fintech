// array ㅇㅕㄴㅅㅡㅂ

let car = {
    name: "sonata",
    ph: 500,
    start: function () {
        console.log("engine start");
    },
    stop: function () {
        console.log("engine stop");
    },
};

let cars= ["BMW", "FORD", "SAAB", car, 2];

console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[4]);

for (car of cars) {
    console.log(car);
}

cars.map((car) => {
    console.log(car);
})