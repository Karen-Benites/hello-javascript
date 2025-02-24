/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let house = {
    color: 'light peach',
    size: '15m x 25m',
    habitants: 2
}

// 2. Accede y muestra su valor
console.log(house['color'])
console.log(house.size)
console.log(house.habitants)

// 3. Agrega una nueva propiedad
house.haspet = true
console.log(house)

// 4. Elimina una de las 3 primeras propiedades
delete house.size
console.log(house)

// 6. Itera las propiedades del objeto
for (let value in house){
    console.log(value)
}

// 7. Crea un objeto anidado
house.size = {
    wide: 25,
    largo: 12,
    measureUnit: 'm'
}

console.log(house)

// 5. Agrega una función e invócala
house.sizeMessage = function (wide, height, measureUnit){
    let finalSize = ''
    finalSize = (wide*height) + ` ${measureUnit}\u00B2`
    return finalSize
}

console.log(house.sizeMessage(house.size.wide, house.size.largo, house.size.measureUnit))

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(house.size.wide, house.size.largo, house.size.measureUnit)

// 9. Comprueba si los dos objetos creados son iguales

let person = {
    firstName: 'Karen',
    lastName: 'Benites',
    age: 27,
    isMarried: true,
    petsName: 'Nikki',
    gender: 'woman'
}

console.log (person == house)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(person.name == house.color)