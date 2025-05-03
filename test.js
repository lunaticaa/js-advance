let a = 10;
function Outer() {
  let b = 20;
  function Inner() {
    let c = 30;
    console.log(a, b, c);
  }
  Inner();
}
Outer();
