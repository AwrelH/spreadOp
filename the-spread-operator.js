/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(4);
console.log('second array', arr2)
console.log('first array', arr1)

// Copying an array
let arr3 = [4,5,6];
let arr4 = [...arr3];

arr4.push(7);
console.log('forth array', arr4)
console.log('third array', arr3)

// Copying an object

let obj1 = {a:1,b:2,c:3}
let obj2 = {...obj1, d:4}
let obj3 = {...obj1, b:5} //change/overwriting value on obj in new obj from 2 => 5

console.log('first object:', obj1)
console.log('second object:', obj2)
console.log('third object:', obj3)

// Copying only part of an array/object
let arr5 = [...arr1, {...obj2, ...arr3}, 'x','y','z'];
console.log(arr5)



/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 
const sumAll = (a,b,c ) => a +b +c ;
let sum = sumAll(1,2,3);
console.log('Sum:',sum)

// Extra arguments are ignored
let sum2 = sumAll(1,2,3,4,5,6);
console.log('sum2 :', sum2)


// Function using ...rest

const sumRest = (a, b, ...rest) => {
    let sum = a + b;
    for(let i of rest) {
        sum += i
    }
    return sum
}
let sum3 = sumRest (1,2,3,4,5,6);
console.log('sum:', sum3)