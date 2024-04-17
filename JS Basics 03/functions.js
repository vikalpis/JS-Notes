function sayMyName(){
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")
    
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//    console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
   // let result = number1 + number2
   // return result // return ke baad likha code unreachable hota hai means excute nhi kr skte hain.
    
   return number1 + number2;

}

const result = addTwoNumbers(4, 6)
// console.log("result : " , result);


function loginuserMessage (username = "sam"){
    if(!username){
        console.log("please enter a username")
        return

    }
    return `${username} just logged in`
}
// console.log(loginuserMessage("vikalp")); 
console.log(loginuserMessage("vikalp")); 
