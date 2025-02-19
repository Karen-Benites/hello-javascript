/*
Clase 27 - Maps
Vídeo: https://youtu.be/1glVfFxj8a4?t=10755
*/

// Map

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialiación

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap)

// Métodos y propiedades

// set agrega nuevos elementos al map, o actualiza algun elemento de una clave si esta ya esta definida

myMap.set("alias", "mouredev") //agrega una clave y valor nuevos
myMap.set("name", "Brais Moure") //actualiza el valor de name, clave que ya existe

console.log(myMap)

// get, accede al valor de una clave

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has
const bool = myMap.has('surname')

console.log(bool)
console.log(myMap.has("age"))

// delete

myMap.delete("email")

console.log(myMap)

// keys, values y entries

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size

console.log(myMap.size)

// clear

myMap.clear()

console.log(myMap)



