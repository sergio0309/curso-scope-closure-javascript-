function greeting(){
    let userName = 'John';

    function displayUserName(){
        return `Hola ${userName}`;
    }
    return displayUserName();
}

  const a = greeting();
  console.log(a); 
//   console.log(a());

function greeting() {
    let username = 'Oscar';
  
    function displayUserName() {
      return `Hello ${username}`;
    }
    return displayUserName;
  }
  
  const g = greeting();
  console.log(g); 
//   console.log(g());