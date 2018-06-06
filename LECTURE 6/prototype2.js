// let a = {p:10}
// let b = Object.create(a);
// console.log(b.p)
// b.p++
// console.log(b.p)
// console.log(b)
// console.log(b.__proto__ == a)
// b.__proto__.p=9
// console.log(b.__proto__.p)

let a ={p:10,name:'AYUSH'}
let b={q:25}
b = Object.create(a)
b.p++
console.log(b.p)
// c.q++
// console.log(c.q)
