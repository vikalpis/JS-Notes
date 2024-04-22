const promiseOne = new Promise(function(resolve,reject){
    //DO an async task
    // DB calls, cryptography, network 
    setTimeout(function(){
        console.log("async task is completed");
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

//or

new Promise(function(resolve, reject){
   setTimeout(function(){
    console.log("async task 2");
    resolve();
   })
}).then(()=>{
    console.log("async 2 resolved ");
})

//3rd

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(function(){
        resolve({username : "vikalp", email : "vk@example.com"})
    }, 1000)
})
promiseThree.then((user)=>{
    console.log(user);
})

//4th

const promiseFour = new  Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false;
        if (!error){
            resolve({username : "vista", email : "vista@example.com"})
        }
        else{
            reject('ERROR : Somthing Went Wrong!')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})


// 5th

const promiseFive = new Promise ((resolve, reject )=>{
    setTimeout(()=>{
        let error = true;
        if (!error){
            resolve({username : "javascript", email : "js@example.com"})
        }
        else{
            reject('ERROR : Js Went Wrong!')
        }
    },1000)
})

async function consumepromiseFive(){
  try {
    const response =  await promiseFive
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumepromiseFive();

//***** */

// async function getAllusers(){
//     try {
//         const response = await fetch('https://api.github.com/users/vikalpis')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E : ", error);
//     }
// }getAllusers();

fetch('https://api.github.com/users/vikalpis')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})