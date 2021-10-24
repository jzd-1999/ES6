class Star {
    constructor(uname, age) {
        this.uname = uname;
        this.age = age;
    }
}
/*
* constructor:1、接收传递过来的参数，同时返回实例对象
*             2、new生成实例对象时，自动调用，如果不写constructor，类也会自动生成这个函数
* */

const ldh = new Star("李德华", 20)
const yzh = new Star("袁兆华", 23)
console.log(ldh.uname + ldh.age)
console.log(yzh.uname + yzh.age)