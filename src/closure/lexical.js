// Ambito lexico significa la accecibilidad de las
// variables esta determinada por la pocision de la misma

const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);

    function parent(){ //Funcion interna o closure
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child(){ 
            console.log(inner, myNumber, myGlobal);
        }
        return child();
    }
    return parent();
}

myFunction();


export function sumWithClosure(firstNum) {
    const a = firstNum;
    function seccond(segundo=3) {
      return firstNum + segundo;
    }
    return seccond;
  }
  
  sumWithClosure(2);