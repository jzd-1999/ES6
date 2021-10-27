const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("出错啦！");
    }, 1000);
});
p.catch(reason => {
    console.warn(reason)
})