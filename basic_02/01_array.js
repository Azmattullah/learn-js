// array 

const myArr = ["Azmattullah", "Azmat", 2,"Rohan", 3, "Rittik"]

// console.log(myArr[0] == myArr[1])

// console.log(myArr)
// console.log(typeof myArr)
// console.log(myArr[1])

const fruits = ["banana", "apple", "peach", "mango", "Guava"];


// fruits.push(6)
// console.log(fruits)
// fruits.length = 2
// console.log(fruits.length)
// console.log(fruits[8])
// console.log(Object.keys(fruits))
// fruits.push("banana", "apple", "peach", "mango", "Guava");
// console.log(fruits[4])
//console.log(fruits.length)
// console.log(fruits)

// ----------Array Methods----------
const myarr = new Array(1,2,3,4,5)

const newarr = myarr.join()

// console.log(myarr)
// console.log(newarr)

// myarr.unshift(789)
// myarr.shift()
// console.log(myarr.includes(6))
// console.log(myarr.indexOf(50))

// myarr.push(6, 8, 9)
// myarr.push(7)
// myarr.push(8)
// myarr.pop()
// myarr.pop()
// console.log(myarr)

// ----------------slice OR splice---------------

const arr2 = ["A", "Z", "M", "A", "T"]

console.log("A ", arr2)

const myn1 = arr2.slice(1,4)

console.log(myn1)
console.log("B ", arr2)


const myn2 = arr2.splice(1,4)
console.log("C ", arr2)
console.log(myn2)

