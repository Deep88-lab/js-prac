//const instaUser= new Object() single turn object
const instaUser={}  //non-single turn object

instaUser.id="user352"
instaUser.name="Jimmy"
instaUser.isLoggedIn=false

//console.log(instaUser);

const regularUser={
    id:"25544",
    fullName:{
        firstName:"Santosh",
        lastName:"shil"
    },
    email:"santosh@gmail.com"
}

//console.log(regularUser.fullName.firstName);
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
//console.log(obj3);

const arr1=[
    {
        id:1,
        email:"ggmail.com"
    }
]
const arr2=[
    {
        id:1,
        email:"ggmail.com"
    }
]
const arr3=[
    {
        id:1,
        email:"ggmail.com"
    }
]
// arr1[1].email

console.log(instaUser);
console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));
console.log(instaUser.hasOwnProperty('isLogedIn'));