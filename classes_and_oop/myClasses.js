// ES6 

// class User {
//     constructor(username , email, password ){
//         this.username = username ;
//         this.email = email ;
//         this.password = password ;
//     }

//     encryptpassword(){
//         return `${this.password}abc`
//     }
//     changeusername(){
//         return`${this.username.toUpperCase()}`
//     }
// }

// const chai  = new User("chaai", "chai@gmail", "2536")
// console.log(chai.encryptpassword());


// behind the scene

function User(username,email,password){
    this.username = username ;
    this.email = email ;
    this.password = password ;
}

User.prototype.encryptpassword = function(){
    return `${this.password}abc`

}
User.prototype.changeusername = function(){
    return`${this.username.toUpperCase()}`
}

const TEA  = new User("TEA", "TEA@gmail", "2536")
console.log(TEA.encryptpassword());