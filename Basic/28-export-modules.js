/*
Clase 44 - Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=21480
*/

// Exportación de módulos

//Son ficheros que podemos usar en otros ficheros

// Funciones

export function add(a, b) {
    return a + b
}

console.log(add(5, 10))

// Propiedades

export const PI = 3.1416
export let name = "MoureDev"

// Clases

export class Circle {

    constructor(radius) {
        this.radius = radius
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    perimeter() {
        return 2 * Math.PI * this.radius
    }

}

// Exportación por defecto, solo se puede exportar por defecto una sola cosa, y deben ser clases o funciones. No se pueden exportar propiedades
//Variables o constantes

export default function substract(a, b) {
    return a - b
}

// export default class MyClass {

//     func() {
//         console.log("Mi clase")
//     }
// }
