var myName = "max";
var age = 25;
var hasHobbies = true; 

// Javascript function block
function summerizeUser(userName, userAge, userHasHobby){
    return {
        userName, userAge, userHasHobby
    }
}
 console.log(summerizeUser(myName, age, hasHobbies));

//  there are next-gen js es syntax
let newName =  "George";
const newAge = 45;
let newHasHobbies = true;

console.log(summerizeUser(newName, newAge, newHasHobbies));