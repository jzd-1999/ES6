//箭头函数适合与this无关的回调，定时器，数组的方法回掉
//不适合与this有关的问题，事件问题，对象方法
let sum = (a, b) => {
    return a + b;
};
let result = sum(4, 6);
console.log(result);

/*
*   1.this 是静态的，this始终指向函数声明的作用域下的this的值
*  */
function getName() {
    console.log(this.name);
}

let getName2 = () => {
    console.log(this.name);
};
window.name = "重庆对外经贸学院";
const school = {
    name: "袁兆华"
}
getName();
getName2();
getName.call(school);
getName2.call(school);
//不能作为构造实例对象
// let Person = (name,age)=>{
//     this.name =name;
//     this.age = age;
// }
// let me = new Person("xiao",30)
// console.log(me)
//不能使用arguments变量
// let fn = () => {
//     console.log(arguments)
// }
// fn(1, 2, 3);
//4.箭头函数的简写
//1.省略小括号，---形参只有一个的时候
let add = n => {
    return n + n;
}
console.log(add(4));
//2.省略花括号，当代码体只有一条语句的时候
let pow = n => n * n;
console.log(pow(6))
