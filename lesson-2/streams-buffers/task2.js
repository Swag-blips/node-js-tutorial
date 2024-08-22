// create buffer

const buffer = Buffer.from("Hello world");

console.log(buffer);

buffer.write("Hi");

console.log(buffer.toString());
