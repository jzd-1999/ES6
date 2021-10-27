const fs = require("fs");
// fs.readFile('./resources/悯农.md', (err, data) => {
//     fs.readFile('./resources/观书有感.md', (err1, data1) => {
//         fs.readFile('./resources/静夜诗.md', (err2, data2) => {
//             let result =data +'\r\n'+ data1 +"\r\n"+ data2;
//             console.log(result);
//         })
//     })
// })
const p = new Promise((resolve, reject) => {
    fs.readFile('./resources/悯农.md', (err, data) => {
        resolve(data);
    })
});
p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/观书有感.md', (err, data) => {
            resolve([value, data]);
        });
    })
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/静夜诗.md', (err, data) => {
            value.push(data);
            resolve(value);
        });
    })
}).then(value => {
    console.log(value.toString());
})