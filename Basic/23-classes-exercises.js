/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
// 2. Añade un método a la clase que utilice las propiedades


class Person {

    constructor(name, age, profession) {
        this.name = name
        this.age = age
        this.profession = profession
    }

    greet() {
        console.log(`Hello, I'm ${this.name}, and I'm ${this.profession}`)
    }

}

let programmer1 = new Person('Karen', 27, 'front end dev')

// 3. Muestra los valores de las propiedades e invoca a la función
programmer1.greet()
console.log(programmer1.name, programmer1.age, programmer1.profession)

// 4. Añade un método estático a la primera clase
// 5. Haz uso del método estático

class UnitConverter {
    static CelsiustoFarenheit (number){
        return (number*(9/5)+32)
    }

    static meterstoKilometers (number){
        return number/1000
    }
}

let testNumber = UnitConverter.CelsiustoFarenheit(185)
console.log(testNumber)
console.log(UnitConverter.meterstoKilometers(1600))

// 6. Crea una clase que haga uso de herencia

class Country{
    constructor(name, continent, habitants){
        this.name = name
        this.continent= continent
        this.habitants = habitants
    }

    greet(){
        console.log(`Hi! I'm from ${this.name}`)
    }
}

class Ecuador extends Country{
    constructor(name, continent, habitants, region){
        super(name, continent, habitants)
        this.region = region
    }

    greet(){
        console.log(`Hola soy de ${this.name}`)
    }

    ecuadorianGreet(){
        console.log('Habla mi pana, soy de Ecuador')
    }
}

let country1 = new Ecuador('Ecuador', 'Souht America', '17 mill', 'Coastal')
console.log(country1)
country1.ecuadorianGreet()

// 7. Crea una clase que haga uso de getters y setters
// 8. Modifica la clase con getters y setters para que use propiedades privadas


class EcuadorianPerson {
    
    #ID
    #direction

    constructor(name, ID, cellphone, direction){
        this.name = name
        this.#ID = ID
        this.cellphone = cellphone
        this.#direction = direction
    }

    set directionset(direction){
        this.#direction = direction
    }

    get ID(){
        return this.#ID
    }
}

// 9. Utiliza los get y set y muestra sus valores
let Karen = new EcuadorianPerson('Karen Benites', '0956036991', '09956047968', 'flor de bastion mz 1419 solar 19')
console.log(Karen)
console.log(Karen.ID)

Karen.directionset = 'la 24 y callejon K'

// 10. Sobrescribe un método de una clase que utilice herencia 
country1.greet()