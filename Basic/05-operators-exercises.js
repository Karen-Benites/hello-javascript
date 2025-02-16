/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let a = 12
let b = 22

let suma = a+b
console.log("Suma: ", suma)

let resta = a-b
console.log(`Resta: ${resta}`)

let multiply = a*b
console.log(`Multiplicacion: ${multiply}`)

let divide = a/b
console.log(`division: ${divide}`)

let resto = a%b
console.log(`resto: ${resto}`)

let potencia = a**b
console.log(`potencia: ${potencia}`)

let aMenos1 = a++ //primero asigna el valor de a, que es 12, entonces aMenos1 = 12; luego a se incrementa en uno
console.log(`${aMenos1} + 1 = ${a}`)

let amod = ++a
console.log(`${amod} = ${a}`) //primero incrementa en uno al a, luego asigna el valor resultante a amod, resultando en ambas variables iguales.



// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

//Ahora a vale 14 por las ultimas 2 operaciones.

let sumaAsignada = a
console.log(sumaAsignada +=1)

let restaAsignada = 12
console.log(`antes: ${restaAsignada}, despues: ${restaAsignada-=1}`)
console.log(restaAsignada)

let multiplicacionAsignada = 3
console.log(`antes: ${multiplicacionAsignada}, despues: ${multiplicacionAsignada*=2}`)
console.log(multiplicacionAsignada)

let asignedDivider = 25
console.log(`antes: ${asignedDivider}, despues: ${asignedDivider/=5}`)
console.log(asignedDivider)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(54<88)
console.log(54<=90)
console.log(true == 1)
console.log (asignedDivider == '5')
console.log(resta === resta)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(54>54)
console.log(54>=90)
console.log(true == " ")
console.log (asignedDivider === '5')
console.log(resta !== resta)

// 5. Utiliza el operador lógico and

console.log(54<54 && false ==" ")

// 6. Utiliza el operador lógico or
console.log(54<54 || false ==" ")

// 7. Combina ambos operadores lógicos // 8. Añade alguna negación
let condicion = 54<54 && false ==" " || !false
console.log(`Combinando operadores logicos: ${condicion}`)

// 9. Utiliza el operador ternario
const condicionProbada = !1
condicionProbada? console.log("Ella me ama"):console.log("Ella no me ama")

// 10. Combina operadores aritméticos, de comparáción y lógicas

let combinador = (b++ < (a**3) && 36 == '36' || "Ella me ama" == 0)
console.log(`combinacion final: ${combinador}`)