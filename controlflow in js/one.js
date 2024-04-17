// if 
const isuserloggedin = true
const temertaure = 41

// if (temertaure === 40 ){

//     console.log("less than 50");
// }
// else{
//     console.log("tempertaure is greater than 40");
// }
// console.log("Execute");

// < , > , <= ,>= , ==, !=, === [check type also], !==


// 

const balance = 1000;
// if(balance>500) console.log("test"), console.log("test2");

// if(balance > 500){
//     console.log('less than');
// }
// else if (balance < 750){
//     console.log("less than 750");
// }
// else if (balance < 900){
//     console.log("less than 900");
// }


const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail =   true
if(userloggedin && debitcard){
    console.log("allow to buy courses");
}

if(loggedinfromgoogle || loggedinfromemail){
    console.log("user logged in");
}