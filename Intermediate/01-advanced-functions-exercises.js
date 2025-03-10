/*
Clase 1 - Funciones avanzadas (29/01/2025)
Vídeo: https://www.twitch.tv/videos/2367024319?t=00h08m45s
*/

// 1. Crea una función que retorne a otra función

const characters = [
    {
        firstName: 'Tulio',
        lastName: 'Triviño',
    },
    {
        firstName: 'Policarpo',
        lastName: 'Avendaño',
    },
    {
        firstName: 'Nicasio',
        lastName: 'Fallido',
    }
];


function getFirstName(array, index) {
    return function () {
        return `${array[index].firstName} ${array[index].lastName}`
    }
}

let Policarpo = getFirstName(characters,1)
console.log(Policarpo())


// 2. Implementa una función currificada que multiplique 3 números

function curryProduct(a) {
    return function (b) {
        return function (c) {
            return a*b*c
        }
    }
}

let ABProduct = curryProduct(3)(5)

console.log(ABProduct(28))

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

function exponential(number, n){
    if(n == 0){
        return 1
    } else if (n>0){
        return number*exponential(number, n -1)
    } else if (n<0){
        return 1/exponential(number, -n) //-n hace que el numero se vuelva positivo, por lo que en esta llamada de la funcion,
        // se aplica el caso 2, cuando n es positivo, y por lo tanto se aplica la potencia
    }
}

console.log(exponential(2,-3))

// 4. Crea una función createCounter() que reciba un valor inicial y retorne 
// un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
// 9. Implementa un retorno implícito

function createCounter(initialCount){
    return {
        increment:()=>initialCount++, //Cuando escribo algo en una arrow function sin llaves, hago retorno implicito
        decrement:()=>{return initialCount--}, //si uso llaves, debo usar retorno explicito
        getValue:()=>initialCount
    }
}

let initializer = createCounter(5)
console.log(initializer.increment())
console.log(initializer.decrement())
console.log(initializer.getValue())

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
function sumManyTimes(multiplier, ...numbers){
    let result = 0
    for (let number of numbers){
        result+= number
    }
    return multiplier*result
}

console.log(sumManyTimes(4,5,6,7,8,9,10,11))

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

function temperatureWarning(callbackfunction){
    const sum = sumManyTimes(1, 5,6,7,8,9,10,11)
    return callbackfunction(sum)
}

function warningMessage(number){
    if (number>50){
        return `Warning, temperature too high!: ${number}°C`
    } else{
        return 'OK'
    }
}

console.log(temperatureWarning(warningMessage))

// 7. Desarrolla una función parcial

function CofeeOrderProcesser(milktype){
    return function(size){
        return `Here's your ${size} oz coffee cup with ${milktype} milk`
    }

}

let milk = CofeeOrderProcesser('low fat')
console.log(milk(10))

// 8. Implementa un ejemplo que haga uso de Spread
let frontend = {
    styles: 'css',
    structure: 'html',
    interactivity: 'JS'
}

let backend = {
    database: 'MySQL',
    deploy: 'Azure'
}

function fullstack(frontStack, backStack){
    return {...frontStack, ...backStack}
}

let fullstackKaren = fullstack(frontend, backend)
console.table(fullstackKaren)

// 10. Haz uso del this léxico
const coche = {
    marca: "Toyota",
    arrancar() {
        console.log(`El coche ${this.marca} está arrancando...`); //this es coche ya que es el metodo del objeto coche
        setTimeout(() => {
            console.log(`El coche ${this.marca} ya está en marcha.`); //this es coche, ya que esta arrow function se creo dentro del contexto de la funcion padre arrancar
        }, 2000);
        //recordar que las arrow functions asumen el this en el contexto en el que se crearon
    },
};

coche.arrancar(); // aqui al invocarlo, this automaticamente toma el valor de coche