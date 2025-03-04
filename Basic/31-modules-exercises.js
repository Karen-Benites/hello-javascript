/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función

export let CelsiustoFarenheitConverter = (number) => (number*(9/5)+32)

// 2. Exporta una constante

export let ivaEcuador = 0.15

// 3. Exporta una clase

export class Users{
    constructor(FirstName, LastName, age, country){
        this.FirstName = FirstName
        this.LastName = LastName
        this.country = country
        this.age = age
    }

}

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
export default function FahrenheittoCelciusConverter(number){return (number -32)*(5/9)}