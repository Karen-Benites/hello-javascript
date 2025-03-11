/*
Clase 25 - Arrays
Vídeo: https://youtu.be/1glVfFxj8a4?t=8741
*/

// Array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Brais"
// myArray2[0] = "Moure"
myArray2[1] = "mouredev"
myArray2[4] = "mouredev"

console.log(myArray2)

myArray = []
myArray[2] = "Brais"
// myArray[0] = "Moure"
myArray[1] = "mouredev"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop

myArray.push("Brais") // añade un elemento AL FINAL del array y devuelve la longitud del nuevo array
let number = myArray.push("Moure")
console.log(`My length: ${number}`, myArray)
myArray.push("mouredev")
myArray.push(37)

console.log(`Mi array: ${myArray}`)

console.log(myArray.pop()) // Elimina el último elemento y lo devuelve
myArray.pop()

console.log(`My array with pop 2 times:`)
console.log(myArray)

// shift y unshift

console.log(myArray.shift()) //Elimina el primer elemento del array y lo devuelve
console.log(myArray)

myArray.unshift("Brais", "mouredev")//agrega elementos al inicio del array
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice

myArray = ["Brais", "Moure", "mouredev", 37, true]

let myNewArray = myArray.slice(1, 3) //Divide el array empezando en la posicion 1 y terminando en 3-1 = 2. Extrae los elementos desde la posicion inicial hasta la posicion final SIN INCLUIR INDICE

console.log('Reset array: ', myArray)
console.log('New array: ', myNewArray)

// splice

myArray.splice(1, 3) //Elimina elementos desde la posicion inicial hasta la posicion final INCLUIDO
console.log('Updated with splice: ', myArray)

myArray = ["Brais", "Moure", "mouredev", 37, true]

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)