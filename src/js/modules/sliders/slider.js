export default class Slider {
    constructor({container = null,
        btns = null,
        next = null,
        prev = null,
        activeClass = '',
        animate,
        autoplay,
        nextPage2 = null,
        prevPage2 = null }  = {}) {

        this.container = document.querySelector(container);
        try{
            this.slides = this.container.children;
        }catch(e){}
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;
        this.nextPage2 = document.querySelectorAll(nextPage2);
        this.prevPage2 = document.querySelectorAll(prevPage2);
       

       

       

    }
  



}