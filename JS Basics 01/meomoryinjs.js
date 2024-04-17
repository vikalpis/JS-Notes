//Primitive 

// 7 types : string , number , boolean , null, undefined, symbol, bigint


const score = 100;
const scorevalue = 100.3;

const isLoggedIn = false ;
const outsideTemp = null;
let useEmail;


const id = Symbol('1234')
const anotherId = Symbol('1234')

// console.log (id ===anotherId)

// const bigNumber = 426194691238469834n  //bigInt

// reference type or nor-primitive 

// array , objects , functions

const heros = ["shaktiman", "naagraj", "doga", "aryan"]

let myobj ={
    name: "vikalp",
    age: 19,
}

const myFunction = function (){
    console.log("hi!");
}

// console.log(typeof heros);


// ***********************************************************



// stack memory (primitive), Heap memory (non-primitive)


let myYoutubeName = "hitesh"

let anotherNmae = "myYoutubeName"

anotherNmae = "vikalp"

console.log(myYoutubeName)
console.log(anotherNmae)

let userOne = {
    email : "vp@gamil.com",
    upi : "vp@ybl",

}
let userTwo = userOne

userTwo.email = "pv@gmail.com"
console.log(userOne);
console.log(userTwo);

