import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    window.currentCoordinates = 0; 
    window.counterSlides = 1;
    window.slidesLength = this.slides.length;
    this._carousel = createElement(
      `<div class="carousel">
          <div class="carousel__arrow carousel__arrow_right">
            <img src="/assets/images/icons/angle-icon.svg" alt="icon">
          </div>
          <div class="carousel__arrow carousel__arrow_left">
            <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
          </div>
          <div class="carousel__inner">
            
          </div>
          </div>
        </div>`
    );
    
    for (let i = 0; i < this.slides.length; i++) {
      this.slide = createElement(
        `<div class="carousel__slide" data-id="${this.slides[i].id}">
          <img src="/assets/images/carousel/${this.slides[i].image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${this.slides[i].price.toFixed(2)}</span>
            <div class="carousel__title">${this.slides[i].name}</div>
            
          </div>`
      );
      this.button = createElement(`<button type="button" class="carousel__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>`); 
      
      this._carousel.querySelector(".carousel__inner").appendChild(this.slide);
      this.slide.querySelector(".carousel__caption").appendChild(this.button);
        
    }
    //set none status of left arrow when the 1 slide is presenting.
    if (window.counterSlides == 1) {
      this._carousel.querySelector(".carousel__arrow_left").style.display = `none`;
    }
    
    //listeners for click events on arrows, call needed functions
    this._carousel.querySelector(".carousel__arrow_right").addEventListener("click", this.moveRight);
    this._carousel.querySelector(".carousel__arrow_left").addEventListener("click", this.moveLeft);
    //listeners for click events on button add
    this._carousel.querySelectorAll(".carousel__button").forEach(item => {
      item.addEventListener("click", function() {
        let custEvent = new CustomEvent("product-add", { 
          detail: document.querySelectorAll(".carousel__slide")[window.counterSlides - 1].dataset.id, 
          bubbles: true 
        });
        this.dispatchEvent(custEvent);
      });
    });
  }
  
  moveRight() {
    let slideWidth = document.querySelector(".carousel__slide").offsetWidth;
    let innerCarousel = document.querySelector(".carousel__inner");
    window.currentCoordinates = window.currentCoordinates + slideWidth;
    innerCarousel.style.transform = `translateX(-${window.currentCoordinates}px)`;
    ++window.counterSlides;
    //check counterSlides and change display status of arrows
    if (window.counterSlides === window.slidesLength) {
      document.querySelector(".carousel__arrow_right").style.display = `none`;
    } else if (window.counterSlides === 1) {
      document.querySelector(".carousel__arrow_left").style.display = `none`;
    }
    
    if (window.counterSlides > 1) {
      document.querySelector(".carousel__arrow_left").style.display = ``;
    } else if (window.counterSlides < window.slidesLength) {
      document.querySelector(".carousel__arrow_right").style.display = ``;
    }
  }
    
  // move to the left via substraction of currentCoordinates of x  and width of slide 
  moveLeft() {
    let slideWidth = document.querySelector(".carousel__slide").offsetWidth;
    let innerCarousel = document.querySelector(".carousel__inner");

    window.currentCoordinates = window.currentCoordinates - slideWidth;
    innerCarousel.style.transform = `translateX(-${window.currentCoordinates}px)`;
    --window.counterSlides;

    if (window.counterSlides === window.slidesLength) {
      document.querySelector(".carousel__arrow_right").style.display = `none`;
    } else if (window.counterSlides === 1) {
      document.querySelector(".carousel__arrow_left").style.display = `none`;
    }

    if (window.counterSlides > 1) {
      document.querySelector(".carousel__arrow_left").style.display = ``;
    } else if (window.counterSlides < window.slidesLength) {
      document.querySelector(".carousel__arrow_right").style.display = ``;
    }
  }

  get elem() {
    return this._carousel;
  }

}
