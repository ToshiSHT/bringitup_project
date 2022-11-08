import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor (btns) {
        super (btns);
      
    }

    showSlides(n) {
        if (n > this.slides.length){
            this.slideIndex = 1;
        }

        if(n < 1) {
            this.slideIndex = this.slides.length;
        }
        [...this.slides].forEach(slide => {
            slide.style.display = 'none';
            slide.classList.add('animated');
            slide.classList.remove('fadeIn');
            
        });

        this.slides[this.slideIndex-1].style.display = 'block';
        this.slides[this.slideIndex-1].classList.add('fadeIn');
       
    try {
        if (n == 3 &&  this.hanson ) {
            setTimeout(()=>{
                this.hanson.classList.add('animated','fadeInUp');
                this.hanson.style.display = 'block';
            },3000);
        } else {
            this.hanson.classList.remove('animated','fadeInUp');
                this.hanson.style.display = 'none';
        }


    }catch(e){}

    }
    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlides(1);
            });

            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });

        });

        this.prevPage2.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(-1);
            });
        });
        this.nextPage2.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(1);
            });
        });


    }

    plusSlides(n) {
        this.showSlides(this.slideIndex+=n);
    }
 

    render() {
        if (this.container) {
            try{
                this.hanson = document.querySelector('.hanson');
                this.hanson.style.display = 'none';
            }catch(e){}
            
            this.showSlides(this.slideIndex);
            this.bindTriggers();

    

        
             }
        }
}
 
  