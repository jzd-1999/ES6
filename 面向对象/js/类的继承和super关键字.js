// import * as myModule from "./类添加方法"
let that;
let _that;
class NewStar {
    constructor(arg) {
        this.uname = arg.uname;
        this.age = arg.age;
    }
    sing(){
        if (this.uname != null && this.age !=null){
            console.log("I am"+this.uname+"I have"+this.age+"years old"+"I can speak English");
        }else{
            console.log("哇哇哇哇");
        }
    }
    say(){
        console.log("我想要***");
    }
}
class nextStar extends NewStar{
    constructor(arg) {
        super(arg.uname,arg.age);//调用父类中的构造函数
        this.uname = arg.uname;
        this.age = arg.age;
        this.x = arg.x;
        this.y = arg.y;
        this.btn = document.querySelector('button');
        this.btn.onclick = this.subtract;
        that = this;
    }
    say(){
        super.say()
        console.log("我一点都不想***")
    }
    subtract(){
        console.log(this.x - this.y);
        _that = this;
        console.log(_that);
    }
}
let obj = {uname:"baiHua",age:23,x:20,y:8}
const he = new nextStar(obj)
console.log(he === that)
// he.sing()
// he.say()
// he.subtract()