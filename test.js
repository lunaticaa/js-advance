// let a = 10;
// function Outer() {
//   let b = 20;
//   function Inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }
//   Inner();
// }
// Outer();

// Closure
// function Outerr() {
//   let counter = 0;
//   function Inner() {
//     counter++;
//     console.log(counter);
//   }
//   return Inner;
// }
// const fn = Outerr();
// fn();
// fn();

// function Curring
// function sum(a, b, c) {
//   return a + b + c;
// }
// console.log(sum(2, 3, 5));

// function curry(fn) {
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         return fn(a, b, c);
//       };
//     };
//   };
// }
// const currisum = curry(sum);
// console.log(currisum(2)(3)(5));

// const add2 = currisum(2);
// const add3 = add2(3);
// const add5 = add3(5);
// console.log(add5);
// this key word in js
// function sayMyName(name) {
//   console.log(`my name is ${name}`);
// }
// const person = {
//   name: "amir",
//   sayMyName: function () {
//     console.log(`my name is ${this.name}`);
//   },
// };

// // person.sayMyName()
// function sayMyName() {
//   console.log(`my name is ${this.name}`);
// }

// // sayMyName.call(person);
// globalThis.name = "superman";
// function Person(name) {
//   // this = {}
//   this.name = name;
// }

// const p1 = new person("amir");
// const p2 = new person("amirmohammad");

// // console.log(p1.name, p2.name);

// sayMyName();

// prototype
// function Person(fname, lName) {
//   this.firstName = fname;
//   this.lastName = lName;
// }

// Person.prototype.getFullName = function () {
//   return this.firstName + " " + this.lastName;
// };

// function superHero(fname, lName) {
//   Person.call(this, fname, lName);
//   this.isSuperHero = true;
// }
// superHero.prototype.fightCrime = function () {
//   console.log("fighting crimes");
// };

// superHero.prototype = Object.create(Person.prototype);

// const Batman = new superHero("amir", "wayne");
// console.log(Batman.getFullName());

// console.log(Person2.getFullName());
// console.log(Person1.getFullName());

// class extends
class person {
  constructor(fname, lName) {
    this.firstName = fname;
    this.lastName = lName;
  }
  sayMyName() {
    return this.firstName + " " + this.lastName;
  }
}

const classP1 = new person("amir", "wayne");

console.log(classP1.sayMyName());

class superHero extends person {
  constructor(fname, lName) {
    super(fname, lName);
    this.isSuperHero = true;
  }
  fightcrime() {
    console.log("fighting crime");
  }
}

const Batman = new superHero("amir", "wayne");
console.log(Batman.sayMyName());

// Iterables and Iterators
const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: "Hello", done: false };
        } else if (step === 2) {
          return { value: "World", done: false };
        }
        return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};

// for (const word of obj) {
//   console.log(word);
// }
// function normalFunction() {
//   console.log("hello");
// }

function* generatorsFunction() {
  yield "Hello";
  yield "world";
}

const generatorObj = generatorsFunction();

for (const word of generatorObj) {
  console.log(word);
}

