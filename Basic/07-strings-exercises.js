/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let name1 = "Kelvin"
let name2 = "Karen"

console.log(`${name1} y ${name2} se aman mucho`)

// 2. Muestra la longitud de una cadena de texto
console.log(`longitud de cadena de texto Kelvin: ${name1.length}`)

// 3. Muestra el primer y último carácter de un string
console.log(`Primer caracter de ${name1}:  ${name1[0]}, ultimo caracter: ${[name1[name1.length -1]]}`)

// 4. Convierte a mayúsculas y minúsculas un string
console.log(`Mayusculas ${name1.toUpperCase()}, minusculas: ${name1.toLocaleLowerCase()}`)

// 5. Crea una cadena de texto en varias líneas

let message = `I wish I could live
in Cuenca Ecuador, 
because I can't live in Guayaquil anymore
this city is collapsing because of
crime and drugs
I feel sad for my city
but I want to run away from it`

console.log(message)

// 6. Interpola el valor de una variable en un string

console.log(message.replace('sad', 'upset'))

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let message2 = 'You are the most beautiful, the way you are'

console.log(message2.replace(' ', '-'))

console.log(message2.replaceAll(' ', '-'))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(message.includes('lonely'))

// 9. Comprueba si dos strings son iguales
console.log(name1 === name2)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(`name 1 length: ${name1.length}, name 2 length: ${name2.length}`)
let message3 = name1.length == name2.length? 'Si':'No'
console.log(`Son iguales?: ${message3}`)
