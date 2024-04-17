//obj singleton

// const tinderuser = new object()

const tinderuser = {} 

 tinderuser.id = "123dsu"
 tinderuser.name = "samay"
 tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularuser = {
    email : "samay@864",
    fullname : {
        userfullname: {
            firstname : "Vikalp",
            lastname : "Pandey"
        }
    }
}
// console.log(regularuser.fullname.userfullname.lastname );

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1 , obj2 )

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// ...... 



const course = {
    coursename : "js in hindi",
    price: "999",
    courseinstructer : "hitesh"
}
// course.courseinstructer
const {courseinstructer : instructer} = course
console.log(instructer);


 