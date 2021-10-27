const banji = {
    name: "计算机科学与技术1班",
    people: [
        '刘备',
        '关羽',
        '张飞',
        'MC子龙'
    ],
    [Symbol.iterator]() {
        let index = 0;
        let _this = this;
        return {
            next() {
                if (index < _this.people.length) {
                    const result = {value: _this.people[index], done: false};
                    index++;
                    return result;
                } else {
                    return {value: undefined, done: true};
                }
            }
        }
    }
}
for (const banjiElement of banji) {
    console.log(banjiElement);
}