function fn(n) {
    if (n === 1) {
        return 1;
    }
    return n * fn(n - 1)
}

console.log(fn(3))
/* 执行步骤：
return 3 * fn(2)
return 3 * (2 * fn(1))
return 3 * (2 * 1)
return 3 * (2)
return 6
* */