const person = {
    name: "Max",
    age:29,
    greet (){
        console.log(`Hi I am ${this.name} and I am ${this.age} old`)
    }

}

person.greet();

const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies){
//     console.log(hobby)
// } 
hobbies.push("Programming")
console.log(hobbies.map(hobby => "Hobby: " + hobby));

//understanding the spread operator