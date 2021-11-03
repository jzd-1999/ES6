const data = [{
    id: 6,
    name: "手机",
    goods:
        [{id: 1, name: "Huawei Mate40 Pro"},
            {id: 2, name: "Huawei P40 Pro"},
            {id: 3, name: "iphone13 Max Pro"},
            {id: 4, name: "iphone13 Pro"}]
}]

function getID(json, id) {
    let o = {}
    json.forEach(function (item) {
        if (item.id === id){
            o = item;
        }else if (item.goods && item.goods.length>0){
            getID(item.goods,id);
        }
    });
    return o;
}

console.log(getID(data, 4));
// console.log()