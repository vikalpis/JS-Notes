//Array 


const myArray = [0,1,2,3,4]
const myHeros = ["shaltiman","naagraj"]
const myArr = new Array(1,2,3,4)

console.log(myArray[1]);

//Array Methodes 


// myArr.push(4)
// myArr.push(6)
// myArr.pop()

// myArr.unshift(8)
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr)

// console.log(typeof newArr);


//*****slice , splice */

console.log("a", myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B" , myArr);

const myn2 =myArr.splice(1,3);
console.log("C", myArr);
console.log(myn2);



