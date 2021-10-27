function getUsers() {
    setTimeout(() => {
        let data = "用户数据";
        iterator.next(data);
    }, 1000)
}

function getOrders() {
    setTimeout(() => {
        let data = "订单数据";
        iterator.next(data)
    }, 1000)
}

function getGoods() {
    setTimeout(() => {
        let data = "商品数据";
        iterator.next(data);
    }, 1000)
}

function* gen() {
    let users = yield getUsers();
    console.log(users);
    let orders = yield getOrders();
    console.log(orders);
    let goods = yield getGoods();
    console.log(goods);
}

let iterator = gen();
iterator.next();