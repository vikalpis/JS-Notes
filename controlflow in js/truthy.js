const userEmail = "hitesh@gmail.com"

// if(userEmail){
//     console.log("got user email");
// }
// else{
//     console.log("don't have user email");
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// TRUTHY Values
// "0", 'false', " " , [], {}, function(){}, 

// if(userEmail.length === 0){
//     console.log("array is empty");
// }

const emptyobj = {}
if(Object.keys(emptyobj).length === 0){
    console.log("object is empty");
}

// Nullish Coalescing Operator(??) : null, undefined

let vall;
// vall = 5 ?? 10
// vall = null ?? 10
// vall = undefined ?? 15
vall =  null ?? 10 ?? 20

console.log(vall);


// TERNIARY Operator 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
