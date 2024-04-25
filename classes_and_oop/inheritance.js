class User {
    constructor(username){
        this.username = username
    }

    Logme(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
       super(username)
        this.email =email ;
        this.password = password;
    }

    addCourses(){
        console.log(`A new courses was added by ${this.username}`);
    }
}

const chai = new Teacher("chai" , "chai@email", "4778");
chai.addCourses();

const Tea = new User ("tea");
Tea.Logme();

console.log(chai===Tea);
console.log(chai===Teacher);
console.log(chai instanceof Teacher);

