/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

//Este es mi comentario en una línea

// 2. Escribe un comentario en varias líneas

/*
Este es un comentario en varias lineas
Es igual que CSS
por fin estoy aprendiendo JS yujuuu!
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
// 4. Imprime por consola el valor de todas las variables


//string
let name = 'Nieve Maria'

//number
let edad = 27 //integer
let precio = 1.50 //decimal

//boolean
let isNikki = name == 'Nikki'

//undefined

let diosExiste

//null
let misIphones = null

//symbol
let studentID = Symbol('StudentID')

//bigint
let googol = BigInt(10**100)


console.log(name, edad, precio, isNikki, diosExiste, misIphones, studentID, googol)


// 5. Imprime por consola el tipo de todas las variables

console.log(typeof name, typeof edad, typeof precio, typeof isNikki, typeof diosExiste, typeof misIphones, typeof studentID, typeof googol)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

isNikki =  2+3 >=5
googol = BigInt(11*100)

console.log(isNikki, googol)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

edad = '245'
console.log(edad)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const apellido = 'Benites'
const cachorros = 2
const isWoman = true
const nirvanaExists = undefined
const vacio = null
const card = Symbol(apellido)
const astroNumer = 1010232323n

// 9. A continuación, modifica los valores de las constantes

// apellido = 'Segura'

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse