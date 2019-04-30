// 01.class.js

// 클래스 생성
class Car {
    constructor(option) {
        this.title = option.title
    }

    drive() {
        return 'Vrooom'
    }
}

a6Option = {title: 'A6'}

const car = new Car(a6Option)
console.log("================================")
console.log("=========Class Creation=========")
console.log("================================")
console.log(car.title)
console.log(car.drive())
console.log(typeof(car))


// 상속
class Audi extends Car {
    constructor(option) {
        super(option)
        this.color = option.color
    }
    
    drive() {
        return 'Vroooooooooooooooooooooooooom'
    }

    honk() {
        return 'Baaaaaaaam'
    }
}


console.log("================================")
console.log("========Class Inheritance=======")
console.log("================================")
audiOption = {title: 'mycar', color: 'red'}
audi = new Audi(audiOption)
console.log(audi.title)
console.log(audi.drive())
console.log(audi.honk())


audi.honk = () => {
    return 'Bam'
}

console.log(audi.honk())


console.log('Chack car is Car :', car instanceof Car)
console.log('Chack car is Audi :', car instanceof Audi)
console.log('Chack audi is Car :', audi instanceof Car)
