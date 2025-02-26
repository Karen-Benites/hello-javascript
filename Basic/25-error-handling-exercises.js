/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch

try {
    console.log(myName)
} catch(error) {
    console.log('Se ha producido un error: ', error.message)
}


// 2. Captura una excepción utilizando try-catch y finally
try {
    console.log(myName)
} catch(error) {
    console.log('Se ha producido un error: ', error.message)
} finally {
    console.log('No olvides de definir tus variables antes de iniciar el programa')
}

// 3. Lanza una excepción genérica

function isAge(age){
    if (typeof age != 'number'){
        throw new Error('La edad debe ser un numero, verifica e intenta de nuevo')
    } else if (age < 0){
        throw new Error('La edad debe ser un numero positivo, revisa por favor')
    }
}

try{
    isAge(-1)
} catch (error){
    console.log('Se ha producido un error: ',error.message)
}

// 4. Crea una excepción personalizada
class PasswordTooShort extends Error {
    constructor(message, text) {
        super(message)
        this.text = text
    }

    printPassLength() {
        console.log(this.text.length + ' Characters')
    }
}


// 5. Lanza una excepción personalizada
function PasswordValidator(text){
    if (text.length <8){
        throw new PasswordTooShort(`La contraseña ${text} es demasiado corta, `, text)
    }
}

try{
    PasswordValidator('Karen1')
} catch (error){
    console.log('Error personalizado: ', error.message)
    error.printPassLength()
}

// 6. Lanza varias excepciones según una lógica definida

function textInverter(text){
    if (typeof text != 'string' || text === undefined){
        throw new TypeError('Debes escribir un texto, verifica e intenta nuevamente')
    } else if (text.length <=1){
        throw new tooShortText('Ingresaste un texto muy corto, verifica nuevamente', text)
    }
    let counter = text.length
    let invertedString = ""
    while(counter>0){
        invertedString +=text[counter-1]
        counter--
    }
    return invertedString
}

class tooShortText extends Error{
    constructor(message, text) {
        super(message)
        this.text = text
    }
    printmessage(){
        console.log(`tienes ${this.text.length} caracteres`)
    }
}

// 7. Captura varias excepciones en un mismo try-catch

try{
    let mytext = textInverter(4466)
    console.log(mytext)
} catch(error){
    if (error instanceof tooShortText){
        console.log(error.message)
        error.printmessage()
    } else if (error instanceof TypeError){
        console.log(error.message)
    }
}


// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

let numbers = [1,2,'3',4,'',65]

for (let value of numbers){
    try{
        if (typeof value == 'string' && value.length == 0){
            throw new Error('No se puede convertir a float una cadena vacia')
        }
        console.log(parseFloat(value))
    } catch(error){
        console.log('Se ha producido un error: ', error.message)
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

let employee = {
    name: 'Karen Benites',
    ID: '0856027881',
    department: 'Production'
}

function emailValidator(employee){
    if (typeof employee.email === "undefined"){
        throw new MissingEmail('This employee does not have email')
    }
    return employee.email
}

class MissingEmail extends Error{
    constructor (message){
        super(message)
    }
}

try{
    console.log(emailValidator(employee))
}catch(error){
    console.log(error.message)
}


// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
let students = ['Maria', 'Jenny', 'Lucy','Mia','Valentine', 'Sophia','Nury','John','Juliette','Amelie','Javier']

function studentFinder(studentName, array, attempts){
    let tries = 0
    let student

    while (tries< attempts){
        try{
            if (array[tries] == studentName){
                student = array[tries]
                console.log(student)
                break
            } else{
                throw new Error('Student not found, trying again...')
            }
        }catch(error){
            console.log(error.message)
        }
        tries++
    }

    if (typeof student === 'undefined'){
        console.log('Student not found during allowed attepmts')
    }
}

studentFinder('Nury', students, 10)