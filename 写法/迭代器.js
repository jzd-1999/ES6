const hero = ["唐僧","孙悟空","猪八戒","沙和尚"];
for (const v of hero) {
    console.log(v);
}
for (const Key in hero) {
    console.log(Key,hero[Key]);
}
let iterator =  hero[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());