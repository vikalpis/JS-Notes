class User {
    constructor(username){
        this.username = username;
    }

    Logme(){
        console.log(`Username : ${this.username}`);
    }

   static createId(){
        return `1324`
    }
}

const hii = new User("hiii");
console.log(hii.createId());

