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
const person = {
  name: "amir",
  sayMyName: function () {
    console.log(`my name is ${this.name}`);
  },
};

// person.sayMyName()
function sayMyName() {
  console.log(`my name is ${this.name}`);
}

// sayMyName.call(person);

function Person(name) {
  // this = {}
  this.name = name;
}

const p1 = new person("amir");
const p2 = new person("amirmohammad");
