/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// import { name } from "./28-export-modules"

// 1. Crea un función que utilice error correctamente

let numbers = [1,2,'3',4,'',65]

for (let value of numbers){
    try{
        if (typeof value == 'string' && value.length == 0){
            throw new Error('No se puede convertir a float una cadena vacia')
        }
        console.log(parseFloat(value))
    } catch(error){
        console.error('Se ha producido un error: ', error.message)
    }
}

// 2. Crea una función que utilice warn correctamente
// 3. Crea una función que utilice info correctamente

function rainProbability(probability){
    if (probability<0 || probability>1){
        throw new Error('Impossible probability numbers, try again')
    }else if (probability>=0.7){
        console.warn(`Be careful, it is very likely to rain`)
    } else if (probability>=0.4 && probability<0.7){
        console.warn(`It is likely to rain, keep your umbrella ready just in case`)
    } else if(probability<0.4){
        console.info('Hope you can get out for a while, chances of rain are low')
    } 
}

try{
    rainProbability(0.5)
}catch(error){
    console.error(`Opps, an error here: `, error.message)
}

// 4. Utiliza table
let students = [
    {Fullname: 'Angie Andrea Aranha Andrade', code: 6937, age: 19},
    {Fullname: 'Marjorie Lusitania Franco Litardo', code: 6674, age: 39},
    {Fullname: 'Deysi Rocio Sierra Mesa', code: 6949, age: 23}
]

console.table(students)

const person = {
    name: 'Miguel',
    twitter: 'midudev',
    frontend: true
}

console.table(person)

// 5. Utiliza group
// 6. Utiliza time

console.time('Contador')

console.group("Camino para ser frontend dev")
console.groupCollapsed("Fundamentos")
console.log("Como funciona la web")
console.groupEnd()
console.groupCollapsed('HTML')
console.log('etiquetas simples')
console.log('etiquetas modernas')
console.groupEnd()
console.groupCollapsed('CSS')
console.log('Tipos de selectores')
console.log('Modelo de caja')
console.log('Layout con grid y flexbox')
console.log('Positions')
console.log('Medidas en CSS')
console.log('Colores y tipografia')
console.log('Arquitecturas CSS')
console.log('Frameworks CSS')
console.groupEnd()
console.groupCollapsed('Fundamentos de Javascript')
console.log('Datos primitivos')
console.log('Estructuras de datos')
console.log('Estructuras de control y manejo de errores')
console.log('POO')
console.log('Programacion funcional')
console.log('manejo de DOM')
console.groupEnd()
console.groupEnd()

console.timeEnd('Contador')

// 7. Valida con assert si un número es positivo

let texttest = 'You are the most beautiful'

function vowelCounter(text){
    console.assert((typeof text === 'string', 'El argumento debe ser un texto'))
    let vowelCount = 0
    let vowels = new Set(['a','e','i','o','u'])
    for (let i = 0; i<text.length; i++){
        if (vowels.has(text[i].toLowerCase())){
            vowelCount++
        }
    }
    return vowelCount
}

console.log(vowelCounter(texttest))

console.log(vowelCounter(2345))

let number = -1

console.assert(number>=0, 'El numero debe ser positivo')

// 8. Utiliza count
console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// 9. Utiliza trace

// 10. Utiliza clear
console.clear()
console.trace('Seguimiento del clear')
console.log('output cleared')

//https://dev.to/juniourrau/supercharge-your-debugging-skills-with-the-consoletrace-425p