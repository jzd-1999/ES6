class newStar {
    constructor(uname, age) {
        this.uname = uname;
        this.age = age;
    }
    sing(){
        if (this.uname != null && this.age !=null){
            console.log("I am"+this.uname+"I have"+this.age+"years old"+"I can speak English")
        }else{
            console.log("哇哇哇哇")
        }
    }

}
/*
* constructor:1、接收传递过来的参数，同时返回实例对象
*             2、new生成实例对象时，自动调用，如果不写constructor，类也会自动生成这个函数
* */

const ldh = new newStar("李德华", 20)
const yzh = new newStar("袁兆华", 23)
console.log(ldh.uname + ldh.age)
console.log(yzh.uname + yzh.age)
ldh.sing()
yzh.sing()