const hero = ['sharuk Khan', 'Salman Khan', 'Amir Khan', 'Ajay Devgun', 'Akshay Kumar']
const south_hero = ['Allu Arjun', 'Naga Arjun', 'Rajni Kant', 'chrinjivi', 'Vijay Devakonda']

// Seprate values
const all_new_heros = [...hero, ...south_hero]
// console.log(all_new_heros)

// const hero_concat = hero.concat(south_hero)
// console.log(hero_concat)
// console.log(hero.concat(south_hero))

// hero.push(south_hero)
// console.log(hero[5][3])
// console.log(south_hero)
// console.table([hero, south_hero])

const another_arr = [1,2,3,[4,5,6],7,8,[9,10,11,[12,13,[14]]]]

// const real_arr = another_arr.flat(1)
// console.log(real_arr)

// console.log(Array.isArray(another_arr))

// console.log(Array.isArray("Azmattullah"))
// console.log(Array.from("Azmattullah"))

const text = "Lorem ipsum dolor set amount"

// console.log(text)
// console.log(Array.from(text))
// console.log(Array.from({name: "Azmattullah"})) //Interesting 

let marks01 = 80
let marks02 = 90
let marks03 = 75
let marks04 = 95

console.log(Array.of(marks01,marks02,marks03,marks04,))
