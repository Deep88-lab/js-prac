
// object literals
const mySymb= Symbol("key1234")

const userId={
    "name": "Deep Basunia",
    id:1584,
    [mySymb]:"key456",                //mySymb:"key432",
    age: 22,
    location: "Kolkata",
    email:"deepbasunia1234@gmail.com",
    isLogedIn:false,
}
// console.log(userId.name);
// console.log(userId["age"]);
// console.log(userId.mySymb);
//console.log(typeof userId.mySymb);
// console.log(userId[mySymb]);
// console.log(typeof userId[mySymb]);

userId.age=40;
console.log(userId.age);
// Object.freeze(userId)
// userId.name="Basunia124"
// console.log(userId);

userId.greeting= function(){
    console.log("hello user")
}
userId.greeting2= function(){
    console.log(`hello user ${this.name}`)
}

console.log(userId.greeting2());