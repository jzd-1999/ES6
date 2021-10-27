//创建Symbol
let s = Symbol();
console.log(s,typeof s);
//Symbol(描述值)
let s2 = Symbol("袁兆华");
let s3 = Symbol("袁兆华");
console.log(s2 === s3);
let s4 = Symbol.for("袁兆华");
let s5 = Symbol.for("袁兆华");
console.log(s4 === s5);
// Symbol 不能参与运算