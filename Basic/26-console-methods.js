/*
Clase 42 - Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=20444
*/

//Estos metodos nos sirven para depurar mejor nuestro codigo, viendo informacion util en consola

// Console

// log

console.log("¡Hola, JavaScript!")

// error

console.error("Este es un mensaje de error.")
console.error("Error al conectarse a la base de datos: ", new Error("Conexión fallida."))

// warn

console.warn("Este es un mensaje de advertencia.")

// info

console.info("Este es un mensaje de información adicional.")

// table

let data = [
    ["Brais", 37],
    ["Sara", 21]
]

console.table(data)

data = [
    { name: "Brais", age: 37 },
    { name: "Sara", age: 21 }
]

console.table(data)

// group

console.group("Usuario:")
console.log("Nombre: Brais")
console.log("Edad: 37")
console.groupEnd()

// time
console.info("⏳ Iniciando: Tiempo de ejecución 2");
console.time("Tiempo de ejecución 2");  // 🔹 Inicia el contador "Tiempo de ejecución 2"

for (let i = 0; i < 10000; i++) {}  // 🔹 Bucle vacío (se ejecuta pero no hace nada)

console.info("⏳ Iniciando: Tiempo de ejecución 1");
console.time("Tiempo de ejecución 1");  // 🔹 Inicia el contador "Tiempo de ejecución 1"

for (let i = 0; i < 10000; i++) {}  // 🔹 Otro bucle vacío

console.timeEnd("Tiempo de ejecución 2");  // 🚨 Finaliza "Tiempo de ejecución 2"
                                          // 🔸 Mide el tiempo desde el primer console.time("Tiempo de ejecución 2")

for (let i = 0; i < 10000; i++) {}  // 🔹 Otro bucle vacío

console.timeEnd("Tiempo de ejecución 1");  // 🚨 Finaliza "Tiempo de ejecución 1"
                                          // 🔸 Mide el tiempo desde console.time("Tiempo de ejecución 1")

// assert

let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad.")

// count

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// trace

function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecución.")
}

funcA()

// clear

// console.clear()