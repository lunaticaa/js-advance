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
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(2, 3, 5));
