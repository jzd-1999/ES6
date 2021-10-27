let game = {}
let methods={
    up:Symbol(),
    down:Symbol()
};
game[methods.up] = function (){
    console.log("下降");
}
game[methods.down] =  function (){
    console.log("上升");
}
let games = {
    name:"传奇",
    //设置独一无二的属性和方法
    [Symbol('say')]:function (){
        console.log("我可以说话");
    },
    [Symbol('bang')]:function (){
        console.log("自爆");
    }
}
console.log(games);