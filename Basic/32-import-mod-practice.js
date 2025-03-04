// 4. Importa una función

// 5. Importa una constante

// 6. Importa una clase

import {CelsiustoFarenheitConverter, ivaEcuador, Users} from "./31-modules-exercises.js"

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

import defaultConverter from "./31-modules-exercises.js"

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
import {Order, totalCalculator} from "../export-practice/operations.js"

console.info(ivaEcuador)
console.log(CelsiustoFarenheitConverter(200))

let Nikki = new Users("Nikki", "Benites", 3, 'Ecuador')
console.log(Nikki)
console.log(Nikki.FirstName)

console.log(defaultConverter(400))


let products = [
    {name: 'shirt',
    quantity: 2,
    unitaryPrice: 4.5,
    },
    {name: 'pants',
        quantity: 1,
        unitaryPrice: 23.35,
    }
]

let Purchase1 = new Order(products)
Purchase1.total = totalCalculator(Purchase1, ivaEcuador)
console.table(Purchase1)