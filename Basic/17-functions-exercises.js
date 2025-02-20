/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function sum(a =0,b =0){
    return a+b
}

let result = sum(2,34)
console.log(`Result sum: ${result}`)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let array = [2,3,6,20,7,34,33]

function mayor(array){
    let mayornum
    for (let e = 1; e < array.length; e++){
        if (array[e]>array[e-1]){
            mayornum = array[e]
        }
    }
    return mayornum
}

console.log(`El mayor es: ${mayor(array)}`)

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene


let texttest = 'You are the most beautiful'

function vowelCounter(text){
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

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let stringArray = ['banana', 'apple', 'dragonfruit','coconut','pineapple']

function mayusConvert(textArray){
    let mayusArray = new Array()
    for (let value of textArray){
        mayusArray.push(value.toUpperCase())
    }
    return mayusArray
}

let newArray = mayusConvert(stringArray)
console.log("Upper Case array: ", newArray)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

const testNumber = 7

function isPrime(number){
    let result = ''
    let factors = new Set()
    for (let factor = 1; factor<= number; factor++){
        if (number%factor == 0){
            factors.add(factor)
        }
    }
    if ((factors.has(1)) && (factors.has(number) && (factors.size == 2))){
        result = `${number} is a prime number`
        return result
    } else {
        result = `${number} is not a prime number`
        return result
    }
}

console.log(isPrime(testNumber))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let array1 = [2,3,1,5,6,7,8,9,10]
let array2 = [2,4,6,8,10,12,14,16]

let commonElements = function commonElementsfinder(array1, array2){
    const set1 = new Set (array1)
    const set2 = new Set(array2)
    let commonarray = []
    set1.forEach(function (value){
        if (set2.has(value)){
            commonarray.push(value)
        }
    })
    return commonarray
}

console.log(commonElements(array1, array2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
let totalSum = 0

let evenNumberSum = function evenSumCalculator(numberArray){
    numberArray.forEach(function (value){
        if (value%2 ==0){
            totalSum+=value
        }
    })
    return totalSum
}

console.log(`Even numbers sum for array: ${evenNumberSum(array1)}`)

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function squared (numberArray){
    let squaredArray = []
    for (let value of numberArray){
        squaredArray.push(value**2)
    }
    return squaredArray
}

console.log(squared(array2))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

const nombre = 'Karen'

function textInverter(text){
    let counter = text.length
    let invertedString = ""
    while(counter>0){
        invertedString +=text[counter-1]
        counter--
    }
    return invertedString
}

console.log(textInverter(nombre))

// 10. Crea una función que calcule el factorial de un número dado

function factorialNumber(number){
    let result = 1
    for (let factor =1; factor<=number; factor++){
        result*=factor
    }
    return result
}

console.log(factorialNumber(4))