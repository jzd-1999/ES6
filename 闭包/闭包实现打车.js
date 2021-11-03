var car = (function () {
    var start = 13;
    var total = 0;
    return {
        price(n) {
            total = n <= 3 ? start : start + (n - 3) * 5;
            return total;
        },
        block(flag) {
            return flag ? total + 10 : total;
        }
    }
})();
console.log(car.price(5));
console.log(car.block(true));
console.log(car.price(1));
console.log(car.block(false));