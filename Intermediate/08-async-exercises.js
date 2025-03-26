/*
Clase 4 - Programación asíncrona (19/02/2025)
Vídeo: https://www.twitch.tv/videos/2385650388?t=00h22m48s
*/

// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".

function greet(callback, name){
    setTimeout(()=> callback(name),2000)
}

greet((nombre)=> console.log(`Hola, ${nombre}`), 'Karen')

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.

const task1 = function (callback){
    console.log('Iniciando tarea 1...')
    setTimeout(()=>{
        console.log('Tarea 1 terminada')
        callback()
    }, 1000)
    
}

const task2 = (callback)=>{
    console.log('Iniciando tarea 2...')
    setTimeout(()=>{
        console.log('Tarea 2 terminada')
        callback()
    }, 1000)
}

const task3 = (callback)=>{
    console.log('Iniciando tarea 3...')
    setTimeout(()=>{
        console.log('Tarea 3 terminada')
        callback()
    }, 1000)
}

task1(()=> {
    task2(()=> {
        task3(()=> console.log('Todas las tareas terminadas'))
    })
})

// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".

function EvenNumberVerifyer(number){
    return new Promise((resolve, reject)=>{
        if (!number%2 ===0){
            reject('Numero impar')
        } else{
            resolve('Numero par')
        }
    })
}

EvenNumberVerifyer(5)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".

function firstTask(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(('Primera tarea completada'))
            resolve()
        }, 1000)
    })

}

function secondTask(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(('Segunda tarea completada'))
            resolve()
        }, 2000)
    })

}


function thirdTask(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(('Tercera tarea completada'))
            resolve()
        }, 1500)
    })

}

firstTask()
    .then(secondTask)
    .then(thirdTask)
    .then(() => console.log('Todos los pasos completados'))


// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().

async function thirdTask(){
    return await new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(('Tercera tarea completada'))
            resolve()
        }, 1500)
    })
} 

async function secondTask(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(('Segunda tarea completada'))
            resolve()
        }, 2000)
    })
}

async function firstTask(){
    return await new Promise((resolve) => {
        setTimeout(() => {
            console.log(('Primera tarea completada'))
            resolve()
        }, 1000)
    })
}

async function executeTasks() {
    await firstTask()
    await secondTask()
    await thirdTask()
    return console.log('Todos los pasos completados')
}

await executeTasks()

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.

async function getUser(id){
    console.log('Iniciando ejecucion....')
    let response = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (!(id<5)){
                reject(new Error ('Usuario no encontrado'))
            } else{
                resolve({ id, nombre: "Usuario " + id })
            }
        }, 2000)
    })

    return await response
}

try{
    console.log(await getUser(4))
}catch(error){
    console.log(error.message)
}

/*
En este caso, use el bloque try catch en el momento del llamado de la funcion por recomendacion
de separacion de la logica del negocio con el manejo de errores (recomendacion es que se maneje erorres por
separado). Pero tambien funcionaria manejando el error internamente dentro de la funcion. 

En este caso, cuando la promesa se rechace la funcion lanza un error y no retornara ningun valor.
*/


//Ejemplo usando thentables

function getUser2(id){
    console.log('Iniciando ejecucion....')
    let response = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (!(id<5)){
                reject(new Error ('Usuario no encontrado'))
            } else{
                resolve({ id, nombre: "Usuario " + id })
            }
        }, 2000)
    })

    return response
}

// await getUser2(4) Resulta que puedo poner await a una funcion no asincrona, pero que devuelve una promesa. 
// Creo que esto es resultado del top level await

getUser2(2)
    .then(response => console.log(response))
    .catch(error => console.log('Se ha producido un error: ', error.message))

// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
console.log("Inicio")
setTimeout(() => console.log("setTimeout ejecutado"), 0)
Promise.resolve().then(() => console.log("Promesa resuelta"))
console.log("Fin")

/*
Esto pasa por el event loop:
1 se ejecutan todas las tareas sincronas
2. se agendan las macro y micro tareas en sus respectivas queues
3. Primero se ejecutan todas las microtareas (promesas)
4. Luego se ejecutan todas las macrotareas (set time out)

Por eso, tenemos el sgt resultado:

Inicio
Fin
Promesa resuelta
setTimeout ejecutado

*/

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.


function Promise1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Primera tarea completada')
        }, 1000)
    })
}

function Promise2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(('Segunda tarea completada'))
        }, 2000)
    })
}


function Promise3(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(('Tercera tarea completada'))
        }, 1500)
    })
}

const promises = [Promise1(), Promise2(), Promise3()]

Promise.all(promises)
    .then(responses => {
        console.log('Todas las tareas resueltas:')
        console.table(responses)
    })

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.

function waitSeconds(seconds){
    let internalPromise = new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(`Han pasado ${seconds} segundos`)
            resolve()
        }, seconds*1000)
    })
    return internalPromise
}

let invocar =  async () => {
    await waitSeconds(1.5)
    await waitSeconds(3) //Me imprimiria un mensaje adicional de que han pasado 3 segundos pero me sirve
    console.log('Tiempo finalizado')
}
invocar()

//Alternativa con thentables
function waitSeconds2(seconds){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(seconds)
        }, seconds*1000)
    })
}

waitSeconds2(1.5)
            .then(second=>{
                console.log(`Han pasado ${second} segundos...`)
                return waitSeconds2(3)
            }).then(()=>console.log('tiempo finalizado'))

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes

async function createBalance(saldoInicial = 0) {
    let saldo = await new Promise(resolve => {
        setTimeout(() => {
            console.log(`Saldo disponible: ${saldoInicial}`)
            resolve(saldoInicial)
        }, 1000)
    })
    
    return function(amountWithdrawn){
        return new Promise((resolve, reject)=>{
            console.log(`Retirando $ ${amountWithdrawn}...`)
            setTimeout(()=>{
                let saldoActual = saldo - amountWithdrawn
                if(!(saldoActual>=0)){
                    reject(new Error('Fondos insuficientes'))
                }else{
                    console.log(`Operacion exitosa, saldo restante: ${saldoActual}`)
                    saldo = saldoActual
                    resolve(saldo)
                }
            }, 2000)
        })
    }
}

let withdrawMoney = await createBalance(500)

try{
    await withdrawMoney(300)
}catch(error){
    console.log('Ocurrion un error: ', error.message)
}

try{
    await withdrawMoney(300)
}catch(error){
    console.log('Ocurrion un error: ', error.message)
}

withdrawMoney = await createBalance(700)

try{
    await withdrawMoney(450)
}catch(error){
    console.log('Ocurrio un error: ', error.message)
}

withdrawMoney(100)
            .then(()=> withdrawMoney(300), error => console.log('Ocurrio un error: ', error.message)) //Elimine el segundo .then() porque en este caso no hacia nada, no gestionaba nada resultado del segundo withdraw
            .catch(error => console.log('Ocurrio un error: ', error.message))
