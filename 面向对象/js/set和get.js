class Phone {
    constructor(price){
        this.value = price;
    }
    set price(value) {
        console.log("修改数据:__" + value);
        this.value = value;
    }

    get price() {
        console.log("读取数据");
        return this.value;
    }
}

const phone = new Phone(3799);
phone.price = 5799;
console.log(phone.price)