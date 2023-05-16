// function moneyBOx(coins){
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`); 
// }

// moneyBOx(5);
// moneyBOx(10);

function moneyBox(){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`); 
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);


const myMoneyBoxAna = moneyBox();
myMoneyBoxAna(5);
myMoneyBoxAna(5);
myMoneyBoxAna(15);


function createPetList() {
    const petList = [];
    function add(petLists){
        if(petLists != undefined){
            petList.push(petLists);
            console.log(`PetList: ${petList}`);
        }
    }
    return add;
}
  
const myPetList = createPetList();

myPetList("michi");

myPetList("firulais");

myPetList();

function createPetList() {
    const petList = [];
    function add(myPet) {
      if (myPet) {
        petList.push(myPet);
        console.log(`PetList: ${petList}`);
        return petList;
      }
      return petList;
    }
    return add;
}
  
  const myPetLis = createPetList();
  
  myPetLis("michi");
  
  myPetLis("firulais");
  
  myPetLis();