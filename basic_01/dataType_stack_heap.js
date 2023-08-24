/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

// Stack => uses a premitive data type 

// Heap => uses a non-primitive data type

let userOne = {
       email: "azmat@gmail.com",
       pass: 12345678
}

let userTwo = userOne

userTwo.email = "tullah@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)