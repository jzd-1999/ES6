let that;

class Tab {
    constructor(id) {
        that = this;
        this.main = document.querySelector(id);
        this.ul = this.main.querySelector('.first_nav ul:first-child');
        this.add = this.main.querySelector('.add');
        this.content = this.main.querySelector('#content');
        this.init();
    }

    init() {
        this.updateNode();
        this.add.addEventListener('click', this.addTab);
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].addEventListener('click', this.toggleTab);
            this.remove[i].addEventListener('click', this.delTab);
            this.spans[i].addEventListener('dblclick',this.changeTab);
            this.sections[i].addEventListener('dblclick',this.changeTab);
        }
    }

    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.icon-quxiao');
        this.spans = this.main.querySelectorAll('.first_nav li span:first-child');
    }

    toggleTab() {
        that.clearClass();
        this.className = 'li_active';
        that.sections[this.index].className = 'con_active';
    }

    clearClass() {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }

    addTab() {
        that.clearClass();
        let random = Math.random();
        let li = `<li class="li_active"><span>选项卡</span><i class="iconfont icon-quxiao"></i></li>`;
        let section = `<section class="con_active">新测试${random}</section>`;
        that.ul.insertAdjacentHTML('beforeend', li);
        that.content.insertAdjacentHTML('beforeend', section);
        that.init();
    }

    delTab(e) {
        e.stopPropagation();
        let index = this.parentNode.index;
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        if (document.querySelector('.li_active')) return;
        index --;
        that.lis[index] && that.lis[index].click();
    }

    changeTab() {
        //双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges():document.selection.empty();
        let str = this.textContent;
        this.innerHTML = `<input type="text" style="border: none;outline:none;width: 100%" />`;
        let input = this.children[0];
        input.value = str;
        input.select();
        input.addEventListener('blur',function (){
            this.parentNode.textContent = this.value;
        });
        input.addEventListener('keyup',function (e){
            if (e.keyCode === 13){
                this.blur();
            }
        });

    }
}

new Tab('#tab');