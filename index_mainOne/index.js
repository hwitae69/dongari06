const img_Container = document.querySelector('.img_container')
const img_ControlsContainer = document.querySelector('.img_controls');
const img_controls = ['previous', 'next'];
const galleryItem = document.querySelectorAll('.gallery-item');

class Carousel {

    constructor(container, items, controls){
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateimg(){ 
        this.carouselArray.forEach(el => {
            el.classList.remove('img-1');
            el.classList.remove('img-2');
            el.classList.remove('img-3');
            el.classList.remove('img-4');
            el.classList.remove('img-5');
        });

        this.carouselArray.slice(0, 5).forEach((el , i) => {
            el.classList.add(`gallery-item-${i+1}`);
        });
    }

    setCurrentState(direction){
        if(direction.className == 'gallery-controls-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }


    setControls() {
        this.carouselControls.forEach(control =>{
            img_ControlsContainer.appendChild(document.createElement('button')).className = `img_controls-${control}`;
            document.querySelector(`.img_controls-${control}`).innerText = control;
        });
}
    useControls(){
        const triggers = [...img_ControlsContainer.childNodes];
        triggers.forEach(control =>{
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new Carousel(img_Container, galleryItem, img_controls);