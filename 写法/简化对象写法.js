let name = '关羽';
let change = function (){
    console.log("我天下无敌");
};
const school = {
    name,
    change,
    improve(){
        console.log("插标卖首");
    }
}
school.change();
school.improve();