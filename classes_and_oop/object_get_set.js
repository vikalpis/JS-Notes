const user ={
    _email : 'v@vc.com',
    _password : 'cnbv',

    get email (){
        return this._email.toUpperCase()
    },
    set email (value){
        this._email = value
    }
}

const tea = Object.create(user)
console.log(tea.email);

