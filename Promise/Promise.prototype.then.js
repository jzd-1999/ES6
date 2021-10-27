const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("用户数据");
    }, 1000)
});
//调用then 方法 then方法的返回结果是Promise对象，对象状态由回调函数的执行结果决定
// 1.如果对调函数中返回的结果是非Promise 类型的属性，状态为成功，返回值为对象的成功的值
const result = p.then(value => {
    console.log(value);
    // 1.非Promise类型的属性
    // return 123;
    // 2.是Promise对象
    // return new Promise((resolve, reject) => {
    //     // resolve("ok");
    //     reject('error');
    // });
    // 3.抛出错误
    throw '出错啦!';
}, reason => {
    console.warn(reason);
});
console.log(result);
p.then(value => {},reason => {}).then(value => {},reason => {});