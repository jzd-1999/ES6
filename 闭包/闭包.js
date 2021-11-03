function fun(){
    let num =10;
    return function (){
        console.log(num)
    }
}
//闭包是一个函数（一个作用域可以访问另外一个函数的局部变量）
//闭包（closure）指有权访问另一个函数作用域中变量的函数
//闭包的主要作用：延申了变量的作用范围
//fun 外面的作用域可以访问fun内部的局部变量
fun()();