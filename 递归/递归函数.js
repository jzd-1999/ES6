//递归函数：函数内部自己调用自己，这个函数就是递归函数
var num = 1;
function fun(){
    console.log("重要的事情说6遍");
    if (num === 6){
        return false;
    }
    num++;
    fun();
}
fun();