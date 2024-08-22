const Eventemmiter = require("events");

class Myemmiter extends Eventemmiter {}

const myEmmiter = new Myemmiter();

function greet(name) {
  console.log(`hello ${name}`);
}

function temperature(type) {
  console.log(`the temperature is ${type} `);
}

myEmmiter.on("greet", greet);

myEmmiter.emit("greet", "swag");
myEmmiter.on("greet", temperature);

myEmmiter.emit("greet", "hot");
