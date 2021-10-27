function* gen(arg) {
    console.log(arg);
    let one = yield 111;
    console.log(one);
    let two = yield 222;
    console.log(two);
    let three = yield 333;
    console.log(three);
}

//传的参数将作为yield的返回结果 如：AAA:{value:111,done:false}
let iterator = gen('AAA');
console.log(iterator.next('BBB'));
console.log(iterator.next('CCC'));
console.log(iterator.next('DDD'));
