const accountId =23864;
let accountEmail= "hiryf@gmail.com";
var accountPassword = "1623";
accountCity = "jaipur";
 let accountState;

// accountId =2  not  allowed
accountEmail = "hc@gmail.com"
accountPassword = "5734"
accountCity = "begluru"
console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
