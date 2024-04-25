// const discriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(discriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const chai = { 
    name : 'ginger chai',
    price : 250,
    isavailable : true,

    function(){
        console.log("gayi chai");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, 'name',{
    // writable : false,
    // enumerable : false,
    enumerable : true,
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));


// for (let [key, value] of chai) {
//     console.log(`${key} : ${value}`);
// }

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
    
}