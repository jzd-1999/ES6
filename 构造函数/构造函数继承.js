function Father(name, age) {
    this.name = name;
    this.age = age;
}

Father.prototype.money = function () {
    console.log(1000000);
}

function Son(name, age, score) {
    Father.call(this, name, age);
    this.score = score;
}
// 这样赋值就是给的地址，会有问题
// Son.prototype = Father.prototype;
Son.prototype = new Father();
//如果利用对象的形式修改了原型对象，别忘了利用constructor 指回原来的对象
Son.prototype.constructor = Son;
Son.prototype.exam = function () {
    console.log("考试");
}

const son = new Son('兆基', 23, 88);
console.log(son);
console.log(Father.prototype);
console.log(Son.prototype.constructor);