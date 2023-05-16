// var nameOfDog;  // undefined
// console.log(nameOfDog);

// var nameOfDog = 'Elmo';
// console.log(nameOfDog);

// var elmo  // undefined
nameOfDog();

function nameOfDog() {
    console.log(`El perrito es ${elmo}`);
}

var elmo = 'Elmo';


var a = "Hello!";  // global scope

function hello(){
    let b = "Hello World!";  // local scope
    const c = "Hello World!";  // local scope
    debugger;
}
hello();
