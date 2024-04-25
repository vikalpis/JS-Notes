// let myName = "vikalp     "

// console.log(myName.truelength);


let myHeros = [ "Thor", "spiderman"]

let heroPower = {
    Thor : "hammer",
    spiderman : "sling",

    getspiderPower: function ( ){
        console.log(`Spidy Power  is ${this.spiderman}`);
    }
}

Object.prototype.vikalp = function(){
    console.log(`vikalp is present is all objects`);
}

Array.prototype.Pvikalp = function(){
    console.log(`vikalp is present in array `);
}

// heroPower.vikalp()
myHeros.vikalp()
myHeros.Pvikalp()
// heroPower.Pvikalp()

// inheritance

const Teacher ={
    makeVideo : true
}
const TeacherSupport ={
    isAVailable : false
}

const TASupport = {
    makeAssignment : 'javascript assignment',
    fullTime : true ,
}

