const p = new Promise(function (resolve, reject){
    setTimeout(function (){
        let err = "数据获取失败";
        reject(err);
    },1000)
});
p.then(function (value){
    console.log(value);
},function (reason){
    console.error(reason)
})