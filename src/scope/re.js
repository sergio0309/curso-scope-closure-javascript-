var firsName; //Declara variable (undifine)
firsName = "Oscar"; //Asigna valor a variable
console.log(`Hola ${firsName}`);

var lastName = "David";      //Asignando y declaranco variable
console.log(`Hola ${lastName}`);
lastName = "Ana";            //Reasignando valor a variable
console.log(`Hola ${lastName}`);

var secondName = "David";
var secondName = "Ana";     //Reasignando y redeclaracno variable
console.log(`Hola ${secondName}`);

//Solo se puede reasignar
let fruit = "apple";
fruit = "kiwi";     //Reasignando valor
console.log(fruit);
// let fruit = "banana";

//No se puede reasignar ni redeclarar
const animal = "dog"; //Declarando y asignando valor
// animal = "cat";     //Reasignando valor
// const animal = "cat"
console.log(animal);

const vehicles = ["Ferrari","Lamborghini","Porsche"];

vehicles.push("Bugatti")

console.log(vehicles);

const prueba = vehicles.pop()

console.log(vehicles);

console.log(prueba);