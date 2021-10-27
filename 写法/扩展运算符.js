//伪数组转真数组可以使用rest参数的方法
const F4 = ["袁兆华", "袁兆基", "袁少华", "袁姚华"];

function eating() {
    console.log(arguments);
}
eating(...F4)
// 数组合并
const A = ["J","a","v","a"];
const B = ["S","c","r","i","p","t"];
const AB = [...A,...B];
console.log(AB);
// 数组的克隆
const C = ["E","F","G"];
const D = [...C];
console.log(D)