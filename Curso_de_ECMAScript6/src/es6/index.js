function newFunction(name, age, country) {
    var name = name || 'toñin';
    var age = age || 30;
    var country = country || 'ES';
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'toñin', age = 30, country = 'ES') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Maysi', '23', 'PR');

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "simply dummy text of the printing and typesetting industry \n"
+ "Ipsum has been the industry's standard dummy text ever since th";

// es6
let lorem2  = `Ipsum has been the industry's standard dummy text ever since th 
n the industry's standard dummy text`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'toñin',
    'age': 30,
    'country': 'ES'
}

console.log(person.name, person.age, person.country);

// let { name } = person;
// console.log(name);

let team1 = ['Mariano', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Ana', 'Camila'];

let education = ['David', ...team1, ...team2];
console.log(education);

{
    var globalVar = 'Global Var';
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}
console.log(globalVar);

const a = 'b';
a = 'a';
console.log(a);

let name = 'aythami';
let age = '31';

// es5
obj = { name: name, age: age };

// es6
obj2 = { name, age };
console.log(obj2);

const names = [
    { name: 'Rita', age: 28 },
    { name: 'Kiko', age: 34 }
]

let listOfNames = names.map(function (item) {
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    // ...
}

const listOfNames4 = name => {
    // ...
}

const square = num => num * num;

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (!true) {
            resolve('Hey!')
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

import { hello } from './module';

hello();

function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }

    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);

console.log(generatorHello.next().value);

console.log(generatorHello.next().value);