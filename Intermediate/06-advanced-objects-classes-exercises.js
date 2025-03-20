/*
Clase 3 - Objetos y Clases avanzadas (12/02/2025)
Vídeo: https://www.twitch.tv/videos/2379412787?t=00h21m33s
*/

// 1. Agregega una función al prototipo de un objeto
function Student(name, lastName, username, gender, mobileNumber, interestsTopics = [], education) {
    this.name = name
    this.lastName = lastName
    this.username = username
    this.gender = gender
    this.mobileNumber = mobileNumber
    this.interestsTopics = interestsTopics
    this.education = education
}

Student.prototype.bio = function(){
    let gendername
    if (this.gender === 'Female'){
        gendername = 'woman'
    } else if (this.gender === 'Male'){
        gendername = 'man'
    }
    console.log(`Hi, I am ${this.name} ${this.lastName},

    I am a ${gendername} and my last education level is ${this.education}`)
}

let Karen = new Student('Karen', 'Benites', 'klbenites96', 'Female', '0993411289', ['UX/UI', 'Javascript', 'CSS'], 'University')
Karen.bio()

// 2. Crea un objeto que herede de otro

let cheffLiss = {
    type: 'Desserts',
    cook(dish){
        console.log(`Cooking ${dish}...`)
        setTimeout(()=> console.log(`${dish} finished! Enjoy!😁`), 2000)
    }
}

let KarenDev = Object.create(cheffLiss)
KarenDev.cook('Apple pie')

// 3. Define un método de instancia en un objeto
class YugiohCharacterCreator{
    constructor(name, universe, deck =[], card){
        this.name = name,
        this.universe = universe,
        this.deck = deck
        this.card = card
    }
    
    introduce(){
        console.log(`Inconic character's phrase`)
    }

    summonCard(){
        console.log(`I summon ${this.card}`)
    }
}

let Judai = new YugiohCharacterCreator('Judai', 'GX', 'Elemental heroes', 'Yubel')
Judai.introduce = function(){
    console.log('Got cha!')
}

Judai.introduce()


// 4. Haz uso de get y set en un objeto

// 5. Utiliza la operación assign en un objeto

let CheffJudai = Object.assign(Judai, cheffLiss)
CheffJudai.cook('dorayakis')

// 6. Crea una clase abstracta
class YugiohCharactersCreator{
    constructor(name, deck =[], card){
        if (new.target === YugiohCharactersCreator){
            throw new Error('Please create a subclasss')
        }
        this.name = name,
        this.deck = deck
        this.card = card
    }
    
    introduce(){
        console.log(`Inconic character's phrase`)
    }
}

class DuelMonsters extends YugiohCharactersCreator{
    constructor(props, universe){
        super(props)
        this.universe, universe
    }
}

let Jonouchi = new DuelMonsters('Jonouchi', 'time', 'red dragon', 'duel monsters')
Jonouchi.introduce = ()=> console.log('Que ricoooo!')
Jonouchi.introduce()

// 7. Utiliza polimorfismo en dos clases diferentes

class FiveDs extends YugiohCharactersCreator{
    constructor(props, universe){
        super(props)
        this.universe, universe
    }

    introduce(){
        console.log(`Welcome to 5Ds team!`)
    }
}

// 8. Implementa un Mixin

const turboDuel = {
    StartDuel(){
        console.log('lets Have a turbo Duel!')
    }
}

Object.assign(FiveDs.prototype, turboDuel)

let Yusei = new FiveDs('Yusei', 'Junk warrios', 'shooting star dragon', '5Ds')
Yusei.StartDuel(
    
)


// 9. Crea un Singleton

// 10. Desarrolla un Proxy