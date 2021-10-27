let m = new Map();
m.set("name", "Java");
m.set("fun", () => console.log("fun"));
let key = {
    school: "重庆对外经贸学院"
};
m.set(key, ['北京', '上海', '重庆']);
console.log(m.size);
console.log(m.get('fun'));
console.log(m.get(key));
console.log(m.get('name'));
for (const v of m) {
    console.log(v)
}
console.log(m.delete('name'));
m.clear()
console.log(m)
