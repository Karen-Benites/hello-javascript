/*
Clase 2 - Estructuras avanzadas (05/02/2025)
Vídeo: https://www.twitch.tv/videos/2373300186?t=00h15m32s
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
const myArray = [10, 15, 30, 40, 55, 60, 14, 32]

const newArray = myArray.map(number => number +10)
console.log(newArray)

const multiplosDeTres = myArray.filter(number => number %3 ===0)
console.log(multiplosDeTres)

let contador = 0

myArray.forEach(function(number){
    if (number%3 ===0){
        console.log(`Encontre un multiplo de 3: ${number}`)
        contador+=1
    }

    return contador
})

console.log(contador)

const students = [
    { name: "Kingsley", score: 70 },
    { name: "Jack", score: 80 },
    { name: "Joe", score: 63 },
    { name: "Beth", score: 75 },
    { name: "Kareem", score: 59 },
    { name: "Sarah", score: 93 }
]
const repeated = students.reduce((acc, student)=> acc + student.score, 0)

console.log(repeated)

const result = [
    {subject: 'Physics', marks: 41},
    {subject: 'Chemistry', marks: 59},
    {subject: 'Pure Maths', marks: 36},
    {subject: 'Applied Maths', marks: 90},
    {subject: 'English', marks: 64},
];

let initialValue = {
    pass: [], 
    fail: [],
}

const groupResult = result.reduce((acc, object)=> {
    (object.marks>=60)? acc.pass.push(object): acc.fail.push(object)
    return acc 
}, initialValue)

console.log(initialValue)

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares

let cubeNumbers = myArray.map(number => number**3)
console.log(cubeNumbers)

let evenCubeNumbers = cubeNumbers.filter(number => number%2 ===0)
console.log(evenCubeNumbers)


// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

const arrOfArrs = [
    ['aaron', 'ake', 'anna', 'aje'],
    ['becky', 'ben', 'bright'],
    ['cara', 'chris'],
    ['david', 'daniel', 'danielle', 'djenue'],
]

const flattedArray = arrOfArrs.flat(1)
console.log(flattedArray)

const numbers = [1, 2, 3, 4];
const doubledAndSquared = numbers.flatMap(num => [num * 2, num ** 2]);
console.log('Doubled and squared array: ', doubledAndSquared);

// 4. Ordena un array de números de mayor a menor
let sortedArray = myArray.sort((a,b)=> a-b)
console.log(sortedArray)

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
let E = new Set(['ANGIE', 'LEYTON', 'MARJORIE', 'DAISY', 'PATRICIA', 'CRISTINA'])
let N = new Set(['ALLISON', 'TAYRA', 'KELVIN', 'KEVIN', 'CRISTINA', 'DAISY'])

let EuN = new Set([...E, ...N])
console.log(EuN)

let EcN = new Set([...E].filter(name=> N.has(name)))
console.log(EcN)

let EminusN = new Set([...E].filter(name => !N.has(name)))
console.log(EminusN)

// 6. Itera los resultados del ejercicio anterior
let lowerCaseSets = new Set([...EuN].map(name=> name[0]+ name.slice(1).toLowerCase()))
console.log(lowerCaseSets)

// 7. Crea un mapa que almacene información de usuarios (nombre, edad y email) e itera los datos
const usuarios = new Map();

// Agregar usuarios al mapa
usuarios.set(1, { nombre: "Ana", edad: 15, email: "ana@example.com" });
usuarios.set(2, { nombre: "Carlos", edad: 30, email: "carlos@example.com" });
usuarios.set(3, { nombre: "Beatriz", edad: 28, email: "beatriz@example.com" });
usuarios.set(4, { nombre: "David", edad: 35, email: "david@example.com" });
usuarios.set(5, { nombre: "Elena", edad: 12, email: "elena@example.com" });
usuarios.set(6, { nombre: "Fernando", edad: 40, email: "fernando@example.com" });
usuarios.set(7, { nombre: "Gabriela", edad: 27, email: "gabriela@example.com" });
usuarios.set(8, { nombre: "Hugo", edad: 13, email: "hugo@example.com" });
usuarios.set(9, { nombre: "Isabel", edad: 29, email: "isabel@example.com" });
usuarios.set(10, { nombre: "Javier", edad: 31, email: "javier@example.com" });

console.log(usuarios)

usuarios.forEach((value, key)=> console.log(`Usuario ${key}: ${value.nombre}`))

// 8. Dado el mapa anterior, crea un array con los nombres
let namesArray = []
usuarios.forEach((value)=> namesArray.push(value.nombre) )
console.log(namesArray)

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

//Mode 1
// let emailData = []
// usuarios.forEach((value)=> emailData.push([value.email, value.edad]))
// console.log(emailData)

// let AdultsEmail = new Set(emailData.map(element => {
//     if(element[1]>18){
//         return element[0]
//     }
// }))

// console.log(AdultsEmail)

//Mode 1
let UsuariosArray = (Array.from(usuarios)).map(element => element.pop())
let EmailsObject = UsuariosArray.filter(element => element.edad>18)
let EmailsArray = EmailsObject.map(element => element.email)

console.log(EmailsArray)


// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
let usersObject = Object.fromEntries(usuarios)
let ArrayfromObject = (Object.entries(usersObject)).map(element => element.pop())
let case2 = ArrayfromObject.map(element => [element.email, {nombre: element.nombre, edad: element.edad}])
let newMap = new Map(case2)
console.log(newMap)

//Mode 2
const indexedUsers = UsuariosArray.reduce((accumulator, element)=>{
    return {...accumulator, [element.email]: element}
}, {})

let myEmailMap = new Map(Object.entries(indexedUsers))
console.log('My indexed users list', myEmailMap)

