function fb(n){
    if (n === 1 || n === 2){
        return 1;
    }
    return fb(n - 1) + fb(n - 2)
}
/*执行过程：
* return fb(6-1) + fb(6-2)
* return fb(6-1) + fb(6-2) + fb(5-1) + fb(5-2)
* return fb(6-1) + fb(6-2) + fb(5-1) + fb(5-2) + fb(4-1) + fb(4-2)
* return fb(6-1) + fb(6-2) + fb(5-1) + fb(5-2) + fb(4-1) + fb(4-2) + fb(3-1) + fb(3-2)
* return fb(6-1) + fb(6-2) + fb(5-1) + fb(5-2) + fb(4-1) + fb(4-2) + 1 + 1
*/

console.log(fb(3)); 
console.log(fb(6));