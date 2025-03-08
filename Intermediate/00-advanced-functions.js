/*
Clase 1 - Funciones avanzadas (29/01/2025)
Vídeo: https://www.twitch.tv/videos/2367024319?t=00h08m45s
*/

// Ciudadanos de primera clase

const greet = function (name) {
    console.log(`Hola, ${name}`)
}

greet("Brais")

function processGreeting(greetFunction, name) {
    greetFunction(name)
}

function returnGreeting() {
    return greet //returnGreeting devuelve la FUNCION greet como VALOR, no ejecuta la función, simplemente la pone
}

processGreeting(greet, "MoureDev")
const greet2 = returnGreeting() //greet2 ahora hace referencia al resultado de la funcion returnGreeting

//como returnGreeting devuelve la funcion greet como valor, ahora greet2 va a ser igual a la funcion greet, haciendo referencia a la funcion como valor

greet2("Brais Moure") //por eso al decir greet2(nombre), estas referenciando a greet(nombre), ya que greet2 tiene como valor la funcion greet

// Arrow functions avanzadas

// - Retorno implícito
const multiply = (a, b) => a * b
console.log(multiply(2, 5))

// - this léxico
const handler = {
    name: "Brais",
    greeting: function () {
        console.log(`Hola, ${this.name}`) //El valor de this es handler. this.name = handler.name
        //this hereda el contexto de su padre, el objeto handler
    },
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`) //El valor de this es el objeto global window en las arrow functions
        //this.name = window.name
    }
}

handler.greeting()
handler.arrowGreeting();


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
//https://chatgpt.com/c/67c0de2e-8bc8-8004-a43a-76322d9c3982
//https://medium.com/@ctrlaltmonique/lexical-this-how-this-works-in-arrow-functions-100239be6550
//https://lenguajejs.com/javascript/funciones/arrow-functions/

// IIFE (Expresión de Función Invocada Inmediatamente)

(function () {
    console.log("IIFE clásico")
})();

(() => {
    console.log("IIFE con arrow function")
})();

// Parámetros Rest (...) cuando no se cuanto sera el numero de argumentos que pondre

function sum(...numbers) {
    let result = 0
    for (let number of numbers) {
        result += number
    }
    return result
}

console.log(sum(1, 2, 3, 4, 5))
console.log(sum(10, 15))

// Operador Spread (...)

const numbers = [1, 2, 3]
function sumWithSpread(a, b, c) {
    return a + b + c
}

console.log(sumWithSpread(1, 2, 3)) // Sin Spread
console.log(sumWithSpread(...numbers)) // Con Spread

// Closures (Clausuras)

function createCounter() {
    let counter = 0
    return function () {
        counter++
        console.log(`Contador: ${counter}`)
    }
}

const counter = createCounter()
counter()
counter()
counter()
counter()

// Recursividad
//cuando la funcion se llama a si misma. Se debe delimitar su contexto de ejecucion para que no se caiga en loop infinito

function factorial(n) {
    if (n <= 1) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(5))

// Funciones parciales

function partialSum(a) {
    return function (b, c) {
        return sum(a, b, c)
    }
}

const sumWith = partialSum(4)
console.log(sumWith(2, 3))
console.log(sumWith(1, 2))

// Currying

function currySum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return sum(a, b, c, d)
            }
        }
    }
}

const sumAB = currySum(1)(2)
const sumC = sumAB(3)
console.log(sumC(3))
console.log(sumC(4))
console.log(sumAB(5)(7))

// Callbacks

function processData(data, callback) {
    const result = sum(...data)
    callback(result)
}

function processResult(result) {
    console.log(result)
}

function processResult2(result) {
    console.log(`Mi resultado es: ${result}`)
}

processData([1, 2, 3], processResult)
processData([1, 2, 3], processResult2)
processData([1, 2, 3], (result) => {
    console.log(`Mi resultado en la arrow function es: ${result}`)
})