function Star(uname,age){
    this.uname = uname;
    this.age = age;
    this.sing = function(){
        console.log("sing()");
    }
}
let ldh =  new Star('刘德华',20);
console.log(ldh.uname);
ldh.sing();
//静态成员 只能通过构造函数访问
Star.sex = "男";
console.log(Star.sex);
