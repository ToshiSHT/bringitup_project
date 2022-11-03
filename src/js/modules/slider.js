export default class Slider {
    constructor(page, btns) {

        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
       

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
       
        if (n == 3) {
            setTimeout(()=>{
                this.hanson.classList.add('animated','fadeInUp');
                this.hanson.style.display = 'block';
            },3000);
        } else {
            this.hanson.classList.remove('animated','fadeInUp');
                this.hanson.style.display = 'none';
        }

    }

    plusSlides(n) {
        this.showSlides(this.slideIndex+=n);
    }

    render() {
        try{
            this.hanson = document.querySelector('.hanson');
            this.hanson.style.display = 'none';
        }catch(e){}

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
         this.showSlides(this.slideIndex); 
    }
 



}