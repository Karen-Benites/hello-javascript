/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let frutas = ['apple', 'coconut', 'peach']
let [fruit1,,fruit2] = frutas
console.log(fruit1, fruit2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let subjects = ['FP', 'Calculus', 'physics I', 'Biology']

let [subject1, subject2, subject3, subject4 = 'algebra', subject5 = 'gym'] = subjects
console.log(subject1, subject2, subject3, subject4, subject5)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let person = {
    firstName: 'Karen',
    lastName: 'Benites',
    age: 27,
    isMarried: true,
    petsName: 'Nikki',
    gender: 'woman',
    family:{
        father: 'Marcos',
        mother: 'Nancy'
    }
}

let{firstName, lastName}= person
console.log(firstName, lastName)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let{firstName: nombre, lastName: apellido}=person
console.log(nombre, apellido)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let{family: {father:padre}, family: {mother:madre}} = person
console.log(padre, madre)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let words = [...frutas, ...subjects]
console.log(words)

// 7. Usa propagación para crear una copia de un array
let fruits = [...frutas]
console.log(fruits)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let frontend = {
    styles: 'css',
    structure: 'html',
    interactivity: 'JS'
}

let backend = {
    database: 'MySQL',
    deploy: 'Azure'
}

let fullstack = {...frontend, ...backend}
console.log(fullstack)

// 9. Usa propagación para crear una copia de un objeto
let karensSister = {...person}
console.log(karensSister)

// 10. Combina desestructuración y propagación
let daysOfWeek = new Map([
    [1, 'Monday'],
    [2, 'Tuesday'],
    [3, 'Wednesday'],
    [4, 'Thursday'],
    [5, 'Friday']
])

let daysNumber = [...daysOfWeek.values()]
let [day1, day2, , , day5]=daysNumber
console.log(day1)
console.log(day2)
console.log(day5)