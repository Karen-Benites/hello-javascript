/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i<=20; i++){
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0

for (let i = 1; i<=100; i++){
    console.log(`${i} + ${suma} = ${suma += i}`)
}

console.log(`Final sum with loop: ${suma}`)

//con while
suma = 0
let i = 1

while(i<=100){
    suma+=i
    i++
}

console.log(`Final sum with while: ${suma}`)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i<=50; i++){
    if (i%2 == 0){
        console.log(i)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let family = ['Kelvin', 'Nikki', 'Nancy', 'Marcos', 'Sebastian', 'Jean']

for (let familymember of family){
    console.log(familymember)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let vowelCount = 0
let text = 'You are the most beautiful'
let vowels = new Set(['a','e','i','o','u'])
i =0

while (i<text.length){
    if (vowels.has(text[i].toLowerCase())){
        vowelCount++
    }
    i++
}
console.log(`my vowel count: ${vowelCount}`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let mynumbers = [4,3,1,2]
let multiplier = 1

for (let number of mynumbers){
    console.log(`${multiplier} * ${number} = ${multiplier*=number}`)
}

console.log(`Final product: ${multiplier}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let a = 1
console.log(`Tabla de multiplicar del 5`)
let mySet = new Set()
while (a<=12){
    mySet.add(a*5)
    a++
}
console.log(mySet)

// 8. Usa un bucle para invertir una cadena de texto
let string = 'IloveMyHusband'
let counter = string.length
let invertedString = ""

while(counter>0){
    invertedString +=string[counter-1]
    counter--
}

console.log(`String: ${string}, inverted string: ${invertedString}`)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fibonacciArray = [0, 1]
let n =2

while (fibonacciArray.length<10){
    fibonacciArray.push(fibonacciArray[n-1] + fibonacciArray[n-2])
    n++
}

console.log(fibonacciArray)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let generalArray = [2,3,4,67,89,10,2,34,0,1,5,6]
let moreThanTenArray = []

for (let number of generalArray){
    if (number > 10){
        moreThanTenArray.push(number)
    }
}

console.log(moreThanTenArray)