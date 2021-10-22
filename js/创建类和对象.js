window.addEventListener('load', function () {
    class Star {
        constructor(uname, sex) {
            this.uname = uname;
            this.sex = sex;
            this.data = [{
                    address: "重庆",
                    job: "前端工程师",
                    salary: 13000
                },
                {
                    address: "北京",
                    job: "Java岗位",
                    salary: 14000
                },
                {
                    address: "上海",
                    job: "Golang开发",
                    salary: 18000
                },
                {
                    address: "杭州",
                    job: "数据分析师",
                    salary: 12000
                },
                {
                    address: "深圳",
                    job: "全栈工程师",
                    salary: 23000
                }

            ]
        }
    }
    const ldh = new Star("李德华", 18);
    console.log(ldh.uname, ldh.sex);
    const box = document.querySelector("#box");
    let box_li = null,
        box_spanOne = null,
        box_spanTwo = null,
        box_spanThree;

    for (let i = 0; i < ldh.data.length; i++) {
        box_li = this.document.createElement('li')
        box_spanOne = this.document.createElement('span')
        box_spanTwo = this.document.createElement('span')
        box_spanThree = this.document.createElement('span')
        box_spanOne.textContent = ldh.data[i].address;
        box_spanTwo.textContent = ldh.data[i].job;
        box_spanThree.textContent = ldh.data[i].salary;

        box_li.appendChild(box_spanOne)
        box_li.appendChild(box_spanTwo)
        box_li.appendChild(box_spanThree)
        box.children[0].appendChild(box_li)
    }
})