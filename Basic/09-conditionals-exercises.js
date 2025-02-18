/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let name = "Karen"
if (name === "Karen"){
    console.log(`Bienvenida, ${name}`)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let password = 'IloveNikki2'
 if (name === "Karen" && password === "IloveNikki"){
    console.log(`Bienvenida, ${name}`)
 } else {
    console.log('Usuario y/o contraseña incorrectos, intente de nuevo')
 }

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

const numero = -3
if (numero >0){
    console.log('Positivo')
} else if (numero<0){
    console.log('Negativo')
} else if (numero==0){
    console.log('Es cero')
} else{
    console.log('Numero no valido, intenta de nuevo')
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 14
let añosQueFaltan = 18-edad

if (edad >=18){
    console.log('Puede votar, pase')
} else {
    console.log(`No puede votar, le faltan ${añosQueFaltan} años para poder votar`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let isAdult = edad>=18? 'adulto':'menor'
console.log(isAdult)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 10
if (mes>=1 && mes<=3){
    console.log('Estamos en primavera')
} else if (mes>3 && mes<=6){
    console.log('Estamos en verano')
} else if (mes>6 && mes<=9){
    console.log('estamos en otoño')
} else if(mes>9 && mes<=12){
    console.log('estamos en invierno')
} else{
    console.log('mes no valido, verifica valor')
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes == 1 || mes == 3 || mes==7 || mes==8 || mes == 10 || mes ==12){
    console.log(`El mes ${mes} tiene 31 dias`)
} else if (mes ==4 || mes ==5|| mes==6 || mes==9 ||mes==11){
    console.log(`El mes ${mes} tiene 30 dias`)
} else if (mes==2){
    console.log(`El mes ${mes} tiene 28 dias`)
} else {
    console.log('Mes no valido, verifica el valor')
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = 'Coreano'
let saludo

switch (idioma) {
    case 'Frances':
        saludo = 'bonjour'
        break
    case 'Ingles':
        saludo='Hello'
        break
    case 'Coreano':
        saludo = '안녕하세요'
        break
    case 'Chino':
        saludo = 'ninhao'
        break
    case "Español":
        saludo = 'Hola'
        break
    default:
        saludo = 'Lo sentimos, ese idioma no lo tenemos'
}

console.log(saludo)

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let estacion

switch (true){
    case (mes>=1 && mes<=3):
        estacion = 'primavera'
        break
    case (mes>3 && mes<=6):
        estacion = 'verano'
        break
    case (mes>7 && mes<=9):
        estacion = "otoño"
        break
    case (mes>9 && mes<=12):
        estacion = 'invierno'
        break
    default:
        estacion = 'ninguna'
}

console.log (`Estamos en ${estacion}`)
// 10. Usa un switch para hacer de nuevo el ejercicio 7

let dias 
switch (true){
    case (mes == 1 || mes == 3 || mes==7 || mes==8 || mes == 10 || mes ==12):
        dias = 31
        break
    case (mes ==4 || mes ==5|| mes==6 || mes==9 ||mes==11):
        dias = 30
        break    
    case (mes==2):
        dias = 28
        break    
    default:
        console.log('Mes no valido, verifica el valor')
}

console.log(`El mes ${mes} tiene ${dias} dias`)