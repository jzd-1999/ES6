window.addEventListener('load', function () {
    class Star {
        constructor(obj) {
            this.obj = obj;
            this.data = {
                color: ['red', 'pink', 'blue', 'green', 'skyblue', 'deeppink'],
                sideWidth: [200, 250, 300, 350, 400, 450]
            };
        };
        setColor = function (i) {
            this.obj.style.backgroundColor = this.data.color[i]
        };
        set_width_height = function (i) {
            this.obj.style.width = this.data.sideWidth[i] + 'px'
            this.obj.style.height = this.data.sideWidth[i] + 'px'
        };
        creat = function (object_element){
            let element = document.createElement(object_element);
            this.obj.appendChild(element)
        };
    }
    class animate  extends Star{
        constructor(data) {
            super(data);
            this.data = data
        }
    }
    const box = document.querySelector('#box');
    const box_obj = new Star(box)
    box_obj.set_width_height(1)
    box_obj.setColor(5)
    box_obj.creat('div')

})