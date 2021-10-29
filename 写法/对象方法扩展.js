// Object.is() 判断两个值是否完全相等
console.log(Object.is(12, 13));
console.log(Object.is(NaN, NaN));
console.log(NaN === NaN);
// Object.assign()对象的合并
const obj1 = {
    host: 'localhost',
    port: 3306,
    name: 'root',
    pass: 'root',
    test: 'test'
}
const obj2 = {
    host: 'https://www.baidu.com',
    port: 33306,
    name: '百度',
    pass: 'admin',
    test: 'test2'
}
console.log(Object.assign(obj1, obj2))
// Object.setPrototypeOf()设置原型对象
const school = {
    name: "重庆邮电大学"
}
const cities = {
    xiaoqu: ['南岸', '南山']
}
Object.setPrototypeOf(school, cities)
console.log(school)
console.log(Object.getPrototypeOf(school))