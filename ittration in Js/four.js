const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby', 
    swift : 'swift by apple'
}

// for (const js in myObject) {
//     if (myObject.hasOwnProperty.call(myObject, js)) {
//         const element = myObject[js];
//         console.log(element);
//     }
// }

// for (const js of myObject) {
//     console.log(myObject);
// }

const programming = ["js" , "rb", "py", "java", "cpp"]
for(const key in programming){
    //console.log(programming[key]);
}

//************* FOR EACH LOOP*************** */

const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item)=>{
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)


// coding.forEach( (item, index, arr)=> {
//     console.log(item , index, arr);
// })

const mycoding = [{
        languageName : "javascript",
        languageFileName : "js"
    },
     {   languageName : "java",
        languageFileName : "java"
    },
     {   languageName : "python",
        languageFileName : "py"
    },
]
mycoding.forEach( (item)=> {

    console.log(item.languageName)
})
    