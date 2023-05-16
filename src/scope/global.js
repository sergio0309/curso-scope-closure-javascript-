// variables

var a; // declarando
var b= 'b'; // declarando / asignando
b= 'bb'; // reasignacion
var a = 'aa'; // redeclaracion

// global scope
var fruit = "Apple";    // Global
console.log(fruit);
function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = "Colombia"; //global
    console.log(country);
}

countries();
console.log(country);