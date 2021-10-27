const s = new Set();
const s1 = new Set(['刘备', '关羽', '张飞', '赵云', '黄忠', '马超', '马超', '关羽']);
for (const v of s1) {
    console.log(v);
}
//数组去重
let arr = [11, 2, 3, 2, 2, 1, 3, 4, 5, 6, 44, 4, 4, 11, 2, 3,];
let result = [...new Set(arr)];
console.log(result);
//交集
let arr2 = [4, 5, 6, 7, 5, 4];
let res = [...new Set(arr)].filter(item => {
    let s2 = new Set(arr2);
    if (s2.has(item)) {
        return true
    } else {
        return false
    }
});
console.log(res);
//并集
let union = [...new Set([...arr, ...arr2])]
console.log(union);
//差集
let diff = [...new Set(arr)].filter(item => !(new Set(arr2).has(item)));
console.log(diff); 