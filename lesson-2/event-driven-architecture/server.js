// import the event module

const Eventemmiter = require("events");

// create a myEmmiter class that extends Eventemmiter
class MyEmmiter extends Eventemmiter {}

// create an instance of the MyEmmiter class
const myEmmiter = new MyEmmiter();

myEmmiter.on("event", () => {
  setImmediate(() => {
    console.log("Handling events asynchronously");
  });
});

myEmmiter.emit("event");

console.log("test code");
