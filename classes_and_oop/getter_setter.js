class user {
    constructor(email, password){
       this.email = email 
       this.password = password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
       this._password = value
    }
    get email(){
        return this._email.toUpperCase()
    }

    set email (value){
        this._email = value
    }
}


const hello = new user ("hello@.ai", "1234")
console.log(hello.email);
console.log(hello.password);

