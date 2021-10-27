const F4 = ["袁兆华","徐浪","刘洋","罗镇林"]
let [y,x,l,lu] = F4;
const zhao = {
    name:"袁兆华",
    age:23,
    guiche:function (){
        console.log("我会鬼扯");
    }
};
let {name,age,guiche} = zhao;
console.log(name,age,guiche);
guiche();
