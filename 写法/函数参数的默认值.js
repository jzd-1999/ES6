//形参初始值 具有默认值的参数，一般位置要靠后
function add(a,b=2,c){
    return a+b+c;
}
let result = add(3,6);
console.log(result)
// 2.与解构赋值结合
function connect({host="127.0.0.1",username,password,port}){
    console.log(host);
    console.log(username);
    console.log(password);
    console.log(port);
}
connect({host:"localhost",username:"root",password:"*****",port:3000});