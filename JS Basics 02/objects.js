// sigleton 

// object literals

// Object.create 

const mysym =  Symbol("key1")


const jsuser = {
    name: "vikalp",
    "full name": "Vikalp Pandey",
    [mysym] : "mykey1",
    age: 18,
    location : "rewa",
    email : "vikalp476@gmail.com",
    isLoggedIn : false ,
    lastLogInDays :["monday", "saturday"]

}
// console.log(jsuser.email)
// console.log(jsuser["email"])
// // console.log(jsuser.full name)
// console.log(jsuser["full name"])
// console.log(jsuser[mysym]);

jsuser.email = " hitesh@jep.com"
// Object.freeze(jsuser);
jsuser.eamil = "vikalp698@if"
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello js user");
}
jsuser.greetingtwo = function(){
    console.log(`hello js user , ${this.name}`)
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());
