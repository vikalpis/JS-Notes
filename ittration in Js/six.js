const myNumbers = [ 1, 2, 3, ,4 ,5, 6, 7, 8, 9, 10]

//const newNums= myNumbers.map( (num) => {return num+10})

const myNums = myNumbers
    .map(( num ) => num * 10)
    .map((num ) => num + 1)
    .filter( (num) => num >= 40)
    
   
    // .map( ( num ) => )
// console.log(myNums);

const initialvalue = 0 ;
// const sumwithinitial = myNumbers.reduce(function(accumulator, currentvalue) {
//     console.log(`acc : ${accumulator} and curval : ${currentvalue}`);
//     return accumulator + currentvalue} , 0);

const myTotal = myNumbers.reduce( ( a,c) => a+c , 0)
console.log(myTotal);


const shoppingCart =[
    {
        itemName : "js course ",
        price : 4999
    },
    {
        itemName : "python ",
        price :3999
    },
    {
        itemName : "mobile courses ",
        price :10000
    },
    {
        itemName : "data science ",
        price : 12000
    },
]

const pricetopay = shoppingCart.reduce( (acc, item ) => acc + item.price , 0)
console.log(pricetopay);