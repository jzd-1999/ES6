const fs = require('fs');
fs.readFile('./resources/静夜诗.md',(err, data) => {
    //失败，则抛出错误
    if (err) throw err;
    //没有则打印内容
    console.log(data.toString());
});
//使用Promise封装
const p = new Promise(function (resolve, reject) {
   fs.readFile('./resources/静夜诗.smd',(err, data) => {
       if (err) reject(err);
       resolve(data);
   })
});
p.then(function (value){
    console.log(value.toString())
},function (reason){
    console.log("读取失败")
})
