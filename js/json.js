// console.log("Hello World");

const myData = {
    name: "Galib",
    roll: 12,
    address: "Khulna",
    isLoveSadia: true
}

const myDataJSON = JSON.stringify(myData);
console.log(myDataJSON);

const myActualData = JSON.parse(myDataJSON);
console.log(myActualData);


