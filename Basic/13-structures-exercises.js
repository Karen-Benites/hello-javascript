/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animals = ['dog', 'cat', 'bird', 'rabbit', 'koe fish']
console.log(`My animals: ${animals}`)

// 2. Añade dos más. Uno al principio y otro al final

animals.unshift('parrot')
animals.push('seagull')
console.log('Updated animals:', animals)

// 3. Elimina el que se encuentra en tercera posición

animals.splice(2,2) //delets only the 3rd element.
console.log('Animals update 2 (delete): ', animals)

// 4. Crea un set que almacene cinco libros
let books = new Set(["Don't make me think", "Steal like an artist", 
    "Kepp going", "También es posible para ti", "Socilogia para mentes curiosas"])
console.log('My books: ', books)

// 5. Añade dos más. Uno de ellos repetido
books.add('Learning Git and Github')
books.add('Learning Git and Github')
books.add('Aprende React')
console.log('Books updated: ', books)


// 6. Elimina uno concreto a tu elección
let variable = books.delete('Steal like an artist')? 'yes':'no'
console.log(`Could delete the book?: ${variable}`)
console.log('updated set: ', books)

// 7. Crea un mapa que asocie el número del mes a su nombre
let months = new Map([[1, 'January'], [2, 'February'], [3, 'March'],
                    [4, 'April'], [5, 'May'], [6, 'June'],
                    [7, 'July'], [8, 'August'], [9, 'September'],
                    [10, 'October'], [11, 'November'], [12, 'December']])
console.log(months)


// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
let monthNumber = 5
let monthExists = months.has(monthNumber)? 'yes':'no'
let month = months.get(monthNumber)
console.log(`Does month ${monthNumber} exist?: ${monthExists}`)

if (monthExists == 'yes'){
    console.log(`The month is: ${month}`)
} else {
    console.log(`Month ${monthNumber} does not exist, please verify`)
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
months.set('Summer months', ['January', 'February', 'March'])
console.log(months)


// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myValues = ['work-life balance', 'passion', 'honesty', 'justice']
console.log('My values array: ', myValues)
let myValuesSet = new Set(myValues) 
console.log('My values set: ', myValuesSet)

let aboutMe = new Map([['name', 'Karen'], ['Profession', 'Frontend Dev']])
aboutMe.set('My values', myValuesSet)
console.log('About me: ', aboutMe)