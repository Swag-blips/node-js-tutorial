const buffOne = Buffer.alloc(10);
console.log(buffOne);

const bufferFromString = Buffer.from("Hello");
console.log(bufferFromString);

const buffFromArrayOfintegers = Buffer.from([1, 2, 3, 4, 5]);

console.log(buffFromArrayOfintegers);

buffOne.write("Node js");
console.log(" after writing node js to bufferOne", buffOne.toString());

