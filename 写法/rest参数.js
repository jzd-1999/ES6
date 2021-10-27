// ES6引入rest参数，用于获取函数的实参，用来代替arguments
// ES5获取实参的方式
function date(){
    console.log(arguments);
}
date("袁","兆","华");
//rest 参数   rest参数必须放到参数最后面
function data(...args){
    console.log(args);
}
data("袁","兆","基");
function fn(a,b,...args){
    console.log(a);
    console.log(b);
    console.log(args);
}
fn(1,2,3,4,5,6,7)

