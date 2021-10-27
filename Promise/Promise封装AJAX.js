const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.apiopen.top/getJoke");
    // xhr.open("GET","http://localhost:64352/book/getbookinfo?bookID=2")
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.status);
            }
        }
    };
});
p.then(value => {
    console.log(value)
}, reason => {
    console.error(reason)
})
