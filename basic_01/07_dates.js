// Dates 
// console.log(typeof Date())


const myDate = new Date()

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toUTCString())

// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toLocaleTimeString().replace('am', ''))


// let myCreatedDate = new Date(2024, 1, 29, 5, 4)  
// let myCreatedDate = new Date(2023-11-1)
let myCreatedDate = new Date("7-24-2023")
//console.log(myCreatedDate.toString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

// console.log(newDate)
// console.log(newDate.getMonth()+1)
// console.log(newDate.getDay())
// console.log(newDate.getTime())

// console.log(`Now time is ${newDate.getTime()} and date is ${newDate.getDate()}`)


newDate.toLocaleString('default', {
    weekday : "short"
})

console.log(newDate)