/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// __________________________No spread operator
let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(4);
console.log('second array', arr2)
console.log('first array', arr1)

// ___________________________Copying an array
let arr3 = [4,5,6];
let arr4 = [...arr3];

arr4.push(7);
console.log('forth array', arr4)
console.log('third array', arr3)

// _________________________Copying an object

let obj1 = {a:1,b:2,c:3}
let obj2 = {...obj1, d:4}
let obj3 = {...obj1, b:5} //change/overwriting value on obj in new obj from 2 => 5

console.log('first object:', obj1)
console.log('second object:', obj2)
console.log('third object:', obj3)

// _____________________Copying only part of an array/object
let arr5 = [...arr1, {...obj2, ...arr3}, 'x','y','z'];
console.log(arr5)



/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// _________________________Regular function call 
const sumAll = (a,b,c ) => a +b +c ;
let sum = sumAll(1,2,3);
console.log('Sum:',sum)

// ______________________Extra arguments are ignored
let sum2 = sumAll(1,2,3,4,5,6);
console.log('sum2 :', sum2)


// ______________________Function using ...rest

const sumRest = (a, b, ...rest) => {
    let sum = a + b;
    for(let i of rest) {
        sum += i
    }
    return sum
}
let sum3 = sumRest (1,2,3,4,5,6);
console.log('sum:', sum3)

/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// ________________________Destructuring arrays
let ages = [30,26,27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages
console.log(john, mary, joe)

// ________________________Destructuring objects
let jobs = {
    mike: 'designer',
    jill: 'developer',
    alicia: 'accountant'
};
let {mike, jill, alicia} = jobs
console.log(mike,jill,alicia)

// _________________________Destructuring subsets
let languages = ['english', 'french', 'spanish', 'german', 'japanese'];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary)

let [,, maryNative, marySecondary, maryThird] = languages
console.log(maryNative, marySecondary, maryThird)

let languages2 = {
    firstlang: 'english',
    seclang: 'french',
    thirdlang: 'swedish',
    fourthlang:'italian'
}
let {firstlang, thirdlang} = languages2
console.log(firstlang, thirdlang)


// ___________________________Using rest parameter syntax

let fruits = ['apple', 'orange', 'banana', 'peach', 'cherry']
let [favorite, secondfavorite, ...others] = fruits
console.log(favorite)
console.log(secondfavorite)
console.log(others)


let favoriteFoods = {
    brian: 'pizza',
    frank: 'spaghetti',
    sarah: ' lasagne',
    andy: 'fish'
}
let {brian, frank, ...rest} = favoriteFoods;
console.log(brian)
console.log(frank)
console.log(rest)
